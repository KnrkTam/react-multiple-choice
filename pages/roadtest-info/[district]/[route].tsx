import React from "react";
import { ArrowDownIcon } from "@/../components/svg";
import { FaMapPin } from "react-icons/fa";
import { districts } from "@/../components/roadtest-info/roadtestRoute";

// export async function getServerSideProps({ query }: any) {
//   const { district, route } = query;

//   return {
//     props: {
//       district,
//       route,
//     },
//   };
// }

type staticPathDataProp = {
  params: {
    district: string;
    route: string;
  };
};

// Generates `/posts/1` and `/posts/2`
export async function getStaticPaths() {
  let staticPathData: staticPathDataProp[] = [];
  districts.map((district) => {
    district.routes.map((route) => {
      staticPathData.push({
        params: { district: district.label, route: route.label },
      });
    });
  });

  return {
    paths: staticPathData,
    fallback: false, // can also be true or 'blocking'
  };
}

export async function getStaticProps(context: any) {
  console.log(context);
  const { district, route } = context.params;

  return {
    // Passed to the page component as props
    props: {
      district,
      route,
    },
  };
}

export default function roadinfoRoutePage({
  district,
  route,
}: {
  district: string;
  route: string;
}) {
  return (
    <div className="p-5">
      <h1>路試資訊</h1>
      <div className="flex">
        <img className="h-full flex-1" src="/test-image.jpeg" alt="map"></img>
        <div className="w-3/5 flex flex-col justify-center">
          <p className="text-gray-300"> {district}</p>
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <p className="text-2xl">{route}</p>
              <ArrowDownIcon className="" />
            </div>
            <FaMapPin className="h-6 w-6" />
          </div>
        </div>
      </div>
    </div>
  );
}
