import React from "react";
import { Heading } from "@chakra-ui/react";

export default function ProgressBar() {
  return (
    <>
      <div className="flex justify-between w-full mb-5">
        <h2 className="font-normal text-md md:text-2xl text-gray-500 text-red-500">
          網上報名
        </h2>
        <h2 className="font-normal text-md md:text-2xl text-gray-500 ">繳費</h2>
        <h2 className="font-normal text-md md:text-2xl text-gray-500 ">
          確認報名
        </h2>
      </div>
      <div className="flex items-center">
        <div className="border-8 md:border-[10px] border-red-500 rounded-full w-8 h-8 md:w-10 md:h-10 z-20 ml-5" ></div>
        <div className="flex-1 h-3 scale-[103%] bg-gray-500 w-full z-10"></div>
        <div className="border-8 md:border-[10px] border-gray-500 rounded-full w-8 h-8 md:w-10 md:h-10 z-20"></div>
        <div className="flex-1 h-3 scale-[103%] bg-gray-500 w-full z-10"></div>
        <div className="border-8 md:border-[10px] border-gray-500 rounded-full w-8 h-8 md:w-10 md:h-10 z-20 mr-5"></div>
      </div>
    </>
  );
}
