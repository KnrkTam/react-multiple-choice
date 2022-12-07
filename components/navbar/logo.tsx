import Link from "next/link";
import React from "react";

export default function Logo() {
  return (
    <Link href="/">
      {/* <img
            src="/drivingLogo.svg"
            alt="logo"
            className="lg:h-[15vh] h-[10vh] cursor-pointer"
          /> */}
      <p className="font-bold  text-md sm:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 flex cursor-pointer py-5">
        <span className="break-normal w-[max-content] ">學車</span>
        <span className="ml-2 text-slate-500">🚙</span>
      </p>
    </Link>
  );
}
