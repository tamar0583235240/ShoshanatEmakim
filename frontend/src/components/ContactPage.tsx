// import "../style/ContactPage.css";
// import { useState } from "react";
// import { postData } from "../service/apiService";

// const ContactPage: React.FC = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     phone: "",
//     email: "",
//     message: ""
//   });
//   const [errors, setErrors] = useState<{ [key: string]: string }>({});

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const validate = () => {
//     let newErrors: { [key: string]: string } = {};

//     if (!formData.email.trim()) {
//       newErrors.email = "מייל הוא שדה חובה";
//     } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
//       newErrors.email = "מייל לא תקין";
//     }

//     if (!formData.phone.trim()) {
//       newErrors.phone = "טלפון הוא שדה חובה";
//     } else if (!/^\d+$/.test(formData.phone)) {
//       newErrors.phone = "טלפון לא תקין (רק ספרות)";
//     }

//     return newErrors;
//   };

//   const handleSubmit = async () => {
//     const newErrors = validate();
//     if (Object.keys(newErrors).length > 0) {
//       setErrors(newErrors);
//       return;
//     }

//     try {
//       const response = await postData(formData, "/contact");
//       console.log("Response from server:", response);

//       if (response.message) {
//         alert(response.message + " " + response.status);
//       }

//       setFormData({ name: "", phone: "", email: "", message: "" });
//       setErrors({});
//     } catch (error) {
//       alert("אירעה שגיאה בשליחת הטופס");
//     }
//   };

//   return (
//     <section className="contact-section">
//       <div className="form-container">
//         <div className="contact-form">
//           <h2>ליצירת קשר</h2>
//           <span className="subtitle">מוזמנים לכתוב לנו</span>

//           <div className="inputs-row">
//             <input
//               name="name"
//               placeholder="שם"
//               value={formData.name}
//               onChange={handleChange}
//             />
//             <input
//               name="phone"
//               placeholder="טלפון"
//               value={formData.phone}
//               onChange={handleChange}
//             />
//           </div>
//           {errors.phone && <p className="error">{errors.phone}</p>}

//           <input
//             name="email"
//             placeholder="מייל"
//             value={formData.email}
//             onChange={handleChange}
//           />
//           {errors.email && <p className="error">{errors.email}</p>}

//           <textarea
//             name="message"
//             placeholder="הודעה"
//             value={formData.message}
//             onChange={handleChange}
//           ></textarea>

//           <button onClick={handleSubmit}>שליחה &lt;&lt;</button>
//         </div>

//         <div className="contact-info">
//           <h2>להזמנות</h2>
//           <p><i className="fas fa-map-marker-alt"></i>רשב”י 15 מודיעין עילית</p>
//           <p><i className="fas fa-phone"></i>08-9744553</p>
//           <p><i className="fas fa-mobile-alt"></i>053-319-1206</p>
//           <p><i className="fas fa-envelope"></i>9744553@gmail.com</p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ContactPage;
import "../style/ContactPage.css"; 
import { useState } from "react"; 
import { postData } from "../service/apiService"; 
 
const ContactPage: React.FC = () => { 
  const [formData, setFormData] = useState({ 
    name: "", 
    phone: "", 
    email: "", 
    message: "" 
  }); 
  const [errors, setErrors] = useState<{ [key: string]: string }>({}); 
 
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => { 
    setFormData({ ...formData, [e.target.name]: e.target.value }); 
  }; 
 
  const validate = () => { 
    let newErrors: { [key: string]: string } = {}; 
 
    if (!formData.email.trim()) { 
      newErrors.email = "מייל הוא שדה חובה"; 
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) { 
      newErrors.email = "מייל לא תקין"; 
    } 
 
    if (!formData.phone.trim()) { 
      newErrors.phone = "טלפון הוא שדה חובה"; 
    } else if (!/^\d+$/.test(formData.phone)) { 
      newErrors.phone = "טלפון לא תקין (רק ספרות)"; 
    } 
 
    return newErrors; 
  }; 
 
  const handleSubmit = async () => { 
    const newErrors = validate(); 
    if (Object.keys(newErrors).length > 0) { 
      setErrors(newErrors); 
      return; 
    } 
 
    try { 
      const response = await postData(formData, "/contact"); 
      console.log("Response from server:", response); 
 
      if (response.message) { 
        alert(response.message + " " + response.status); 
      } 
 
      setFormData({ name: "", phone: "", email: "", message: "" }); 
      setErrors({}); 
    } catch (error) { 
      alert("אירעה שגיאה בשליחת הטופס"); 
    } 
  }; 
 
  return ( 
    <section className="contact-section"> 
      <div className="form-container"> 
        <div className="contact-form"> 
          <h2>
            ליצירת קשר
            <i className="fas fa-envelope contact-icon"></i>
          </h2> 
          <span className="subtitle">מוזמנים לכתוב לנו</span> 
 
          <div className="inputs-row-three"> 
            <input 
              name="name" 
              placeholder="שם" 
              value={formData.name} 
              onChange={handleChange} 
            /> 
            <input 
              name="phone" 
              placeholder="טלפון" 
              value={formData.phone} 
              onChange={handleChange} 
            /> 
            <input 
              name="email" 
              placeholder="מייל" 
              value={formData.email} 
              onChange={handleChange} 
            /> 
          </div> 
          
          <div className="errors-row">
            {errors.phone && <span className="error">{errors.phone}</span>}
            {errors.email && <span className="error">{errors.email}</span>}
          </div>
 
          <div className="message-row">
            <textarea 
              name="message" 
              placeholder="הודעה" 
              value={formData.message} 
              onChange={handleChange} 
            ></textarea> 
          </div>
 
          <button onClick={handleSubmit}>שליחה &lt;&lt;</button> 
        </div> 
 
        <div className="contact-info centered"> 
          <h2>להזמנות</h2> 
          <p><i className="fas fa-map-marker-alt"></i>רשב"י 15 מודיעין עילית</p> 
          <p><i className="fas fa-phone"></i>08-9744553</p> 
          <p><i className="fas fa-mobile-alt"></i>053-319-1206</p> 
          <p><i className="fas fa-envelope"></i>9744553@gmail.com</p> 
        </div> 
      </div> 
    </section> 
  ); 
}; 
 
export default ContactPage;