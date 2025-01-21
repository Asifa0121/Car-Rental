import Image from 'next/image'; 
import { CiSearch } from 'react-icons/ci';
import { FaHeart } from 'react-icons/fa';
import { IoIosNotifications } from 'react-icons/io';
import { RiSettings3Fill } from 'react-icons/ri';
import logo from "@/../public/images/logo.png" 


    
export default function NavBar(){
  return(
    <div className="w-full overflow-hidden md:flex-row items-center justify-between p-4  ">
    <div className="flex flex-col md:flex-row  gap-4 md:gap-6 bg-white border w-full h-[124px] justify-between items-center px-4 md:px-8">
      {/* Logo */}
      <div className="title text-lg font-semibold w-[148px] h-[44px]">
        MORENT
      </div>
      
      {/* Search Bar */}
      <div className="border border-gray-300 bg-white flex items-center w-full md:w-[492px] h-[44px] px-4 rounded-md">
        <CiSearch className="text-gray-500 mr-2" />
        <input
          type="text"
          placeholder="Search something here"
          className="w-full py-2 rounded-md pr-10 focus:outline-none"
        /> </div>
        {/* Icons */}
        <div className='flex gap-4'>
        <FaHeart className="w-[26px] h-[26px] text-gray-500" />
            <IoIosNotifications className="w-[30px] h-[30px] text-gray-500" />
            <RiSettings3Fill className="w-[30px] h-[30px] text-gray-500" />
            {/* profile Image */}
            <Image src={logo} alt="profile" className="w-[44px] h-[44px] rounded-full"
            />
        </div>
     
      </div>
      </div>
  )
}
