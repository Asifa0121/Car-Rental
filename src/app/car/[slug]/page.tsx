import { client } from "@/sanity/lib/client";
import { CarType } from "../../../../types/type";
import { groq } from "next-sanity";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

interface CarPageProps {
    params: Promise<{slug:string}>
}



async function getCarData(slug:string): Promise <CarType> {
    return client.fetch(
        groq`*[_type == "car" && slug.current == $slug][0]{
        _id,
        name,
        brand,
        type,
        image,
        fuelCapacity,
        transmission,
        seatingCapacity,
        pricePerDay,
        }`, {slug}
    )
    
}


export default async function CarPage({params}: CarPageProps){
    const {slug} = await params;
    const car = await getCarData(slug)

    return (
        <div className=" m-32 gap-10">
        <div className="items-center justify-center  ">
            <div className="flex gap-10 items-center text-center">
                {car.image && (
                    <Image src={urlFor(car.image).url()} alt={car.name} width={500} height={500}/>
                )}
              
                <div className="w-80 bg-gray-200 text-black font-bold  rounded justify-center">
               <h2 className="text-[30px] font-serif m-6"> {car.name}</h2>
               <p className=" text-[18px] m-6">{car.type}</p>
               <p className=" text-[18px] m-6">  Rate: {car.pricePerDay}</p>
               <p className=" text-[18px] m-6"> Fuel Capacity: {car.fuelCapacity}</p>
               <p className=" text-[18px] m-6">Seating Capacity: {car.seatingCapacity}</p>
             
               </div>
             
        
                
            </div>
            <button className="bg-blue-900 text-white px-6 py-2 rounded-lg ml-96 m-8 hover:bg-blue-700 active:underline">
              Book Now!
            </button>
        </div>
        </div>
    )
}