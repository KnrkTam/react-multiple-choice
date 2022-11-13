import React from 'react';
import Link from 'next/link';

export default function homeProcedureCard({data} : any) {


  return (
    <Link href={data.url ? data.url : '#procedure'}>
      <div
        className={`flex flex-col justify-between min-w-[300px] h-auto shadow-lg ${data.bgColor} rounded-lg cursor-pointer`}
        key={data.title}
      >
        <div
          className={`flex-1 font-light text-white p-5 ${
            data.step == "02" && "text-gray-500"
          }`}
        >
          <p className="text-6xl">{data.step}</p>
          <p className="text-xl">{data.title}</p>
        </div>
        <div className="h-1/3 bg-gray-300 rounded-b-lg p-2">
          <p className="overflow-hidden text-sm">{data.description}</p>
        </div>
      </div>
    </Link>
  );
}
