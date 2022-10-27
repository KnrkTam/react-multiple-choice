import React from "react";
import { FaArrowLeft, FaArrowRight, FaMapPin } from "react-icons/fa";
import { ArrowDownIcon } from "../svg";

export default function RoadtestCard({ data }: any) {
  return (
    <div className="w-full h-full min-h-[500px] px-5 lg:py-10 bg-gray-100  ">
      <div className="space-x-2 flex">
        <button className="lg:mr-5 px-5 hidden lg:block">
          <FaArrowLeft className="text-gray-500" />
        </button>
        {/* Carousell */}
        <div className="flex flex-col w-full lg:flex-row lg:items-center">
          <div className=" flex flex-col justify-center lg:w-1/3">
            <p className="flex-1 text-gray-500 w-auto mt-5">九龍</p>
            <div className="flex justify-between items-center">
              <div className="flex items-center my-2 hover:underline cursor-pointer">
                <p className="font-extrabold text-2xl mr-2 ">忠義街</p>
                <ArrowDownIcon className=" text-gray-500" />
              </div>
              <div className="">
                <FaMapPin className="h-6 w-6" />
              </div>
            </div>
            <p className="text-lg hidden lg:block">
              抽中忠義路作為路試路線的同學仔可以相對地較會放心，因為其整體路線比其他的短，難度相對較低。如果要行路線一
              - 迦密村街的話，則要留意附近死車，路面狹窄，在轉線前必須做Shoulder
              check動作，檢查左右盲點/盲區內有沒有車輛後，才可小心地轉線。而且亦要留神附近的學生和行人，禮讓行人過馬路，冷靜跟足指示就可以順利過關
            </p>
          </div>
          <div className="flex-1 h-full flex justify-center items-center">
            <img
              className="object-cover max-h-[400px]"
              src="images/roadinfo/忠義街_佛光街.png"
              alt="photo"
            />
          </div>
          <div className="h-full flex lg:justify-start lg:space-y-3 lg:w-1/5 lg:flex-col ">
            <button className="rounded-lg w-full mr-2 lg:mr-0  bg-zinc-100 border border-gray-400 p-2 text-gray-600">
              佛光街
            </button>
            <button className="rounded-lg w-full bg-zinc-100 border border-gray-400 p-2 text-gray-600">
              迦密村街
            </button>
          </div>
          <p className="text-lg mt-2 lg:hidden">
            抽中忠義路作為路試路線的同學仔可以相對地較會放心，因為其整體路線比其他的短，難度相對較低。如果要行路線一
            - 迦密村街的話，則要留意附近死車，路面狹窄，在轉線前必須做Shoulder
            check動作，檢查左右盲點/盲區內有沒有車輛後，才可小心地轉線。而且亦要留神附近的學生和行人，禮讓行人過馬路，冷靜跟足指示就可以順利過關
          </p>
        </div>

        <button className="px-5 lg:ml-5 hidden lg:block">
          <FaArrowRight className="text-gray-500" />
        </button>
      </div>
    </div>
  );
}
