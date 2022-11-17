import React, { useState } from "react";
import Link from "next/link";
import { ArrowDownIcon, HamburgerIcon, XIcon } from "../svg";
import { navbars } from "./navItemsList";

export default function Drawer({ nav }: { nav: boolean }) {
  return (
    <div
      className={`duration-300 ease-in-out transition-all w-screen ${
        !nav ? "top-[-500%] z-0 opacity-0 absolute" : " top-[10.5vh] z-20"
      }`}
    >
      <ul className="bg-white w-full px-8 space-y-4 lg:hidden text-lg font-semibold">
        {/* {navbars.map((items, i) => (
          <li key={i}>
            <div className="flex justify-between items-center cursor-pointer ">
              <Link href={`${items.href}`}>{items.label}</Link>
              <ArrowDownIcon className="stroke-2"></ArrowDownIcon>
            </div>
            <div className="space-y-3 font-light px-3 text-md ">
              {items.items.map((item, j) => (
                <Link href={`${item.href}`} key={j}>
                  <p className="hover:underline cursor-pointer">{item.label}</p>
                </Link>
              ))}
            </div>
          </li>
        ))} */}

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
