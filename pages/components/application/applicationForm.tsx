import { useForm, SubmitHandler } from "react-hook-form";

import React, { useState } from "react";

type FormData = {
  name: string;
  contact: string;
  course: string;
  quali: string;
  payment: string;
  district: string;
  remark: string;
};

export default function ApplicationForm() {
  const [district, setDistrict] = useState("九龍");
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>({ mode: "onChange" });

  const onSubmit: SubmitHandler<FormData> = (data) => console.log(data);

  return (
    <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col">
        <label>中文名字</label>
        <input
          type="text"
          name="name"
          className="border border-gray-800 p-2 my-2 rounded-lg w-full"
          placeholder="和身分證一致"
        />
      </div>
      <div className="flex flex-col">
        <label>聯絡電話</label>
        <input
          type="text"
          name="contact"
          className="border border-gray-800 p-2 my-2 rounded-lg w-full"
          placeholder="+852"
        />
      </div>
      <div className="flex flex-col">
        <label>報考課程</label>
        <select
          className="border border-gray-500 p-2 rounded-lg"
          {...register("course")}
        >
          <option value="privateAuto">私家車自動波</option>
          <option value="privateManual">私家車棍波</option>
          <option value="vanAuto">輕型貨車自動波</option>
          <option value="vanManual">輕型貨車棍波</option>
        </select>
      </div>
      <div className="flex flex-col">
        <label>報考資格</label>
        <select
          className="border border-gray-500 p-2 rounded-lg"
          {...register("quali")}
        >
          <option value="新手">新手</option>
          <option value="補鐘">私家車棍波</option>
          <option value="快期重考">快期重考</option>
          <option value="己有路試期">己有路試期</option>
        </select>
      </div>
      <div className="flex flex-col">
        <label>報考地區</label>
        <div className="flex space-x-2 py-2">
          <button
            type="button"
            className={`${
              district == "九龍" ? " bg-gray-300" : " bg-white text-gray-400"
            } flex-1 rounded-lg border border-gray-300`}
            onClick={() => setDistrict("九龍")}
          >
            九龍或新界地區
          </button>
          <button
            type="button"
            className={`${
              district == "香港" ? " bg-gray-300" : " bg-white text-gray-400"
            } flex-1 rounded-lg border border-gray-300`}
            onClick={() => setDistrict("香港")}
          >
            香港
          </button>
        </div>
      </div>
      <div className="flex flex-col">
        <label>代辦服務 （運輸署報名 和 辦理學牌）</label>
        <fieldset>
          <input name="service" className="p-2 m-2" type="checkbox" />
          <label>需要代辦服務</label>
        </fieldset>
      </div>
      <div className="flex flex-col">
        <label>備註 </label>
        <span className="flex space-x-2 py-2">
          <textarea
            name="remark"
            className="rounded-xl border border-2 border-gray-300 p-2 w-full resize-none h-[100px]"
            placeholder="心水師傅 ，學車理想時間，上限為50個中文字"
          ></textarea>
        </span>
      </div>
      <div className="flex flex-col">
        <label>付款方式</label>
        <select
          className="border border-gray-500 p-2 rounded-lg"
          {...register("payment")}
        >
          <option value="directPayment">ATM或FPS付款·</option>
          <option value="stripe">網上付款</option>
        </select>
      </div>
    </form>
  );
}
