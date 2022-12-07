import { useForm, SubmitHandler, FormProvider } from "react-hook-form";
import React, { useEffect, useRef, useState } from "react";
import {
  Input,
  Popover,
  PopoverContent,
  PopoverTrigger,
  PopoverArrow,
  VStack,
  FormControl,
  FormLabel,
  useDisclosure,
} from "@chakra-ui/react";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { ArrowDownIcon } from "../svg";
import {
  ApplicationData,
  COURSES_TYPE,
  DISTRICT_TYPE,
  QUALI_TYPE,
} from "./type/applicationTypes";
import SelectDropDown from "./SelectDropDown";

const schema = yup.object({
  name: yup.string().required("請輸入名稱"),
  contact: yup.string().required("請輸入聯絡電話"),
});

export default function ApplicationForm() {
  const ApplicationFormProvider = useForm<ApplicationData>({
    resolver: yupResolver(schema),
    mode: "onChange",
    defaultValues: {
      name: "Kenrick",
      contact: 4379738229,
      district: DISTRICT_TYPE.KLN,
      course: COURSES_TYPE.PRIVATE_AUTO,
    },
  });
  const {
    register,
    setValue,
    getValues,
    handleSubmit,
    watch,
    formState: { errors },
  } = ApplicationFormProvider;

  const onSubmit: SubmitHandler<ApplicationData> = (data) => console.log(data);

  return (
    <FormProvider {...ApplicationFormProvider}>
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
              // className="rounded-xl"
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
          <SelectDropDown
            data={Object.values(COURSES_TYPE)}
            name="course"
            label="報考課程"
          />
        </div>
        <div className="flex flex-col">
          <SelectDropDown
            data={Object.values(QUALI_TYPE)}
            name="quali"
            label="報考資格"
          />
        </div>
        <div className="flex flex-col">
          <label>報考地區</label>
          <div className="flex space-x-2 py-2">
            <button
              value="九龍"
              className={`${
                getValues("district") == DISTRICT_TYPE.KLN
                  ? " bg-gray-300"
                  : " bg-white text-gray-500"
              } flex-1 rounded-xl border border-gray-300 p-2`}
              // onClick={() => setDistrict("九龍")}
              onClick={() => setValue("district", DISTRICT_TYPE.KLN)}
            >
              {DISTRICT_TYPE.KLN}
            </button>
            <button
              value="香港"
              className={`${
                getValues("district") == DISTRICT_TYPE.HK
                  ? " bg-gray-300"
                  : " bg-white text-gray-500"
              } flex-1 rounded-xl border border-gray-300 p-2`}
              onClick={() => setValue("district", DISTRICT_TYPE.HK)}
            >
              {DISTRICT_TYPE.HK}
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
        <div className="w-full">
          <button
            type="submit"
            className="bg-zinc-500 text-white rounded-lg w-full my-10 py-2"
          >
            提交申請
          </button>
        </div>
      </form>
    </FormProvider>
  );
}
