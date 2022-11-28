import Link from "next/link";
import React from "react";
import { districts } from "./roadtestRoute";

export default function RoadInfoRoutes({ district }: { district: string }) {
  const results = districts.find((elem) => elem.label === district);
  return (
    <div className="flex items-center flex-wrap py-10">
      {results?.routes.map((route, i) => (
        <Link href={`/roadtest-info/${district}/${route.label}`} key={i}>
          <div className="w-1/3 flex flex-col items-center font-bold cursor-pointer p-1">
            <img
              src={`${route.image ? route.image : "/test-image.jpeg"}`}
              alt=""
            ></img>
            <p className="py-2">{route.label}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
