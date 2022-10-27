import Link from 'next/link';
import React from 'react'

export default function SubtitleHeading({data}: any) {
  return (
    <div
      id="sub-title"
      className={`px-2 flex items-center lg:items-end justify-between`}
    >
      <div className="flex items-end">
        <span className="text-3xl font-bold text-gray-800">{data.heading}</span>
        <span className="hidden px-5 text-gray-500 lg:block">{data.desc}</span>
      </div>
      <span className="text-gray-800 flex">
        {data.link && (
          <Link href={data.url}>
            <>
              <span className="hidden lg:block mr-2">{data.link}</span>
              <span className="font-extrabold ">{">"}</span>
            </>
          </Link>
        )}
      </span>
    </div>
  );
}
