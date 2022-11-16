import React from "react";
import { homeProcedures } from "./homeProcedures";
import HomeProcedureCard from "./homeProcedureCard";
import Link from "next/link";

export default function homeProcedureSession() {
  console.log('qwe',homeProcedures[0].imageUrl);
  return (
    <>
      {/* short version */}
      <div className="w-full h-full min-h-[350px] flex overflow-x-scroll py-5 space-x-2 px-5 lg:hidden">
        {homeProcedures.map((procedure) => (
          <HomeProcedureCard data={procedure} key={procedure.step} />
        ))}
      </div>
      {/* Full width */}
      <div className="w-full h-full min-h-[300px] max-h-[850px] py-5 px-5 hidden lg:grid grid-rows-5 grid-flow-col gap-5 min-h-[800px] text-white text-sm bg-no-repeat bg-contain">
        <div
          className={`${homeProcedures[0].bgColor} rounded-2xl row-span-2 col-span-2 px-5 relative overflow-hidden`}
        >
          <img
            src={`${homeProcedures[0].imageUrl}`}
            className="absolute z-10 bottom-[-7vh] w-full right-[-40vh] scale-150"
          />

          <p className="procedure-step relative z-20">
            {homeProcedures[0].step}
          </p>
          <p className="procedure-title relative z-20">
            {homeProcedures[0].title}
          </p>
          <div className="z-20 relative leading-5 mt-5">
            {homeProcedures[0].description.map((sen, i) => (
              <p key={i}>{sen}</p>
            ))}
          </div>
          <Link href={homeProcedures[0].url ? homeProcedures[0].url : "/"}>
            <button className="group bg-red-500 rounded-2xl mt-5 px-10 py-3 z-20 relative">
              立即報名
            </button>
          </Link>
        </div>
        <Link href={homeProcedures[2].url ? homeProcedures[2].url : "/"}>
          <div
            className={`${homeProcedures[2].bgColor} rounded-2xl px-5 row-span-3 cursor-pointer relative overflow-hidden`}
          >
            <img
              src={`${homeProcedures[2].imageUrl}`}
              className="absolute z-10 bottom-[5vh] scale-150 right-[-20vh] invert"
            />
            <p className="procedure-step">{homeProcedures[2].step}</p>
            <p className="procedure-title">{homeProcedures[2].title}</p>
            <div className="z-20 relative leading-5 mt-5">
              {homeProcedures[2].description.map((sen, i) => (
                <p key={i}>{sen}</p>
              ))}
            </div>
          </div>
        </Link>
        <Link href={homeProcedures[3].url ? homeProcedures[3].url : "/"}>
          <div
            className={`${homeProcedures[3].bgColor} rounded-2xl px-5 row-span-3 cursor-pointer bg-cover filter bg-blend-luminosity`}
            style={{ backgroundImage: `url(${homeProcedures[3].imageUrl})` }}
          >
            <p className="procedure-step">{homeProcedures[3].step}</p>
            <p className="procedure-title">{homeProcedures[3].title}</p>
            <div className="z-20 relative leading-5 mt-5">
              {homeProcedures[3].description.map((sen, i) => (
                <p key={i}>{sen}</p>
              ))}
            </div>
          </div>
        </Link>
        <Link href={homeProcedures[1].url ? homeProcedures[1].url : "/"}>
          <div
            className={`${homeProcedures[1].bgColor} rounded-2xl px-5 row-span-3 text-gray-500 cursor-pointer relative`}
          >
            <img
              className="absolute right-0 w-full h-full"
              src={`${homeProcedures[1].imageUrl}`}
            />

            <p className="procedure-step">{homeProcedures[1].step}</p>
            <p className="procedure-title">{homeProcedures[1].title}</p>
            <div className="z-20 relative leading-5 mt-5">
              {homeProcedures[1].description.map((sen, i) => (
                <p key={i}>{sen}</p>
              ))}
            </div>
          </div>
        </Link>
        <Link href={homeProcedures[4].url ? homeProcedures[4].url : "/"}>
          <div
            className={`${homeProcedures[4].bgColor} rounded-2xl px-5 row-span-2 relative overflow-hidden`}
          >
            <img
              className="absolute right-0"
              src={`${homeProcedures[4].imageUrl}`}
            />
            <p className="procedure-step">{homeProcedures[4].step}</p>
            <p className="procedure-title">{homeProcedures[4].title}</p>
            <div className="z-20 relative leading-5 mt-5">
              {homeProcedures[4].description.map((sen, i) => (
                <p key={i}>{sen}</p>
              ))}
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}
