const BouquetCard = ({key, bouquet }) => {
  return (
    <div key={key}>
       <div className="relative bg-white border border-gray-200 overflow-hidden cursor-pointer group">
      <div className="relative">
        <img
          src={bouquet.image}
          alt={bouquet.title}
          className="w-full h-48 object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 border-t border-gray-200 p-3 bg-white group-hover:bg-black transition-all duration-300">
          <p className="text-sm text-center font-medium leading-tight text-gray-800 group-hover:text-white transition-all duration-300">{bouquet.title}</p>
        </div>
      </div>
    </div>
    </div>
  )
}

export default BouquetCard
