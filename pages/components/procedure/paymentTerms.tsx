import React from "react";
import {
  FaCcVisa,
  FaCcMastercard,
  FaCcAmex,
  FaCcApplePay,
} from "react-icons/fa";

export default function PaymentTerms() {
  return (
    <div className="flex flex-col h-full md:flex-row md:items-center md:justify-between bg-gray-100 rounded-2xl mt-10 p-[5%]">
      <div className="flex flex-col h-full min-h-[300px] justify-between space-y-5">
        <div className="space-y-5">
          <p className="font-bold text-2xl"> 報名費用</p>
          <p className="text-lg w-3/4">
            學神會為你配對師傅，夾到啱為止，以最有效率既方法搵師傅學車提供網上付款功能，節省時間
          </p>
        </div>
        <div className="space-y-5">
          <p className="font-bold text-2xl"> 繳費方式</p>
          <p className="text-gray-500">ATM或FPS過數 / 網上付款</p>
          <div className="flex space-x-5">
            <FaCcVisa className="h-[6vh] w-[6vh]"></FaCcVisa>
            <FaCcMastercard className="h-[6vh] w-[6vh]"></FaCcMastercard>
            <FaCcAmex className="h-[6vh] w-[6vh]"></FaCcAmex>
            <FaCcApplePay className="h-[6vh] w-[6vh]"></FaCcApplePay>
          </div>
        </div>
      </div>

      <div className="space-y-5">
        <p className="font-bold text-2xl"> 費用明細</p>
        <div className="flex justify-between text-gray-500 ">
          <p>運輸署報名及辦理學牌</p>
          <p>$1058</p>
        </div>
        <div className="flex justify-between text-gray-500">
          <p> 代辦服務費</p>
          <p>$100</p>
        </div>
        <div className="flex justify-between text-gray-500">
          <p>考試租車費</p>
          <p>$2000</p>
        </div>
        <div className="flex justify-between text-gray-500">
          <p> 補鐘 - 介紹費</p>
          <p>$100</p>
        </div>
        <p className="my-5">堂費上堂時逐堂給師傅</p>
        <p className="text-sm text-gray-500">
          註：租車費為考試當日和師傅租車的費用，平時學車不需要。
        </p>
      </div>
    </div>
  );
}
