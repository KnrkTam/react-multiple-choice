import Link from "next/link";
import React from "react";
import CostBreakdown from "./costBreakdown";

export interface itemProps {
  item: string;
  cost: number | null;
}
export interface imageCardProps {
  title?: string;
  subTitle?: string;
  span: itemProps[];
  imageUrl: string;
  imageName: string;
  urlName: string;
}

export default function ImageCard({ data }: any) {
  return (
    <div className="flex flex-col h-auto bg-white shadow-lg rounded-xl py-5 min-w-[350px] lg:w-[500px] snap-center">
      <div className="">
        <img
          src={data.imageUrl}
          className="object-contain w-full h-[100px]"
          alt={data.imageName}
        ></img>
      </div>
      <div className="flex-1 px-5">
        <h1>{data.title}</h1>
        <h2 className="font-normal">{data.subTitle}</h2>
        <div className="flex flex-col items-between">
          <div className="flex flex-col space-y-1">
            {data.span.map((item: any) => (
              <CostBreakdown
                item={item.item}
                cost={item.cost}
                key={item.item}
              />
            ))}
          </div>
          <p className="text-xs text-gray-800 mt-10">堂費上堂時逐堂給師傅</p>
        </div>
      </div>
      <div className="flex-none flex items-end justify-center py-5">
        <Link href={`${data.urlName}`}>
          <button className="bg-red-500 rounded-xl text-white px-9 py-3 my-2 hover:brightness-75 ">
            課程詳情
          </button>
        </Link>
      </div>
    </div>
  );
}
