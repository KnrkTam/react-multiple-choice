import ApplicationForm from "@/../components/application/ApplicationForm";
import Disclaimer from "@/../components/application/Disclaimer";
import ProgressBar from "@/../components/application/ProgressBar";
import React from "react";
import { Heading } from "@chakra-ui/react";


export default function application() {
  return (
    <div className="mx-5 mb-20">
      <div className="w-4/5 max-w-[800px]  m-auto">
        <ProgressBar />
      </div>
      <div className="flex flex-col md:flex-row mt-10 lg:mt-20 space-x-5">
        {/* Long form */}
        <div className="w-full md:w-3/5">
          <Heading as="h2" mb={2} fontSize={"2xl"}>
            報名表
          </Heading>
          <ApplicationForm />
        </div>
        {/* Short box */}
        <div className="flex-1 lg:mr-5 mb-2">
          <Disclaimer />
        </div>
      </div>
    </div>
  );
}
