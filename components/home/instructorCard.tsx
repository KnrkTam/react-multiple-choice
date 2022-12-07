import React from "react";
import { FaCar, FaClock } from "react-icons/fa";

export default function InstructorCard({ data }: any) {
  return (
    <div
      className="flex flex-col justify-between snap-center min-w-[40vh] lg:min-w-[450px] h-auto shadow-lg bg-zinc-100 rounded-xl"
      key={data.title}
    >
      <div className="flex-1 font-light flex flex-col p-5 h-1/3">
        <div className="flex justify-start w-full items-center lg:text-xl">
          <img
            className="rounded-full w-[10vh] h-[10vh] mr-4 lg:mr-7"
            src="test-image.jpeg"
            alt="instructor_img"
          />
          <div className="flex flex-col mr-5">
            <p className="font-bold text-xl text-black lg:text-2xl">李武強</p>
            <p className="text-gray-500">輕型貨車 棍波</p>
            <p className="text-gray-500">九龍區</p>
          </div>
        </div>
        <div className=" p-2 my-2 leading-10 lg:text-2xl lg:leading-10 h-1/4">
          {data.description}
        </div>
        <div className="flex flex-col divide-y divide-zinc-700 divide-dashed my-2">
          <div className="flex items-center p-3 justify-between">
            <div className="flex items-center space-x-2">
              <span className="">
                <FaCar />
              </span>
              <span className="">學車</span>
            </div>

            <span className="font-bold">$350 / 節</span>
          </div>
          <div className="flex items-center p-3 justify-between ">
            <div className="flex items-center space-x-2">
              <span className="">
                <FaClock />
              </span>
              <span className="">補鐘</span>
            </div>

            <span className="font-bold">$400 / 節</span>
          </div>
          <div></div>
        </div>
        <div className="flex gap-4 my-2 flex-wrap p-2">
          <button className="pill">九龍灣上落</button>
          <button className="pill">九龍</button>
          <button className="pill">九龍灣上落</button>
          <button className="pill">九</button>
          <button className="pill">九龍灣上落</button>
          <button className="pill">九龍灣上落九龍灣上落九龍灣上落</button>
        </div>
        {/* <p className="text-6xl">{data.step}</p>
        <p className="text-xl">{data.title}</p> */}
      </div>
    </div>
  );
}
