import CourseNav from "@/components/coursedetails/courseNav";
import { ChevronRight } from "@/components/svg";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

export default function RetakeCoursePage() {
  const router = useRouter();
  const path = router.pathname;
  return (
    <div className="relative lg:px-5 mb-10">
      <CourseNav pathname={path} />
      <div className="mt-10 px-5 flex flex-col-reverse lg:flex-row">
        <div className="lg:w-1/2 lg:px-5">
          <div className="my-5 flex items-end justify-between lg:justify-start">
            <h1 className="m-0">快期重考</h1>{" "}
            <p className="ml-3 mb-1 text-gray-400">自動波/棍波</p>
          </div>
          <div className="leading-7 space-y-2">
            <p>
              {`於駕駛考試路試中不合格的學生可由上次應考日期起計最少七個工作天後預約重考生快期空缺。
              學生可以「先到先得」方式，透過香港政府一站通 網上或電話（2866
              8148）系統預約重考生快期空缺。而由2022年5月30日起，考生進入重考生快期網上預約系統，必須使用「智方便」（"iAM
              Smart"）或有效的個人電子證書進行身份認證，才可進行預約。`}
            </p>
          </div>
        </div>

        <div className="min-h-[300px] z-10 bg-gradient-to-r from-white via-red-300 to-white brightness-120 w-full">
          <div className="relative w-full h-4/5 p-auto">
            <img
              className="absolute  right-10 w-1/2 z-10"
              src="/images/van.png"
              alt="car"
            ></img>
            <img
              className="relative bottom-0 w-1/2 mt-10 z-20"
              src="/images/privatecar.webp"
              alt="car"
            ></img>
          </div>
        </div>
      </div>
      <div className="mt-10 flex flex-col lg:flex-row">
        {/* Long box */}
        <div className="lg:w-[65%] lg:px-5">
          <div className="bg-zinc-100 rounded-xl my-5 py-5 divide-y divide-gray-300 px-7">
            <section className="pb-5 text-md lg:text-lg">
              <h2>申請資格</h2>
              <ul className="list-disc list-outside pl-10 space-y-5">
                <li>18 歲或以上考生</li>
                <li>於上次應考私家車、輕型貨車駕駛考試路試中不及格</li>
                <li>未購買駕駛考試表格重新排期考試</li>
                <li>正式駕駛執照未失效超過3年</li>
              </ul>
            </section>
            <section className="pb-5 text-md lg:text-lg">
              <h2>注意事項</h2>
              <ul className="list-decimal list-outside pl-10 space-y-5">
                <li>重考生快期不能轉讓</li>
                <li>
                  每位重考生只能就每個合資格申請重考生快期的車輛類別中申請一個重考生快期
                </li>
                <li>
                  可供申請之快期空缺需視乎因其他考生申請延期和暫時取消考期而騰出考期的數量。如考生未能選擇到合適的快期空缺，亦可衡量改為申請候試名單之末的考期
                </li>
                <li>
                  私家車或輕型貨車合併試考生若取得乙部試及格，只可申請丙部試重考生快期；若取得丙部試及格，只可申請乙部試重考生快期；若兩部份皆不及格，則只可申請合併試重考生快期
                </li>
                <li>
                  如考生沒有持有「智方便」帳戶或有效的個人電子證書，可以選擇透過系統的電話預約服務（2866
                  8148）進行預約。該電話服務不需使用「智方便」或有效的個人電子證書進行身份認證，但仍須使用個人資料作登記
                </li>
              </ul>
            </section>
          </div>
        </div>
        {/* Short box */}
        <div className="lg:mr-5 flex-1">
          <div className="bg-zinc-100 rounded-xl my-5 p-5 divide-y divide-gray-300">
            <section className="mb-5 text-sm">
              <h2>學神收費</h2>
              <div className="flex w-full">
                <div className="items flex-col flex space-y-3 w-3/5">
                  <span>考試租車費（按金</span>
                  <span></span>
                </div>
                <div className="price flex-col flex space-y-3 w-2/5 items-end">
                  <span>$900</span>
                  <span className="text-lg font-bold">$900</span>
                </div>
              </div>
            </section>
            <section className="text-sm">
              <h2> 總花費預估 </h2>
              <div>
                <div className="flex w-full ">
                  <div className="items flex-col flex space-y-3 w-3/5">
                    <span>堂費（45分鐘）</span>
                    <span>堂數：15堂</span>
                    <span>私家車/輕型貨車 堂費</span>
                  </div>
                  <div className="price flex-col flex space-y-3 w-2/5 items-end">
                    <span>$280起</span>
                    <span className="invisible">123</span>
                    <span className="text-lg font-bold">$4,200</span>
                  </div>
                </div>
                <div className="flex w-full my-5">
                  <div className="items flex-col flex space-y-3 w-3/5">
                    <span>考試租車費 </span>
                    <span>考試鐘 </span>
                    <span>合共 </span>
                  </div>
                  <div className="price flex-col flex space-y-3 w-2/5 items-end">
                    <span className="">$1,800</span>
                    <span className="">$280</span>
                    <span className="text-3xl font-bold">$6,280</span>
                  </div>
                </div>
              </div>
              <div className="w-full mt-5">
                <Link href="/application">
                  <button className="bg-red-500 rounded-xl text-white py-3 text-center w-full hover:brightness-75">
                    立即報名
                  </button>
                </Link>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
