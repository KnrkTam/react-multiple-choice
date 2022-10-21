import type { NextPage } from 'next'
import { imageItems } from '@/components/home/imageItems';
import Link from 'next/link';
import ImageCard from '@/components/home/imageCard';



const Home: NextPage = () => {

  return (
    <>
      <section className="lg:px-20 lg:my-20">
        <div className="flex flex-col text-gray-100 px-10 my-5 space-y-10">
          <p className="text-5xl font-black">新手報名</p>
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
      <section className="relative py-20">
        <div className="h-[450px] lg:h-[600px] w-full flex overflow-x-scroll scroll whitespace-nowrap scroll-smooth space-x-5 px-[300px] py-10">
          {imageItems.map((imageItem) => (
            <ImageCard data={imageItem} key={imageItem.title}></ImageCard>
          ))}
        </div>
      </section>

      <div className="grid grid-cols-3 gap-4">
        <div className="...">01</div>
        <div className="...">02</div>
        <div className="...">03</div>
        <div className="col-span-2 ...">04</div>
        <div className="...">05</div>
        <div className="...">06</div>
        <div className="col-span-2 ...">07</div>
      </div>
    </>
  );
}

export default Home
