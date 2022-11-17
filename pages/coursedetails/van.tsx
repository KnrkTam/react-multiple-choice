import CourseNav from '@/components/coursedetails/courseNav';
import { useRouter } from "next/router";
import React from 'react'

export default function VanCoursePage() {
  const router = useRouter();
  const path = router.pathname as string;
  return (
    <div className="px-5 mt-10">
      <CourseNav pathname={path} />

      <div className="mt-10 px-5 flex">
        <div className="w-1/2 px-5">
          <div className="mb-5 flex items-end ">
            <h1 className="m-0">輕型貨車</h1>{" "}
            <p className="ml-3 mb-1 text-gray-400">自動波/棍波</p>
          </div>
          <div className="leading-7 space-y-2">
            <p>
              輕型貨車課程 (棍波) (2) 考試合格後，可以同時駕駛
              棍波/自動波輕型貨車 及
              棍波/自動波私家車，適合想挑戰難度的同學，或者需要唔同種類的駕駛執照，用作商業用途（例如：工作有需要駕駛棍波輕型貨車）的人士。
            </p>
          </div>
        </div>
        <div className="bg-gradient-to-b from-white via-blue-300 to-white brightness-120 rounded-sm">
          <img
            className="h-[250px] mx-20"
            src="/images/van.png"
            alt="car"
          ></img>
        </div>
      </div>

      <a
        target="_blank"
        href="https://eapps.td.gov.hk/repoes/td-es-app517/WaitingTimeExtPreview.do?language=zh"
        rel="noopener noreferrer"
      >
        運輸署網頁
      </a>
      {path}
    </div>
  );
}
