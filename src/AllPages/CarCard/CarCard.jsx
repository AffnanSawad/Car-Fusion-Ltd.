import { BiSolidCartAdd } from "react-icons/bi";
import { TbListDetails } from "react-icons/tb";
import { Link } from "react-router-dom";


const CarCard = ({car}) => {

    
  //  Destructuring Data :
  
  const{id, image , fuel_type ,details, model ,brand , title,price} = car;
   
   
   
   
    return (
        <div className="Card-Container">  
 

<div className="card bg-white w-96 shadow-xl flex flex-col h-full">
  <figure className="px-2 pt-2">
    <img
      src={image}
     
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
      

  {/* View Details Button */}
   
   
  
  
  <Link to={`/details/${id}`} className="flex w-full">
  
  
  <button className="btn bg-black font-bold w-full hover:bg-[#C19A6B] text-white py-2 rounded-lg transition duration-300">
        <TbListDetails />
        View Details
      </button>
  
  
  
  </Link>
  
    
  



      
      <Link  className="flex w-full">
 
 
  <button className="btn bg-[#C19A6B] text-white font-bold hover:bg-black w-full py-2 rounded-lg transition duration-300">
    <BiSolidCartAdd />
    Add To Your Cart
  </button>


</Link>



    


    </div>
  </div>
</div>

        </div>
    );
};

export default CarCard;