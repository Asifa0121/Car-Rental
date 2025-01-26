import { client } from "@/sanity/lib/client";
import { CarType } from "../../../../types/type";
import { groq } from "next-sanity";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";

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
        <div className="">
        <div className="items-center justify-center ">
            <div className="flex flex-wrap items-center justify-center gap-5 ">
                {car.image && (
                    <Image src={urlFor(car.image).url()} alt={car.name} height={300} width={300} className=""/>
                )}
                   
              
            <div className="w-64 bg-gray-200 text-black  rounded ">
               <h2 className="text-[25px] font-serif font-bold m-6"> {car.name}</h2>
               <p className=" text-[16px] m-6">{car.type}</p>
               <p className=" text-[16px] m-6">  Rate: {car.pricePerDay}</p>
               <p className=" text-[16px] m-6"> Fuel Capacity: {car.fuelCapacity}</p>
               <p className=" text-[16px] m-6">Seating Capacity: {car.seatingCapacity}</p>
           
            </div>
                <Link href={"/payment"}>
            <button className="bg-blue-900 text-white px-6 py-2 rounded-lg m-8 hover:bg-blue-700 active:underline">
                Rent Now!
            </button></Link>

            </div>

        </div>
        </div>
    )
}