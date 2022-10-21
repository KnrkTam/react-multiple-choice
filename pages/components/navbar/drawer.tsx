import React, { useState } from "react";
import Link from "next/link";
import { ArrowDownIcon, HamburgerIcon, XIcon } from "../svg";

export default function Drawer({nav} : {nav:boolean}) {

  return (
    <div
      className={`${
        !nav
          ? "hidden -translate-y-10"
          : "absolute w-screen transition-all ease-in-out duration-300"
      }`}
    >
      <ul className="bg-white w-full px-8 space-y-4 md:hidden text-lg font-semibold">
        <li className="flex justify-between items-center ">
          <Link href="/mocktest">駕駛課程</Link>
          <ArrowDownIcon className="stroke-2"></ArrowDownIcon>
        </li>
        <li className="flex justify-between items-center">
          <Link href="/procedure">學車流程</Link>
          <ArrowDownIcon className="stroke-2"></ArrowDownIcon>
        </li>
        <li className="flex justify-between items-center">
          <Link href="/mocktest">溫習材料</Link>
          <ArrowDownIcon className="stroke-2"></ArrowDownIcon>
        </li>
        <li className="flex justify-between items-center">
          <Link href="/mocktest">教車師傅</Link>
        </li>
        <div className="my-4 flex flex-col">
          <Link href="/application">
            <button className="hover:bg-red-600 bg-red-500 text-white rounded-lg w-full mb-4 ">
              立即報名
            </button>
          </Link>
          <Link href="/application">
            <button className="hover:bg-red-100 text-red-500 border border-red-500 rounded-lg w-full mb-4">
              預約補鐘
            </button>
          </Link>
        </div>
      </ul>
    </div>
  );
}
