import React from "react";
import Link from "next/link";

export default function index() {
  return (
    <div className="flex mock bg-gray-100 min-h-[600px]">
      <div className="flex items-center justify-center flex-col h-full w-[50%] m-auto space-y-2">
        <h2>模擬筆試</h2>
        <p>在限時20分鐘內回答20條問題，答中16題即為合格 </p>
        <p>利用學神資料庫內過百條問題，備戰筆試勝券在握</p>
        <div className="btn-grp space-y-2 w-full">
          <Link href="/mocktest/exam">
            <button className="bg-red-500 w-full rounded-2xl text-white">
              現在開始
            </button>
          </Link>

          <button className="bg-gray-100 border-2 border-gray-300 w-full rounded-2xl">
            練習模式
          </button>
          <div className="flex space-x-1">
            <Link href="/">
              <button className="bg-gray-100 border-2 border-gray-300 flex-1 rounded-2xl ">
                上次結果
              </button>
            </Link>
            <a
              href="/road_users_code_2020_chi.pdf"
              className="bg-gray-100 border-2 border-gray-300 flex-1 rounded-2xl text-center p-2"
              download
            >
              <button>下載守則</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
