import Link from "next/link";
import React from "react";
import { courses } from "./coursesItem";


export default function CourseNav({ pathname }: {pathname: string}) {

  return (
    <div className="flex flex-col lg:flex-row justify-between space-y-5 lg:space-y-0">
      <h1 className="bold py-1 my-1 text-2xl lg:5xl">駕駛課程</h1>
      <div className="flex items-end lg:w-1/4">
        <div className="flex w-full justify-between ">
          {courses.map((course, i) => (
            <Link href={`${course.urlName}`} key={i}>
              <span
                className={`cursor-pointer ${
                  pathname == course.urlName && "text-red-500 underline"
                }`}
              >
                {course.title}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
