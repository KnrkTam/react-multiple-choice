import { useForm, SubmitHandler } from "react-hook-form";
import React, { useEffect, useRef, useState } from "react";
import {
  Input,
  Popover,
  PopoverContent,
  PopoverTrigger,
  VStack,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { ArrowDownIcon } from "../svg";

const schema = yup.object({
  name: yup.string().required("請輸入名稱"),
  contact: yup.string().required("請輸入聯絡電話"),
});
enum paymentEnum {
  directPayment = "directPayment",
  stripe = "stripe",
}

enum districtEnum {
  香港 = 0,
  九龍 = 1,
}

type FormData = {
  name: string;
  contact: number;
  course: string;
  quali: string;
  payment: paymentEnum;
  district: districtEnum;
  remark: string;
};

export default function ApplicationForm() {
  const {
    register,
    setValue,
    getValues,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
    mode: "onChange",
    defaultValues: {
      name: "Kenrick",
      contact: 4379738229,
      district: 1,
    },
  });

  console.log(errors);
  const onSubmit: SubmitHandler<FormData> = (data) => console.log(data);

  return (
    <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col">
        <FormControl>
          <FormLabel>中文名字</FormLabel>
          <Input
            {...register("name")}
            type="text"
            placeholder="和身分證一致"
            borderColor="black"
            focusBorderColor="black.500"
            rounded="xl"
            className="rounded-xl"
          ></Input>
        </FormControl>
        <p className="p-2 text-red-500">{errors.name?.message}</p>
      </div>
      <div className="flex flex-col">
        <label>聯絡電話</label>
        <Input
          {...register("contact")}
          type="number"
          placeholder="+852"
          borderColor="black"
          focusBorderColor="black.500"
          rounded="xl"
        ></Input>
      </div>
      <div className="flex flex-col">
        <FormControl>
          <FormLabel>報考課程</FormLabel>
          <Popover>
            <PopoverTrigger>
              <div>
              {/* <div className="flex items-center justify-between p-2 w-full border border-gray-500 rounded-lg "> */}
                {getValues("course")}
                <span className="flex-1"></span>
                <ArrowDownIcon className="w-5 h-5" />
              </div>
            </PopoverTrigger>
            <PopoverContent className="flex">
              <VStack className="w-full cursor-pointer border border-gray-300 rounded-lg">
                <div
                  className="p-2 hover:bg-gray-300 w-full"
                  onClick={() => {
                    setValue("course", "privateAuto");
                  }}
                >
                  私家車自動波
                </div>
                <div
                  className="p-2 hover:bg-gray-300 w-full"
                  onClick={() => setValue("course", "privateManual")}
                >
                  私家車棍波
                </div>
                <div
                  className="p-2 hover:bg-gray-300 w-full"
                  onClick={() => setValue("course", "vanAuto")}
                >
                  輕型貨車自動波
                </div>
                <div
                  className="p-2 hover:bg-gray-300  w-full"
                  onClick={() => setValue("course", "vanManual")}
                >
                  輕型貨車棍波
                </div>
              </VStack>
            </PopoverContent>
          </Popover>
        </FormControl>
        {/* <label>報考課程</label> */}
        {/* <Select
          borderColor="blackAlpha.800"
          bg="white"
          // color={'orange'}
          // placeholder="select option"
          {...register("course")}
        >
          <option value="privateAuto">私家車自動波</option>
          <option value="privateManual">私家車棍波</option>
          <option value="vanAuto">輕型貨車自動波</option>
          <option value="vanManual">輕型貨車棍波</option>
        </Select> */}
        <input {...register("course")}></input>
        {/* <select className="border border-gray-500 p-2 rounded-lg"></select> */}
      </div>
      <div className="flex flex-col">
        <label>報考資格</label>
        <select
          className="border border-gray-500 p-2 rounded-lg"
          {...register("quali")}
        >
          <option value="新手">新手</option>
          <option value="補鐘">補鐘</option>
          <option value="快期重考">快期重考</option>
          <option value="己有路試期">己有路試期</option>
        </select>
      </div>
      <div className="flex flex-col">
        <label>報考地區</label>
        <div className="flex space-x-2 py-2">
          <button
            value="九龍"
            className={`${
              getValues("district") == 1
                ? " bg-gray-300"
                : " bg-white text-gray-500"
            } flex-1 rounded-xl border border-gray-300 p-2`}
            // onClick={() => setDistrict("九龍")}
            onClick={() => setValue("district", 1)}
          >
            九龍或新界地區
          </button>
          <button
            value="香港"
            className={`${
              getValues("district") == 0
                ? " bg-gray-300"
                : " bg-white text-gray-500"
            } flex-1 rounded-xl border border-gray-300 p-2`}
            // onClick={() => setDistrict("香港")}
            onClick={() => setValue("district", 0)}
          >
            香港
          </button>
          <input className="hidden" {...register("district")} />
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
            {...register("remark")}
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
      <button
        type="submit"
        className="bg-zinc-500 text-white rounded-lg w-full my-10 py-2 lg:w-3/5"
      >
        提交申請
      </button>
      {/* <input type="submit" /> */}
    </form>
  );
}
