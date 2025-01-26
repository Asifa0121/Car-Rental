"use client";
// import images
import view from "@/./../public/images/View.png"
import view1 from "@/./../public/images/View 1.png"
import view2 from "@/./../public/images/View 2.png"
import view3 from "@/./../public/images/View 3.png"
import descr from "@/./../public/images/deatail.png"
import rev from "@/./../public/images/rev.png"

// import link and module

import React from "react";
import Image from "next/image";
import Link from "next/link";
import SideBar from "../showCars/sidebar";
import { CardData } from "@/components/cardMenu";

// Function of detail page
export default function DetailPage() {
  return (
    <div className="w-full flex">
      <div className="first hidden sm:flex w-[25%]">
        <SideBar />
      </div>


      <div className=" w-full sm:w-[75%] bg-[#f6f7f9] p-4 sm:p-6  flex flex-col gap-10 font-[family-name:var(--font-geist-sans)]">
        <section className=" w-full flex flex-col md:flex-row gap-5  items-center justify-around">
          <div className="first flex flex-col gap-4 w-full  lg:max-w-[470px]  lg:max-h-[508px]">
            <div>
              <Image src={view} alt="" width={492} height={360} />
            </div>
            <div className=" flex flex-wrap items-center justify-between gap-2 lg:gap-2">
              <Image src={view1} alt="" width={148} height={124} />
              <Image src={view2} alt="" width={148} height={124} />
              <Image src={view3} alt="" width={148} height={124} />
            </div>
          </div>
          <div className="flex flex-col w-full  lg:max-w-[492px] h-auto lg:max-h-[508px] bg-white justify-between rounded-xl shadow-md">
            <Image
              src={descr}
              alt="Detail Car"
              width={492}
              height={508}
              className="w-full h-auto rounded-t-xl object-cover"
            />

            <div className="p-4 flex  items-center gap-4">
              <div className="flex items-center justify-between w-full">
                <h1 className="font-bold text-lg sm:text-xl lg:text-2xl">
                  $80.00 /{" "}
                  <span className="text-gray-500 text-sm lg:text-base">
                    day $100.00
                  </span>
                </h1>
              </div>
              <Link href={"/payment"}>
                <button className="bg-[#3563e9] hover:bg-[#264ac6] transition-all p-3 sm:p-4 px-6 sm:px-10 text-nowrap  text-white rounded-md w-full max-w-[180px] text-center">
                  Rent Now
                </button>
              </Link>
            </div>
          </div>
        </section>
        <section className=" w-full flex items-center justify-center">
          <Image
            src={rev}
            alt=""
            width={1010}
            height={452}
            className=" hidden md:flex"
          />
        
        </section>
        <div>
          <CardData/>
        </div>


      </div>
    </div>
  );
}