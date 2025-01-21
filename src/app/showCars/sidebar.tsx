import { Check,  } from "lucide-react";
import { BiRectangle } from "react-icons/bi";



export default function SideBar(){
    return(
        <div>
           
           
            {/* Type */}
            <div className="w-[360px] h-[2016px]right-1 bg-[#FFFFFF] mt-8 ml-8 gap-7">
                <h4 className="text-gray-500 font-mono">Type</h4>
                <ul className="leading-10 gap-8 text-[20px]">
                <li className="flex items-center gap-2 text-[#69778b] -bofontld"> <Check className=" border bg-blue-900 text-white"/> Sport<span className="text-gray-400">(10)</span></li>
                <li className="flex items-center gap-2 text-[#69778b] font-bold"> <Check className="border bg-blue-900 text-white"/> Suv<span className="text-gray-400">(12)</span></li>
                <li className="flex items-center gap-2 text-[#69778b] font-bold">  <BiRectangle/>   MPV <span className="text-gray-400">(16)</span></li>
                <li className="flex items-center gap-2 text-[#69778b] font-bold"><BiRectangle/> Sedan<span className="text-gray-400">(20)</span></li>
                <li className="flex items-center gap-2 text-[#69778b] font-bold"> <BiRectangle/> Coupe<span className="text-gray-400">(14)</span></li>
                <li className="flex items-center gap-2 text-[#69778b] font-bold">  <BiRectangle/>Hatchback<span className="text-gray-400">(14)</span></li>
                </ul>         
               
            </div>
            {/* Capacity */}

            <div className="w-[360px] h-[2016px]right-1 bg-[#FFFFFF] mt-8 ml-8 gap-7">
            
            <h4 className="text-gray-500 font-mono">Capacity</h4>
                <ul className="leading-10 gap-8 text-[20px]">
                <li className="flex items-center gap-2 text-[#69778b] font-bold"> <Check className=" border bg-blue-900 text-white"/> 2 person<span className="text-gray-400">(10)</span></li>
                <li className="flex items-center gap-2 text-[#69778b] font-bold"> <BiRectangle/> 4 person<span className="text-gray-400">(12)</span></li>
                <li className="flex items-center gap-2 text-[#69778b] font-bold">  <BiRectangle/>   8 person <span className="text-gray-400">(16)</span></li>
                <li className="flex items-center gap-2 text-[#69778b] font-bold"> <Check className=" border bg-blue-900 text-white"/>  8 or more<span className="text-gray-400">(20)</span></li>

                </ul>   
            </div>

            

 
 

        </div>
    )
}



