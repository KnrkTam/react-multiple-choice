import React from "react";
import { ArrowDownIcon } from "../svg";

export default function Readmore({
  state,
  setter,
}: {
  state: boolean;
  setter: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <div className="py-5 text-lg font-bold hover:cursor-pointer">
      <div
        className="flex items-center transition-all"
        onClick={() => setter(!state)}
      >
        <p className={`${state && "hidden"} mr-2 font-normal`}>查看更多 </p>
        <ArrowDownIcon
          className={`stroke-2 w-5 h-5 duration-300 transition-all transform ${
            state && "rotate-180"
          } `}
        />
      </div>
    </div>
  );
}
