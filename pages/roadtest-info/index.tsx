import React, { useState } from "react";

export default function RoadTestInfo() {
  const districts = ["九龍", "香港", "新界"];
  const [districtState, setDistrictState] = useState('九龍');
  return (
    <div className="py-5">
      <h1 className="">路試資訊</h1>
      <div className="flex space-x-2">
        {districts.map((d, i) => (
          <button
            key={i}
            className={`flex-1 bg-white border border-gray-200 px-5 rounded-xl py-2 text-gray-400 cursor-pointer ${districtState === d && "bg-gray-200 text-black" }`}
            onClick={() => {setDistrictState(d)}}
          >
            {d}
          </button>
        ))}
      </div>
    </div>
  );
}
