import Link from 'next/link';
import React from 'react'

export default function Logo() {
  return (
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
  );
}
