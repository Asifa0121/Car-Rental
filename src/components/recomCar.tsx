'use client'
import Image from "next/image";
import { CardFooter, CardTitle } from "./ui/card";
import { FaHeart } from "react-icons/fa";
import { FaGasPump } from "react-icons/fa";
import { TbCircleTriangle } from "react-icons/tb";
import { MdPeopleAlt } from "react-icons/md";
import { useEffect, useState } from "react";
import { CarType } from "../../types/type";
import { client } from "@/sanity/lib/client";
import {RecommandCar } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";


export const RecomandCar = ()=>{
  const [car, setCarlist] = useState<CarType[]>([])


  useEffect(()=>{
    async function fetchCarData(){
      const fetchedData:CarType[]= await client.fetch(RecommandCar)
      setCarlist(fetchedData)
    }

    fetchCarData();
  }, [])

  return(

    <div>
  <div className="ml-[24px] text-[16px]">
                <ul className="flex justify-between p-9 font-bold">
                    <li className="text-gray-500">Recommand Car</li>
               
                </ul>
            </div> 
    
    <div className="flex flex-wrap items-center justify-center">


   {car.map((car)=>(
    <div key={car._id}
    className=" items-center justify-center gap-3 ml-4 md:flex-row">
     


     <Link href={`/car/${car.slug?.current}`}>
      <div className="bg-[#FFFFFF] h-[388px] w-[317px] rounded-xl hover: border-blue-900">
            <div className=" mt-[20px] ml-[24px] gap-1">
               <CardTitle className="text-black  flex justify-between" >{car.name}<FaHeart className="text-red-700 h-[24px] w-[24px]" /></CardTitle> 
               <p className="text-gray-500 text-[14px]">{car.type}</p>
               </div> {car.image && (
                    <Image src={urlFor(car.image).url()} alt={car.name}width={200} height={200} className="w-[272px] h-[124px] ml-[22px] mt-[24px]"/>

               )}   
                  
                <CardFooter className="text-gray-600 gap-3 mt-5"> <FaGasPump  /> {car.fuelCapacity}
                <TbCircleTriangle /> {car.transmission}
                <MdPeopleAlt /> {car.seatingCapacity}
                </CardFooter> 
                <div className="flex justify-between">
                <h2 className="text-black text-[20px] ml-4 font-bold">{car.pricePerDay}</h2><br/>
                            
                <button className="bg-blue-700  text-white px-6 py-2 rounded-sm hover:bg-blue-400">
              Rent Now
            </button>
            </div>         
            </div>   
            </Link>   
    
    </div>

   ))}
    </div>

    <div className="flex items-center justify-center ">
        <Link href={"/showCars"}>
          <div className="bg-blue-700 w-[130px] text-[16px] text-pretty rounded text-white px-6 py-2 hover:bg-blue-400 active:underline">
            Show more
          </div>
        </Link>
      </div>

    

 
    </div>
  
   
  )

  
}





