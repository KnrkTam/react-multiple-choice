import ApplicationForm from "@/components/application/applicationForm";
import Disclaimer from "@/components/application/disclaimer";
import ProgressBar from "@/components/application/progressBar";
import React from "react";


export default function application() {

  return (
    <div className="mx-5">
      <div className="w-4/5 max-w-[800px]  m-auto">
        <ProgressBar />
      </div>
      <div className="flex flex-col md:flex-row mt-20 space-x-5">
        {/* Long form */}
        <div className="w-full md:w-3/5">
          <h2>報名表</h2>
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
