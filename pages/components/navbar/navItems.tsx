import Link from "next/link";
import React, { useState } from "react";

export default function NavItems() {

  const [showCourse, setShowCourse] = useState(false);
  const [showInfo, setShowInfo] = useState(false);
  const [showMaterial, setShowMaterial] = useState(false);

   const navbars = [
     {
       label: "駕駛課程",
       mouseEnterFunc: () => setShowCourse(true),
       mouseLeaveFunc: () => setShowCourse(false),
       state: showCourse,
       items: [
         {
           href: "/coursedetails/private",
           label: "私家車",
         },
         {
           href: "/coursedetails/van",
           label: "輕型貨車",
         },
         {
           href: "/coursedetails/retake",
           label: "快期重考",
         },
       ],
       href: "",
     },
     {
       label: "學車資訊",
       mouseEnterFunc: () => setShowInfo(true),
       mouseLeaveFunc: () => setShowInfo(false),
       state: showInfo,
       items: [
         {
           href: "/procedure",
           label: "學車流程",
         },
         {
           href: "/application",
           label: "報名表格",
         },
       ],
       href: "",
     },
     {
       label: "溫習材料",
       mouseEnterFunc: () => setShowMaterial(true),
       mouseLeaveFunc: () => setShowMaterial(false),
       state: showMaterial,
       items: [
         {
           href: "/roadtest-info",
           label: "路試資料",
         },
         {
           href: "/mocktest",
           label: "模擬筆試",
         },
       ],
       href: "",
     },
     {
       label: "教車師傅",
       mouseEnterFunc: null,
       mouseLeaveFunc: null,
       state: null,
       items: [],
       href: "/mocktest",
     },
   ];

  return (
    <>
      {navbars.map((nav, i) => {
        if (nav.items.length < 1)
          return (
            <div className="" key={i}>
              <Link href={nav.href}>
                <button className="hover:text-gray-500  bg-white rounded-lg break-keep">
                  {nav.label}
                </button>
              </Link>
            </div>
          );
        return (
          <div
            onMouseEnter={nav.mouseEnterFunc ? nav.mouseEnterFunc : () => {}}
            onMouseLeave={nav.mouseLeaveFunc ? nav.mouseLeaveFunc : () => {}}
            className="relative "
            key={i}
          >
            <button
              className={`hover:text-gray-500 bg-white rounded-lg h-full break-keep my-2 ${
                nav.state && "underline"
              }`}
            >
              {nav.label}
            </button>
            <div
              className={`bg-white flex w-full space-y-2 shadow-2xl flex flex-col p-2 rounded-lg scale-110 ${
                nav.state ? "absolute top-[5vh] bg-white" : "hidden"
              }`}
            >
              {nav.items.map((item, j) => (
                <Link key={j} href={`${item.href}`}>
                  <button className="text-center p-2 hover:text-gray-500">
                    {item.label}
                  </button>
                </Link>
              ))}
            </div>
          </div>
        );
      })}
    </>
  );
}
