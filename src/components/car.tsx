import Image from "next/image";
import car1 from '@/../public/images/car1.png'
import car2 from '@/../public/images/car2.png'

import {LuArrowDownUp} from "react-icons/lu";
import Link from "next/link";





export default function Car(){
    return(
        <div className="p-5">
            <div className="flex flex-wrap gap-3 top-8  items-center justify-center  sm:flex-wrap  lg:flex  "> 
{/* car1 */}
            <div className="car  w-[550px] h-[370px] justify-center ml-3 ">
                <div className="w-[284px] h-[160px] ">
                <h3 className="w-[272px] h-[96px] text-white text-[32px] font-sans font-bold">The Best Platform for Car Rental</h3>
                <p className="text-white text-[Plus Jakarta Sans]text-[16px] mt-4 mb-4">Ease of doing a car rental safely and reliably. Of course at a low price.</p>
             <Link href={"/detail"}> <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 active:underline">
              Rental Car
            </button></Link>  </div>
                <div className="ml-36 ">
                <Image src={car1} alt="car" className="h-[216px] w-[406px]"/></div>
            </div>

{/* car2 */}
            <div className="car1  w-[550px] h-[370px] ">
                <div className="w-[284px] h-[160px] ">
                <h3 className="w-[272px] h-[96px] text-white text-[32px] font-sans font-bold">Easy way to rent a car at a low price</h3>
                <p className="text-white text-[Plus Jakarta Sans]text-[16px] mt-4 mb-4">Providing cheap car rental services and safe and comfortable facilities.</p>
                <Link href={'/detail'}> <button className="bg-blue-400 text-white px-6 py-2 rounded-lg hover:bg-blue-700 active:underline">
              Rental Car
            </button></Link></div>
                <div className="ml-36 ">
                <Image src={car2} alt="car" className="h-[220px] w-[406px]"/></div>
            </div>

            </div>
       
    
        {/* Booking Section */}
        <div className="flex flex-col md:flex-row items-center gap-4 mt-8 bg-white p-6 rounded-lg shadow-md">
          {/* Pick-Up Section */}
          <div className="flex-1">
            <h3 className="text-lg font-medium mb-2">Pick-Up</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm mb-1">Locations</label>
                <select className="w-full border rounded-md p-2">
                  <option>Select your city</option>
                </select>
              </div>
              <div>
                <label className="block text-sm mb-1">Date</label>
                <input type="date" className="w-full border rounded-md p-2" />
              </div>
              <div>
                <label className="block text-sm mb-1">Time</label>
                <input type="time" className="w-full border rounded-md p-2" />
              </div>
            </div>
          </div>

          {/* Swap Button */}
          <div>
            <button className="bg-blue-500 text-white p-4 square-full shadow-md hover:bg-blue-600">
            <LuArrowDownUp />
              
            </button>
          </div>

          {/* Drop-Off Section */}
          <div className="flex-1">
            <h3 className="text-lg font-medium mb-2">Drop-Off</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm mb-1">Locations</label>
                <select className="w-full border rounded-md p-2">
                  <option>Select your city</option>
                </select>
              </div>
              <div>
                <label className="block text-sm mb-1">Date</label>
                <input type="date" className="w-full border rounded-md p-2" />
              </div>
              <div>
                <label className="block text-sm mb-1">Time</label>
                <input type="time" className="w-full border rounded-md p-2" />
              </div>
            </div>
          </div>
        </div>
   
      </div>
    
  )
        
       
    
}