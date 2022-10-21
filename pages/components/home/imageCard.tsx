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
}

export default function ImageCard({ data }: any) {

  return (
    <div className="flex flex-col bg-white shadow-lg row-span-3 rounded-xl py-5 w-[500px]">
      <div className=" h-1/4">
        <img
          src={data.imageUrl}
          className="object-contain w-full h-[100px]"
          alt={data.imageName}
        ></img>
      </div>
      <div className="px-5 h-1/2">
        <h1>{data.title}</h1>
        <h2 className="font-normal">{data.subTitle}</h2>
        <div className="flex flex-col space-y-1">
          {data.span.map((item: any) => (
            <CostBreakdown item={item.item} cost={item.cost} key={item.item} />
          ))}
        </div>
      </div>
      <div className="h-1/4 flex items-end justify-center">
        <Link href="/">
          <button className="bg-red-500 rounded-xl text-white px-10 py-2 hover:brightness-75">
            課程詳情
          </button>
        </Link>
      </div>
    </div>
  );
}
