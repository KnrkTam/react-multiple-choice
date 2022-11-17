import type { NextPage } from "next";
import Link from "next/link";
import { homeProcedures } from "@/components/home/homeProcedures";
import { courses } from "@/components/coursedetails/coursesItem";
import HomeProcedureSession from "@/components/home/homeProcedureSession";

import ImageCard from "@/components/home/imageCard";
import SubtitleHeading from "./components/home/subtitleHeading";
import RoadtestCard from "./components/home/roadtestCard";
import InstructorCard from "./components/home/instructorCard";
import MocktestCard from "./components/home/mocktestCard";

const Home: NextPage = () => {
  return (
    <>
      <section className=" mt-5 max-w-[1400px] min-h-[200px] pt-9 m-auto text-center md:text-left">
        <img
          src="/background.jpeg"
          className="absolute w-auto min-w-[1500px] max-h-[700px] top-[-10vh] left-0 brightness-75"
        ></img>
        <div className="flex flex-col text-gray-100 px-10 mt-10 space-y-5 relative z-20">
          <p className="text-5xl font-black lg:text-5xl drop-shadow-2xl">
            新手報名
          </p>
          <p className="font-black">
            學神為你配對有認可資格的教車師傅，輕鬆考取駕駛執照
          </p>
          <p className="font-black">各課程的收費、師傅的堂費價目一目了然</p>
          <div className="flex justify-center lg:justify-start">
            <Link href="/procedure">
              <button className="w-40 border-2 border-white rounded-lg hover:bg-white hover:text-black hover:font-extrabold">
                了解更多
              </button>
            </Link>
          </div>
        </div>
      </section>
      <section className="relative pt-10 pb-20 max-w-[1400px]">
        <div className="h-full w-full  flex overflow-x-scroll scroll scroll-smooth space-x-5 py-10 px-5 snap-x lg:justify-center">
          {courses.map((course) => (
            <ImageCard data={course} key={course.title}></ImageCard>
          ))}
        </div>
        <div id="procedure"></div>
      </section>
      <section className="my-10 max-w-[1400px] m-auto">
        <SubtitleHeading
          data={{
            heading: "學車流程",
            desc: "其實學車一啲都唔難，學神可以全程協助你",
            link: "詳細流程",
            url: "/procedure",
          }}
        />
        <HomeProcedureSession />
      </section>

      <section className="my-10 py-10 ">
        <div className="max-w-[1400px] m-auto">
          <SubtitleHeading
            data={{
              heading: "路試資訊",
              desc: "熟習路線的地圖和短片，上堂考試時都會安心啲",
              link: "全部路線",
              url: "/",
            }}
          />
        </div>

        <RoadtestCard />
      </section>
      <section className="my-10 py-10  max-w-[1400px] m-auto">
        <SubtitleHeading
          data={{
            heading: "搵師傅",
            desc: "經驗豐富的運輸署核准駕駛教師樂意帶領你成為學神",
            link: "師傅名單",
            url: "/instructor",
          }}
        />
        <div className="w-full h-full min-h-[650px] flex overflow-x-scroll py-5 space-x-[6vh] px-5 snap-x ">
          {homeProcedures.map((procedure) => (
            <InstructorCard data={procedure} key={procedure.step} />
          ))}
        </div>
      </section>
      <section className="my-10 py-10  max-w-[1400px] m-auto">
        <SubtitleHeading
          data={{
            heading: "筆試資訊",
            desc: "學神提提你",
            link: "",
            url: "/instructor",
          }}
        />
        <MocktestCard />
      </section>
    </>
  );
};

export default Home;
