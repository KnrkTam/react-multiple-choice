// import { useState } from "react";

import { useState } from "react";

// const [showCourse, setShowCourse] = useState(false);
// const [showInfo, setShowInfo] = useState(false);
// const [showMaterial, setShowMaterial] = useState(false);
import React from 'react'

export default function NavItemsList() {
      const [showApply, setShowApply] = useState(false);
      const [showWritten, setShowWritten] = useState(false);
      const [showBook, setShowBook] = useState(false);
      const [showRoad, setShowRoad] = useState(false);
      const [showLicense, setShowLicense] = useState(false);
  return (
    <div>
      
    </div>
  )
}



export const navbars = [
  {
    label: "駕駛課程",
    // mouseEnterFunc: () => setShowCourse(true),
    // mouseLeaveFunc: () => setShowCourse(false),
    // state: showCourse,
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
    // mouseEnterFunc: () => setShowInfo(true),
    // mouseLeaveFunc: () => setShowInfo(false),
    // state: showInfo,
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
    // mouseEnterFunc: () => setShowMaterial(true),
    // mouseLeaveFunc: () => setShowMaterial(false),
    // state: showMaterial,
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
    // mouseEnterFunc: null,
    // mouseLeaveFunc: null,
    // state: null,
    items: [],
    href: "/mocktest",
  },
];
