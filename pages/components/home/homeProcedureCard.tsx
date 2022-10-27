import React from 'react'

export default function homeProcedureCard({data} : any) {


  return (
    <div
      className="flex flex-col justify-between min-w-[300px] h-auto shadow-lg bg-blue-500 rounded-lg"
      key={data.title}
    >
      <div className="flex-1 font-light text-white p-5">
        <p className="text-6xl">{data.step}</p>
        <p className="text-xl">{data.title}</p>
      </div>
      <div className="h-1/3 bg-gray-300 rounded-b-lg p-2">
        <p className="overflow-hidden text-sm">{data.description}</p>
      </div>
    </div>
  );
}
