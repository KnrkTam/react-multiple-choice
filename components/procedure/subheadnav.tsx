import Link from "next/link";
import React from "react";
import {
  BookingIcon,
  LicenseIcon,
  RoadTestIcon,
  SignIcon,
  WrittenTestIcon,
  ArrowRightIcon,
} from "../svg";
export default function Subheading() {
  return (
    <div className="flex justify-between items-cente px-5 lg:px-10">
      <Link
        href="#apply"
        className="h-full rounded-all flex flex-col items-center cursor-pointer1"
      >
        <div className="cursor-pointer flex items-center flex-col">
          <span className="lg:h-[50px] h-[30px]">
            <SignIcon className="h-5 w-5 lg:h-10 lg:w-10"></SignIcon>
          </span>
          <p className="text-gray-500 font-bold text-md lg:text-xl lg:pt-5 lg:pt-0 ">
            報名
          </p>
        </div>
      </Link>
      <span>
        <ArrowRightIcon className="font-black stroke-gray-300 stroke-[3px] sm:h-[5vh] sm:w-[5vh]" />
      </span>
      <Link
        href="#written-test"
        className="h-full rounded-all flex flex-col items-center cursor-pointer1"
      >
        <div className="cursor-pointer flex items-center flex-col">
          <span className="lg:h-[50px] h-[30px]">
            <WrittenTestIcon className="h-5 w-5 lg:h-10 lg:w-10"></WrittenTestIcon>
          </span>
          <p className="text-gray-500 font-bold text-md lg:text-xl lg:pt-5 lg:pt-0">
            筆試
          </p>
        </div>
      </Link>
      <span>
        <ArrowRightIcon className="font-black stroke-gray-300 stroke-[3px] sm:h-[5vh] sm:w-[5vh]" />
      </span>
      <Link
        href="#book"
        className="h-full rounded-all flex flex-col items-center cursor-pointer1"
      >
        <div className="cursor-pointer flex items-center flex-col">
          <span className="lg:h-[50px] h-[30px]">
            <BookingIcon className="h-5 w-5 lg:h-10 lg:w-10"></BookingIcon>
          </span>
          <p className="text-black font-bold text-md lg:text-xl lg:pt-5 lg:pt-0">
            預約師傅
          </p>
        </div>
      </Link>
      <span>
        <ArrowRightIcon className="font-black stroke-gray-300 stroke-[3px] sm:h-[5vh] sm:w-[5vh]" />
      </span>
      <Link
        className="h-full rounded-all flex flex-col items-center cursor-pointer1"
        href="#road-test"
      >
        <div className="cursor-pointer flex items-center flex-col">
          <span className="lg:h-[50px] h-[30px]">
            <RoadTestIcon className="h-5 w-5 lg:h-10 lg:w-10"></RoadTestIcon>
          </span>
          <p className="text-red-500 font-bold text-md lg:text-xl lg:pt-5 lg:pt-0">
            路試
          </p>
        </div>
      </Link>

      <span>
        <ArrowRightIcon className="font-black stroke-gray-300 stroke-[3px] sm:h-[5vh] sm:w-[5vh]" />
      </span>
      <Link
        href="#license"
        className="h-full rounded-all flex flex-col items-center cursor-pointer1"
      >
        <div className="cursor-pointer flex items-center flex-col">
          <span className="lg:h-[50px] h-[30px]">
            <LicenseIcon className="h-5 w-5 lg:h-10 lg:w-10"></LicenseIcon>
          </span>
          <p className="text-red-500 font-bold text-md lg:text-xl lg:pt-5 lg:pt-0">
            攞牌
          </p>
        </div>
      </Link>
    </div>
  );
}
