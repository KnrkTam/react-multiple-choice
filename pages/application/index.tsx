import ApplicationForm from "@/components/application/applicationForm";
import Disclaimer from "@/components/application/disclaimer";
import ProgressBar from "@/components/application/progressBar";
import React from "react";
import { SubmitHandler } from "react-hook-form";

type FormData = {
  name: string;
  contact: string;
};

export default function application() {
  const onSubmit: SubmitHandler<FormData> = (data) => console.log(data);

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
      <div>
        <button
          type="submit"
          className="bg-zinc-500 text-white rounded-lg w-full my-10 py-2 lg:w-3/5"
        >
          提交申請
        </button>
      </div>
    </div>
  );
}
