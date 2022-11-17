import CourseNav from '@/components/coursedetails/courseNav';
import { useRouter } from "next/router";
import React from 'react'

export default function RetakeCoursePage() {
  const router = useRouter();
  const path = router.pathname;
  return (
    <div className="px-5 mt-10">
      <CourseNav pathname={path} />
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
