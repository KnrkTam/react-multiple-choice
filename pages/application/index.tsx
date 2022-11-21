import ProgressBar from "@/components/application/progressBar";
import React from "react";

export default function application() {
  return (
    <div className="mx-5">
      <div className="w-4/5 max-w-[800px]  m-auto">
        <ProgressBar />
      </div>
      <div className="flex mt-20 space-x-5">
        {/* Long form */}
        <div className="w-3/5">
          <h2>報名表</h2>
          <form>
            <label>中文名字</label>
            <input type="text" placeholder="和"></input>
          </form>
        </div>
        {/* Short box */}
        <div className="flex-1 lg:mr-5 mb-10">
          <div className="bg-gray-100 rounded-lg py-3 px-7 my-3">
            <section className="my-2">
              <h2>注意事項</h2>
              <ul className="list-decimal list-outside pl-10 space-y-5">
                <li>年滿十八歲或以上</li>
                <li>
                  並無另持一張駕駛類別與乙部加上（✓）號者相同的車輛的考試表格
                </li>
                <li>
                  殘疾人士或駕駛時須配戴助聽器人士如欲申請駕駛考試，請聯絡本署駕駛事務組（電話：27137262）安排駕駛能力評估或聽覺能力評估
                </li>
                <li>
                  在報名前考慮清楚想選擇的考試地區及考試車輛類別，運輸署文件登記後更改需重新繳付考試費用
                </li>
                <li>
                  運輸署收取考車費用包括：
                  <br></br>學習駕駛執照 （一年期） $548
                  <br></br>駕駛考試費用 （一年半期） $510
                </li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
