import React, { useEffect, useState } from "react";
import { districts } from "@/components/roadtest-info/roadtestRoute";
import RoadInfoRoutes from "@/components/roadtest-info/roadinfoRoutes";

export default function RoadTestInfo() {
  const [districtState, setDistrictState] = useState("九龍");

  let results;
  useEffect(() => {
    results = districts.find((elem) => elem.label === districtState);
  }, [districtState]);

  return (
    <div className="py-5">
      <h1 className="">路試資訊</h1>
      <div className="flex space-x-2">
        {districts.map((d, i) => (
          <button
            key={i}
            className={`flex-1 bg-white border border-gray-200 px-5 rounded-xl py-2 text-gray-400 cursor-pointer ${
              districtState === d.label && "bg-gray-200 text-black"
            }`}
            onClick={() => {
              setDistrictState(d.label);
            }}
          >
            {d.label}
          </button>
        ))}
      </div>
      <RoadInfoRoutes district={districtState} />
    </div>
  );
}
