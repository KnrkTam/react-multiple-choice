import React from "react";
import { homeProcedures } from "./homeProcedures";
import HomeProcedureCard from "./homeProcedureCard";
import Link from "next/link";

export default function homeProcedureSession() {
  return (
    <>
      {/* short version */}
      <div className="w-full h-full min-h-[350px] flex overflow-x-scroll py-5 space-x-2 px-5 lg:hidden">
        {homeProcedures.map((procedure) => (
          <HomeProcedureCard data={procedure} key={procedure.step} />
        ))}
      </div>
      {/* Full width */}
      <div className="w-full h-full min-h-[300px] max-h-[850px] flex py-5 px-5 hidden lg:grid grid-rows-5 grid-flow-col gap-5 min-h-[800px] text-white text-sm">
        <div
          className={`${homeProcedures[0].bgColor} rounded-2xl row-span-2 col-span-2 px-5`}
        >
          <p className="procedure-step">{homeProcedures[0].step}</p>
          <p className="procedure-title">{homeProcedures[0].title}</p>
          <p className="mt-5">{homeProcedures[0].description}</p>
          <Link href={homeProcedures[0].url ? homeProcedures[0].url : "/"}>
            <button className="bg-red-500 rounded-2xl m-10 px-10 py-3">
              立即報名
            </button>
          </Link>
        </div>
        <Link href={homeProcedures[2].url ? homeProcedures[2].url : "/"}>
          <div
            className={`${homeProcedures[2].bgColor} rounded-2xl px-5 row-span-3 cursor-pointer `}
          >
            <p className="procedure-step">{homeProcedures[2].step}</p>
            <p className="procedure-title">{homeProcedures[2].title}</p>
            <p className="mt-5">{homeProcedures[2].description}</p>
          </div>
        </Link>
        <Link href={homeProcedures[3].url ? homeProcedures[3].url : "/"}>
          <div
            className={`${homeProcedures[3].bgColor} rounded-2xl px-5 row-span-3 cursor-pointer`}
          >
            <p className="procedure-step">{homeProcedures[3].step}</p>
            <p className="procedure-title">{homeProcedures[3].title}</p>
            <p className="mt-5">{homeProcedures[3].description}</p>
          </div>
        </Link>
        <Link href={homeProcedures[1].url ? homeProcedures[1].url : "/"}>
          <div
            className={`${homeProcedures[1].bgColor} rounded-2xl px-5 row-span-3 text-gray-500 cursor-pointer`}
          >
            <p className="procedure-step">{homeProcedures[1].step}</p>
            <p className="procedure-title">{homeProcedures[1].title}</p>
            <p className="mt-5">{homeProcedures[1].description}</p>
          </div>
        </Link>
        <Link href={homeProcedures[4].url ? homeProcedures[4].url : "/"}>
          <div
            className={`${homeProcedures[4].bgColor} rounded-2xl px-5 row-span-2`}
          >
            <p className="procedure-step">{homeProcedures[4].step}</p>
            <p className="procedure-title">{homeProcedures[4].title}</p>
            <p className="mt-5">{homeProcedures[4].description}</p>
          </div>
        </Link>
      </div>
    </>
  );
}
