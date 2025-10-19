import React, {
    useState,
    useCallback,
    useImperativeHandle,
    forwardRef,
} from "react";
import Cropper, { type Area } from "react-easy-crop";

const ImageUploader = forwardRef(({ name, onChange }: any, ref) => {
    const [imageSrc, setImageSrc] = useState<string | null>(null);
    const [crop, setCrop] = useState({ x: 0, y: 0 });
    const [zoom, setZoom] = useState(1);
    const [croppedAreaPixels, setCroppedAreaPixels] = useState<Area | null>(null);

    const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files?.length) {
            const file = e.target.files[0];
            const reader = new FileReader();
            reader.onload = () => setImageSrc(reader.result as string);
            reader.readAsDataURL(file);
            onChange({ target: { name, files: [file] } });
        }
    };

    const onCropComplete = useCallback((_: Area, croppedAreaPixels: Area) => {
        setCroppedAreaPixels(croppedAreaPixels);
    }, []);

    const createCroppedImage = async () => {
        if (!imageSrc || !croppedAreaPixels) return;

        const image = new Image();
        image.src = imageSrc;
        await new Promise((resolve) => (image.onload = resolve));

        const canvas = document.createElement("canvas");
        canvas.width = croppedAreaPixels.width;
        canvas.height = croppedAreaPixels.height;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;
        ctx.fillStyle = "#ffffff";
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.drawImage(
            image,
            croppedAreaPixels.x,
            croppedAreaPixels.y,
            croppedAreaPixels.width,
            croppedAreaPixels.height,
            0,
            0,
            canvas.width,
            canvas.height
        );

        return new Promise<File | null>((resolve) => {
            canvas.toBlob((blob) => {
                if (blob) {
                    const file = new File([blob], "cropped.jpg", { type: "image/jpeg" });
                    resolve(file);
                } else {
                    resolve(null);
                }
            }, "image/jpeg");
        });
    };

    useImperativeHandle(ref, () => ({
        async getCroppedImage() {
            const file = await createCroppedImage();
            if (file) {
                onChange({ target: { name, files: [file] } });
            }
            return file;
        },
    }));

    return (
        <div>
            <input type="file" accept="image/*" onChange={handleFile} />
            {imageSrc && (
                <>
                    <div style={{ position: "relative", width: 400, height: 400 }}>
                        <Cropper
                            image={imageSrc}
                            crop={crop}
                            zoom={zoom}
                            aspect={1}
                            onCropChange={setCrop}
                            onZoomChange={setZoom}
                            onCropComplete={onCropComplete}
                            restrictPosition={false}
                            objectFit="contain"
                            minZoom={0.1}
                            maxZoom={3}
                        />
                    </div>
                    <input
                        type="range"
                        min={0.1}
                        max={3}
                        step={0.1}
                        value={zoom}
                        onChange={(e) => setZoom(Number(e.target.value))}
                    />
                </>
            )}
        </div>
    );
});

export default ImageUploader;
