import React, { useState } from "react";
import Link from "next/link";
import { ArrowDownIcon, HamburgerIcon, XIcon } from "../svg";
// import { navbars } from "./navItemsList";

export default function Drawer({ nav }: { nav: boolean }) {
  const [showCourse, setShowCourse] = useState(false);
  const [showInfo, setShowInfo] = useState(false);
  const [showMaterial, setShowMaterial] = useState(false);

  const navbars = [
    {
      label: "駕駛課程",
      clickEvent: () => setShowCourse(!showCourse),
      // clickEvent: () => console.log('hi mom'),
      state: showCourse,
      items: [
        {
          href: "/coursedetails/privatecar",
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
      clickEvent: () => setShowInfo(!showInfo),
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
      clickEvent: () => setShowMaterial(!showMaterial),
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
      clickEvent: () => {},
      state: null,
      items: [],
      href: "/mocktest",
    },
  ];

  return (
    <div
      className={`duration-500 ease-in-out transition-all w-screen transform overflow-hidden ${
        !nav ? "absolute top-0 h-0 opacity-0" : " h-auto"
      }`}
    >
      <ul className="bg-white w-full px-8 space-y-4 lg:hidden text-lg font-semibold">
        {navbars.map((items, i) => {
          return (
            <li key={i}>
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={items.clickEvent}
              >
                <Link href={`${items.href}`}>{items.label}</Link>
                {items.items.length ? (
                  <ArrowDownIcon
                    className={`stroke-2 duration-300 transition-all transform ${
                      items.state ? "rotate-180" : "rotate-0"
                    }`}
                  ></ArrowDownIcon>
                ) : (
                  ""
                )}
              </div>
              <div
                className={`space-y-3 font-light px-3 text-md transition-all transform ease-in-out duration-300 overflow-hidden pt-2 ${
                  !items.state
                    ? "opacity-0 h-0 "
                    : "opacity-1 h-auto"
                } `}
              >
                {items.items.map((item, j) => (
                  <Link href={`${item.href}`} key={j}>
                    <p
                      className={`hover:underline cursor-pointer px-1 h-auto`}
                    >
                      {item.label}
                    </p>
                  </Link>
                ))}
              </div>
            </li>
          );
        })}

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
