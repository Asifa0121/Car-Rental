'use client'
import Image from "next/image";
import { CardFooter, CardTitle } from "@/components/ui/card";
import { FaHeart } from "react-icons/fa";
import { FaGasPump } from "react-icons/fa";
import { TbCircleTriangle } from "react-icons/tb";
import { MdPeopleAlt } from "react-icons/md";
import { useEffect, useState } from "react";
import { CarType } from "../../../types/type";
import { client } from "@/sanity/lib/client";
import {  RecommandCar } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import SideBar from './sidebar'
import Link from "next/link";


export default function Page() {
  const [car, setCarlist] = useState<CarType[]>([])





useEffect(()=>{
    async function fetchCarData(){
      const fetchedData:CarType[]= await client.fetch(RecommandCar)
      setCarlist(fetchedData)
    }

    fetchCarData();
  }, [])

  return (
    <div className="w-full flex">
      {/* sidebar  */}
      <div className="first hidden sm:flex w-[20%]">
        <SideBar />
      </div>

      <div className="sec w-full sm:w-[80%] bg-[#f6f7f9] p-4 sm:p-6  flex flex-col gap-10 font-[family-name:var(--font-geist-sans)]">
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
                 
                     
                     <button className="bg-blue-700  text-white px-6 py-2 rounded-sm hover:bg-blue-400 active:underline">
                   Rent Now
                 </button>
                 </div>
              
                 </div>
                 </Link>
     
     
     
     
         
         </div>
     
        ))}
         </div>
      </div>
    </div>
  );
}