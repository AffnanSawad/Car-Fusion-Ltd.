import { BiSolidCartAdd } from "react-icons/bi";
import { TbListDetails } from "react-icons/tb";


const CarCard = ({car}) => {

    const{id, image , description , fuel_type , model ,brand , title,price} = car;
    return (
        <div className="">  









<div className="card bg-white w-96 shadow-xl flex flex-col h-full">
  <figure className="px-2 pt-2">
    <img
      src={image}
      alt={title}
      className=" rounded-md object-cover h-64 w-full" // Ensure image doesn't overflow
    />
  </figure>
  <div className="card-body flex flex-col justify-between flex-grow">
    <h2 className="card-title text-2xl font-bold">{title}</h2>
    <div className="flex gap-2 my-2">
      <p className="font-semibold">
        <span className="font-bold">Model :</span> {model}
      </p>
      <p className="font-semibold">
        <span className="font-bold">Fuel :</span> {fuel_type}
      </p>
    </div>
    <div className="text-center my-3">
      <p className="text-2xl font-bold italic">Price : $ {price}</p>
    </div>
    <div className="card-actions flex gap-2 mt-4">
      

    <button className="btn bg-black font-bold hover:bg-[#C19A6B] text-white w-full py-2 rounded-lg transition duration-300">
        <TbListDetails />
        View Details
      </button>


      
      <button className="btn bg-[#C19A6B] text-white font-bold hover:bg-black w-full py-2 rounded-lg transition duration-300">
        <BiSolidCartAdd />
        Add To Your Cart
      </button>


    


    </div>
  </div>
</div>

        </div>
    );
};

export default CarCard;