import Link from "next/link";
import React from "react";

export default function footer() {
  return (
    <footer className="w-full bg-black opacity-[85%] text-white min-h-[300px] flex bottom-0 justify-center">
      <div className="flex flex-col w-full max-w-[1400px] px-5  my-[50px] ">
        <div className="flex my-2 justify-center w-full justify-between ">
          <div className="">
            <p className="text-lg mb-5">駕駛課程</p>
            <div className="flex flex-col space-y-1">
              <Link href="/coursedetails/private">
                <a>私家車</a>
              </Link>
              <Link href="/coursedetails/van">
                <a>輕型貨車</a>
              </Link>
              <Link href="/coursedetails/retake">
                <a>快期重考</a>
              </Link>
            </div>
          </div>
          <div className="">
            <p className="text-lg mb-5">學車資訊</p>
            <div className="flex flex-col space-y-1">
              <Link href="/procedure">
                <a>學車流程</a>
              </Link>

              <Link href="/application">
                <a>報名表格</a>
              </Link>
            </div>
          </div>
          <div className="">
            <p className="text-lg mb-5">溫習材料</p>
            <div className="flex flex-col space-y-1">
              <Link href="/roadtest-info">
                <a>溫習資訊</a>
              </Link>
              <Link href="/mocktest">
                <a>模擬筆試</a>
              </Link>
            </div>
          </div>
          <div className="">
            <p className="text-lg mb-5">教車師傅</p>
          </div>
        </div>
        <div className="w-full py-4 my-1">
          Copyright © 2022 Carcfu Driving School Limited. This project is for
          educational use only.
        </div>
        <div className="w-full py-4 my-1 underline cursor-pointer ">
          <Link href="/t&c">
            <a className="px-0">條款及守則</a>
          </Link>
        </div>
      </div>
    </footer>
  );
}
