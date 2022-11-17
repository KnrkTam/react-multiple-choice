import CourseNav from "@/components/coursedetails/courseNav";
import { useRouter } from "next/router";
import React from "react";

export default function PrivateCarCoursePage() {
  const router = useRouter();
  const path = router.pathname;
  return (
    <div className="px-5 my-10 ">
      <CourseNav pathname={path} />

      <div className="mt-10 px-5 flex">
        <div className="w-1/2 px-5">
          <div className="mb-5 flex items-end ">
            <h1 className="m-0">私家車課程</h1>{" "}
            <p className="ml-3 mb-1 text-gray-400">自動波/棍波</p>
          </div>
          <div className="leading-7 space-y-2">
            <p>
              由於本港自動波私家車普及化，較少同學選擇私家車棍波課程 (1)
              。在需求減低的供求關係下，較少師傅會有棍波私家車，導致其學費會較自動波私家車高。
            </p>
            <p>
              私家車自動波課程 (1A)
              屬較多同學選擇的車型，初學者較容易掌握，因為毋須兼顧棍波轉波及吊極力子、死火等問題，1
              take pass
              合格率會比輕型貨車高，所以想輕鬆學車的同學較多會選擇自動波私家車
            </p>
          </div>
        </div>
        <div className="bg-gradient-to-r from-white via-yellow-300 to-white brightness-120">
          <img
            className="h-[250px] mx-10"
            src="/images/privatecar.webp"
            alt="car"
          ></img>
        </div>
      </div>

      <div className="mt-10 flex">
        {/* Long box */}
        <div className="w-3/4 px-5">
          <div className="bg-zinc-100 rounded-xl my-5 p-5 divide-y divide-black px-5">
            <section className="pb-5 text-md lg:text-lg">
              <h2>課程內容</h2>
              <ul
                className="list-disc list-outside pl-10 space-y-5"
              >
                <li>
                  講解車輛控制器的功能及安全操作 棍波 - 手動變速器、離合器
                  (極力子) 自動波 - 無段自動變速器、自動傳動系統
                </li>
                <li>教授正確運用波檔、油門等的操作技巧</li>
                <li>路試路線實戰訓練，熟習駕駛技巧</li>
                <li>加強學生的道路安全和駕駛意識</li>
                <li>指導正確判斷時間、車速及車輛之間距離</li>
                <li>經驗分享及適時提醒，讓學生適應各種路面情況</li>
              </ul>
            </section>
            <section className="pb-5 text-md lg:text-lg">
              <h2>駕駛考試重點</h2>
              <p>
                開車前準備，開行，停車，斜坡停車、開車，窄路掉頭，倒後及停泊{" "}
                <br></br>
                駕駛意識，速度控制，控制器使用，訊號/標誌的使用及認識 等
              </p>
              <p className="text-xs mt-5">
                應考車輛：<br></br>
                持有私人駕駛教師執照的教車師傅會租借合符應考車輛規格的車輛予學生應付路試
              </p>
            </section>
            <section className="pb-5 text-md lg:text-lg">
              <h2>注意事項</h2>
              <ol
                className="list-decimal list-outside pl-10"
              >
                <li>
                  路面駕駛訓練課堂為45分鐘一堂，而學生每次學車需預約最少兩堂
                </li>
                <li>學車堂數多或少取決於學習駕駛的熟練程度</li>
                <li>
                  建議有足夠能力先去應付考試，而運輸署的建議為最少學夠30堂先去考路試
                </li>
                <li>
                  學神提供代辦報名筆試及路試的服務，學生亦可以自行前往運輸署排隊報名
                </li>
                <li>
                  學生只需要預繳部份考試租車費作為按金，學神便會落力幫你配對師傅，等你有充足的時間做預備，輕鬆達成1take
                  pass的目標
                </li>
                <li>
                  建議選定師傅要趁早向師傅預留考試日期，為你留起指定車輛去應付考試。
                </li>
              </ol>
            </section>
          </div>
          <div className="bg-zinc-100 rounded-xl my-5 p-5">
            <div className="flex justify-between">
              <h2>最快考期</h2>
              <a
                target="_blank"
                href="https://eapps.td.gov.hk/repoes/td-es-app517/WaitingTimeExtPreview.do?language=zh"
                rel="noopener noreferrer"
              >
                運輸署網頁
              </a>
            </div>
            <div>
              筆試（甲部） 28/12/2022 路試 （合併試） 私家車 九龍及新界區
              30/10/2023 港島區 06/10/2023
            </div>
            <h2>注意事項</h2>
            <p>
              系統更新的資訊只供參考，最快考期會按不同時段的考試需求量改變而變更。如希望取得即時更新的駕駛考試輪候時間及最快考期詳情，可以於辦公時間內致電2771
              7723運輸署駕駛考試排期事務處查詢。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
