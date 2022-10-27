import Link from 'next/link';
import React from 'react'

export default function MocktestCard() {
  return (
    <div className="h-[400px] my-10 flex bg-zinc-100 rounded-lg h-full w-auto">
      <div className="w-1/2 h-auto p-5 flex flex-col space-y-2">
        <h2>筆試貼士</h2>
        <p className="text-gray-800">你知道「靠左駛」路牌的意思嗎？</p>
        <div className="w-full h-1/2">
          <img
            className="object-cover h-full w-full rounded-lg my-2"
            src="test-image.jpeg"
            alt="writtentest"
          />
          <p className="z-30 text-gray-500">Answer placed right here</p>
        </div>
      </div>
      <div className="w-1/2 p-5 flex flex-col space-y-2">
        <h2>模擬筆試</h2>
        <p className="my-2 text-zinc-500">
          在限時20分鐘內回答20條問題，答中16題即為合格。利用學神資料庫內過百條問題，備戰筆試勝券在握
        </p>
        <div className="">
          <Link href="/mocktest">
            <button className="w-full bg-red-500 text-white rounded-lg my-5 py-2">
              現在開始
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
