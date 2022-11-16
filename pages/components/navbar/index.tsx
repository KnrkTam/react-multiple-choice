import React, { useState } from "react";
import Link from "next/link";
import { ArrowDownIcon, HamburgerIcon, XIcon } from "../svg";
import Drawer from "./drawer";

export default function Navbar() {
  const [nav, setNav] = useState(false);
  const [showCourse, setShowCourse] = useState(false);
  const [showInfo, setShowInfo] = useState(false);
  const [showMaterial, setShowMaterial] = useState(false);

  const toggleNav = () => setNav(!nav);

  return (
    <>
      <nav className="w-full sticky top-0 h-30 bg-white lg:h-[13vh] z-50 md:px-5">
        <div className="flex items-center justify-between space-around h-full m-auto max-w-[1400px] flex-nowrap">
          <button className="md:hidden" onClick={toggleNav}>
            {!nav ? (
              <HamburgerIcon className=""></HamburgerIcon>
            ) : (
              <XIcon className=""></XIcon>
            )}
          </button>
          <Link href="/">
            {/* <img
            src="/drivingLogo.svg"
            alt="logo"
            className="lg:h-[15vh] h-[10vh] cursor-pointer"
          /> */}
            <h1 className="font-bold  text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-red-500">
              學車
              <span className="ml-2 text-slate-500">🚙</span>
            </h1>
          </Link>
          <div className="lg:hidden invisible ">invisible block</div>

          <div className="flex-1 max-w-[50%]  space-x-1 hidden md:flex justify-end">
            <div
              onMouseEnter={() => setShowCourse(true)}
              onMouseLeave={() => setShowCourse(false)}
              className="relative flex-1"
            >
              <button
                className={`w-full hover:text-gray-500 bg-white rounded-lg h-full ${
                  showCourse && "underline"
                }`}
              >
                駕駛課程
              </button>
              <div
                className={`bg-white flex w-full space-y-2 shadow-2xl flex flex-col p-2 rounded-lg ${
                  showCourse ? "absolute top-[5vh] bg-white" : "hidden"
                }`}
              >
                <Link href="/coursedetails/private">
                  <a className="text-center p-2 hover:text-gray-500">私家車</a>
                </Link>
                <Link href="/coursedetails/van">
                  <a className="text-center p-2 hover:text-gray-500">
                    輕型貨車
                  </a>
                </Link>
                <Link href="/coursedetails/retake">
                  <a className="text-center p-2 hover:text-gray-500">
                    快期重考
                  </a>
                </Link>
              </div>
            </div>

            <div
              onMouseEnter={() => setShowInfo(true)}
              onMouseLeave={() => setShowInfo(false)}
              className="relative flex-1"
            >
              <button
                className={`w-full hover:text-gray-500 bg-white rounded-lg h-full ${
                  showInfo && "underline"
                }`}
              >
                學車資訊
              </button>
              <div
                className={`bg-white flex w-full space-y-2 shadow-2xl flex flex-col p-2 rounded-lg ${
                  showInfo ? "absolute top-[3vh] bg-white" : "hidden"
                }`}
              >
                <Link href="/procedure">
                  <a className="text-center p-2 hover:text-gray-500">
                    學車資訊
                  </a>
                </Link>
                <Link href="/application">
                  <a className="text-center p-2 hover:text-gray-500">
                    報名表格
                  </a>
                </Link>
              </div>
            </div>

            <div
              className="relative flex-1 "
              onMouseEnter={() => setShowMaterial(true)}
              onMouseLeave={() => setShowMaterial(false)}
            >
              <button
                className={`w-full hover:text-gray-500 bg-white rounded-lg flex-grow h-full  ${
                  showMaterial && "underline"
                }`}
              >
                溫習材料
              </button>
              <div
                className={`bg-white flex w-full space-y-2 shadow-2xl flex flex-col p-2 rounded-lg ${
                  showMaterial ? "absolute top-[3vh] bg-white" : "hidden"
                }`}
              >
                <Link href="/roadtest-info">
                  <a className="text-center p-2 hover:text-gray-500">
                    路試資訊
                  </a>
                </Link>
                <Link href="/mocktest">
                  <a className="text-center p-2 hover:text-gray-500">
                    模擬筆試
                  </a>
                </Link>
              </div>
            </div>

            <Link href="/mocktest">
              <button className="hover:text-gray-500  bg-white rounded-lg ">
                教車師傅
              </button>
            </Link>
          </div>
          <div className="hidden md:flex flex space-x-2 w-1/4 p-0 justify-end ">
            <Link href="/application">
              <button className="hover:bg-red-600 bg-red-500 text-white rounded-lg  ">
                立即報名
              </button>
            </Link>
            <Link href="/application">
              <button className="hover:bg-red-100 bg-white border border-red-500 text-red-500 rounded-lg ">
                預約補鐘
              </button>
            </Link>
          </div>
        </div>
      </nav>
      <Drawer nav={nav} />
    </>
  );
}
