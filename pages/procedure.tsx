import React, { useState } from "react";
import Link from "next/link";
import Subheading from "./components/procedure/subheadnav";
import Readmore from "./components/procedure/readmore";
import PaymentTerms from "./components/procedure/paymentTerms";

export default function Procedure() {
  const [showApply, setShowApply] = useState(false);
  const [showWritten, setShowWritten] = useState(false);
  const [showBook, setShowBook] = useState(false);
  const [showRoad, setShowRoad] = useState(false);
  const [showLicense, setShowLicense] = useState(false);

  return (
    <>
      <div className="sticky top-20 z-40">
        <div className="bg-white">
          <div className="px-10">
            <h1>學車流程</h1>
          </div>
          <Subheading />
        </div>
      </div>
      <div className="h-full bg-gray-100 rounded-2xl m-30 px-[5%] py-5 divide-y divide-gray-200 divide-2 snap-y ">
        <div
          id="apply"
          className="snap-center"
          style={{ scrollMarginTop: "30vh" }}
        >
          <div className="flex justify-between pt-5">
            <p className="font-bold text-2xl">1. 網上報名</p>
            <Link href="/application">
              <a className="hover:underline ">報名表格 {">"}</a>
            </Link>
          </div>
          <div className="py-5 text-xl">
            <li>網上報名方便快捷，只需填妥幾條問題，即可完成</li>
            <li>報名後即有專人1 對 1 跟進</li>
            <li>收齊文件後，三個工作天內為你辦妥報名申請</li>
            <li>一站式平台報考筆試、路試、代辦學牌</li>
            <li>提供網上付款功能，節省時間</li>
            <Readmore state={showApply} setter={setShowApply} />
          </div>

          <div
            className={`space-y-5 my-5 text-lg text-gray-700 ${
              showApply ? "block" : "hidden"
            } `}
          >
            <p>
              任何時間，想報就報。學神網站提供私家車自動波、棍波和輕型貨車自動波、棍波課程，你可以參考網站內的課程簡介，考慮個人的需要，選定合適你的學車課程後，即可使用網上報名表，提供簡單的個人資料和報讀課程的選項後，即可完成報名程序。
            </p>
            <p>
              如對課程內容、學車流程和安排有任何疑問，都可以直接與學神客服聯絡，我們有經驗的客服樂意解答你的疑難，助你學車的過程暢通無阻。
            </p>
            <p>
              當你遞交了網上報名表後，可以即時進行網上繳費，由Stripe提供的網上付款平台，安全又方便。而且學神提供代辦服務，當你勾選了這個選項，就有專人替你辦理運輸署的報考申請和學牌的安排，一條龍服務，但求讓你專心準備筆試、路試，其他程序可以交俾學神代勞。隨時隨地用手機、電腦就可以完成整個報名學車的流程。揸車唔可以貪快，但報名學車梗係快得就快。
            </p>
          </div>
        </div>

        <div
          id="written-test"
          className=" snap-center "
          style={{ scrollMarginTop: "30vh" }}
        >
          <div className="flex justify-between pt-10">
            {" "}
            <p className="font-bold text-2xl">2. 準備筆試</p>
            <Link href="/mocktest">
              <a className="hover:underline">模擬筆試 {">"}</a>
            </Link>
          </div>
          <div className="py-5 text-xl">
            <li>學神免費提供提供超過500條筆試題目</li>
            <li>筆試題目簡單易明，熟讀合格冇難度</li>
            <li>網上模擬筆試，考驗你的記性和知識</li>
            <Readmore state={showWritten} setter={setShowWritten} />
            <div
              className={`space-y-5 my-5 text-lg text-gray-700  ${
                showWritten ? "block" : "hidden"
              } `}
            >
              <p>
                當完成所有學車的報名流程後，就進入第一關 -
                準備筆試。你可以在學神網站內「溫習材料 -
                模擬筆試」的頁面，下載運輸署提供的道路使用者守則小冊子。熟讀內容後，可以利用我們提供的筆試練習溫故知新，考驗自己對道路安全、標誌的熟悉程度。
              </p>
              <p>
                平日可以利用空閒、等車的些少時間，反覆溫習，到你累積一定的信心後，可以使用我們提供的「模擬筆試」，在20分鐘的限試內，挑戰自己能否達標，成功答對超過16條題目的話，就證明你對考試的題目和內容有充份的了解，增強信心，面對真實的筆試時，相信都難你唔到！
              </p>
            </div>
          </div>
        </div>

        <div
          id="book"
          className="snap-center"
          style={{ scrollMarginTop: "30vh" }}
        >
          <div className="flex justify-between pt-10">
            <p className="font-bold text-2xl"> 3. 預約師傅</p>
            <Link href="/">
              <a className="hover:underline">師傅名單 {">"}</a>
            </Link>
          </div>
          <div className="py-5 text-xl">
            <li>預約學神的師傅學車，學費逐堂結算，收費透明</li>
            <li>師傅資歷豐富，均為運輸署核准駕駛教師</li>
            <li>學神會為你配對師傅，夾到啱為止，以最有效率的方法搵師傅學車</li>
            <Readmore state={showBook} setter={setShowBook} />
            <div
              className={`space-y-5 my-5 text-lg text-gray-700 ${
                showBook ? "block" : "hidden"
              } `}
            >
              <p>
                恭喜你完成筆試，下一步可以在學神的平台揀選合適你的教車師傅準備路試。你可以參考各位師傅的自我簡介，擅長的路試地區、指定的教授車種和車型，選擇合你心水的師傅；或提供條件、期望讓學神為你進行配對。我們專業的教車師傅會因材施教，一路跟進你的學車進度，給予建議、技巧的提示，讓你熟習不同路線的注意事項，盡可能幫助你熟習路試路線的環境，期望以最穩定的狀態面對考試。
              </p>
              <p>
                比對駕駛學院的套餐收費，學神平台上的教車師傅可以提供試堂及逐堂收費的模式，你可以按你的預算，查找合適收費的教車師傅。而上堂學車的時候，記得穿著舒適的服飾，搭配埋薄底波鞋就最好！
              </p>
            </div>
          </div>
        </div>
        <div
          id="road-test"
          className="snap-center "
          style={{ scrollMarginTop: "30vh" }}
        >
          <div className="flex justify-between pt-10">
            <p className="font-bold text-2xl"> 4. 準備路試</p>
            <Link href="/">
              <a className="hover:underline">考試攻略 路試短片{">"}</a>
            </Link>
          </div>
          <div className="py-5 text-xl">
            <li>
              記得預留足夠時間準備路試，一般為考期前3 - 4個月，學車輕鬆學！
            </li>
            <li>學車前學神可以為同學申請學牌</li>
            <Readmore state={showRoad} setter={setShowRoad} />
            <div
              className={`space-y-5 my-5 text-lg text-gray-700  ${
                showRoad ? "block" : "hidden"
              } `}
            >
              <p>
                揀定師傅後，記得盡快繳交考試租車費給指定師傅，讓師傅為你預留時間，在你的路試日期租車給你應付考試。
              </p>
              <p>
                運輸署建議無論是學私家車或輕型貨車的學生，都應該要接受最少30小時的駕駛訓練，才可達到基本駕駛技術水平。所以，學神建議學生在路試考期前三至四個月，才開始跟教車師傅上堂，而且我們可以提供為同學代辦學牌的服務。學牌的有效日子只有1年，所以最好配合路試日期，正式學車前先申請。當師傅揀定左、學牌又申請左，課堂以外你都可以利用學神網站上的路試短片，溫習各路線的駕駛環境，哪些街道、彎位的難度更高，練習時可能要花多少少時間去應付。我們學神和一眾師傅們都會盡力協助你順利完成考試。
              </p>
            </div>
          </div>
        </div>
        <div
          id="license"
          className="snap-center "
          style={{ scrollMarginTop: "30vh" }}
        >
          <div className="flex justify-between pt-10">
            <p className="font-bold text-2xl">5. 成為P牌仔</p>
          </div>
          <Readmore state={showLicense} setter={setShowLicense} />
          <div
            className={`space-y-5 my-5 text-lg text-gray-700 ${
              showLicense ? "block" : "hidden"
            } `}
          >
            <p>
              都話左你得嫁喇！辛苦你一路披荊斬棘，跨過重重難關，成功成為學神，順利考到P牌（暫准駕駛執照），將來成為車神的日子相信都指日可待。
            </p>
            <p>
              溫馨提示，當領取了暫准駕駛執照後，記得要將P牌放在車輛的前後方（擋風玻璃左邊），方便其他人和執法人員辨認。然後在行車時，謹記所學的所有守則，遵守交通規矩，注意行車安全，例如在P牌仔的階段，即便在車速限制在每小時70公里以上，都不能揸得快過70公里；在三線或以上的快速公路上，不可使用快線（即最右的行車線）。車牌都考得到，相信要跟足指引揸車，都唔會難得到你。
            </p>
            <p>
              P牌掛滿一年，順利過渡到可以申領正式駕駛執照，就記得要在3年內提出申請，否則會打回原形，要重新再考試。屆時只要準備所需的文件和費用，填寫正式牌照的申請表，遞交予運輸署辦理即可，詳情可以參考運輸署網站上的資料。當你一切辦妥，就可以好好享受駕駛的方便和樂趣。日後有朋友都想學車，就記得介紹學神俾佢地喇﹗
            </p>
          </div>
        </div>
      </div>
      <PaymentTerms />
      <div className="my-10 w-full">
        <Link href="/application">
          <button className="w-full py-5 bg-red-500 text-white rounded-lg h-5 flex items-center justify-center hover:brightness-90">
            <span>立即報名</span>
          </button>
        </Link>
      </div>
    </>
  );
}
