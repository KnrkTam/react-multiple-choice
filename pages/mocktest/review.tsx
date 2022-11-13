import React, { useEffect, useState } from "react";

type Question = {
  answerOptions: string[];
  chosenAnswer: string;
  answer: number | null;
  correct_answer_index: number;
};

export default function Review(query: any) {
  let results = {};
  if (typeof window == "object") {
    results = JSON.parse(window.localStorage.result);
    console.log(window);
  }

  const alphabetic_arr = ["A", "B", "C"];
  const [q, setQ] = useState(0);

  function handleQuestionBlock(x: number) {
    setQ(x);

    console.log("click", resultsArr[x]);
    console.log("chose", resultsArr[q].chosenAnswer);
  }
  let resultsArr: any = Object.values(results);

  useEffect(() => {

  }, [q]);
  return (
    <>
      <div>
        <h1> Last test result</h1>
      </div>
      <div className="flex flex-col md:flex-row justify-between px-5 max-w-[1100px] h-[650px] m-auto ">
        <div className="flex flex-col h-full space-y-2 px-5 w-1/2">
          <div>
            <p className="font-bold text-3xl ">{q + 1} / 20</p>
            <p>{resultsArr[q].question}</p>
            <div className="min-h-[200px]"></div>
          </div>
          <div>
            {alphabetic_arr.map((alphabet, i) => {
              return (
                <h2
                  key={i}
                  className={`${
                    resultsArr[q].chosenAnswer == i &&
                    "border-red-300 text-red-300"
                  } border rounded-lg py-2 ${
                    resultsArr[q].correctAnswerIndex == i
                      ? "border-green-300 text-green-300"
                      : "border-gray-300 text-gray-300"
                  }`}
                >
                  {alphabet}. {resultsArr[q].answerOptions[i]}{" "}
                </h2>
              );
            })}
          </div>
        </div>
        <div className="flex flex-col h-full w-2/5 space-y-2">
          <p className="text-red-400 font-bold text-5xl">FAIL</p>
          <p className="">Results : </p>
          <p>0/20</p>
          <p>You have spent {""} </p>
          <div className="grid grid-cols-5 gap-5 min-w-[400px]">
            {resultsArr.map((x: any, i: number) => {
              return (
                <>
                  <button
                    className="bg-red-400 text-white text-xl rounded-lg p-8 w-10 h-10 font-bold flex items-center justify-center hover:brightness-[85%]"
                    key={x}
                    onClick={() => handleQuestionBlock(x.questionIndex)}
                  >
                    {i + 1}
                  </button>
                </>
              );
            })}
          </div>
        </div>
      </div>
      <div className="flex justify-center space-x-2">
        <button className="border rounded-lg bg-zinc-400 text-white px-5 hover:bg-zinc-200">
          Try Again
        </button>
        <button className="border rounded-lg text-gray-500 border-gray-500 px-5 hover:bg-gray-100">
          Back to Home
        </button>
      </div>
    </>
  );
}

// const function NumberBlock(index: any) {
//   return (
//     <>
//       {console.log("nb", index)}
//       <p className="bg-red-500 tex-white w-6 h-6 rounded-xl"> {index}</p>
//     </>
//   );
// }
