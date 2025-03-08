import React, { useEffect, useState } from 'react';
import CarCard from '../CarCard/CarCard';

const CarCollection = () => {


    //  Set States :

    const [ AllCars , SetAllCars] = useState([]);

    useEffect( ()=> {

        fetch('/data.json')
        .then(res=> res.json())
        .then(data=> SetAllCars(data))


    }  ,[])












    return (
        <div>
             
             <div className="relative w-full h-[75vh]">
  {/* Background Image */}
  <img
    src="https://i.ibb.co.com/yFDJW094/samuele-errico-piccarini-Myj-VRe-Z5-GLQ-unsplash.jpg"
    className="w-full h-full object-cover"
    alt=""
  />

  {/* Title (Centered Text) */}
  <div className="absolute inset-0 flex items-center justify-center bg-black/50 bg-opacity-40">
    <h1 className="text-3xl text-white md:text-4xl font-bold text-center">
     Our <span className="text-orange-400"> Collections </span>
    </h1> 
   
  </div>
</div>
            
<div className="grid grid-cols-1   md:grid-cols-2 lg:grid-cols-3 gap-6 bg-orange-100 p-10">
   
   
    {AllCars.map(car => (
        <CarCard key={car.id} car={car} />
    ))}



</div>

        </div>
    );
};

export default CarCollection;