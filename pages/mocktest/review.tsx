import React from 'react'

export default function Review() {
 

  return (
    <div className="flex flex-col mock bg-gray-100 min-h-[600px] items-center ">
      {/* Title */}
      <h2 className="flex-one mt-10 w-full">筆試結果</h2>
      <div className="flex w-3/4 flex-col ">
        {/* Timer and question count */}

        <div className="flex w-full justify-between mb-2">
          <h3 className="flex-one text-2xl">{progress + 1} / 20</h3>
          <div className="flex items-center">
            <p>時限：</p>
            <p>12:14</p>
          </div>
        </div>
        <div className="flex h-full justify-between">
          {/* Question */}

          <div className="flex flex-col h-full w-2/3">
            <div className="min-h-[200px] flex flex-col">
              <div className="flex-1">{question.question}</div>
            </div>
            {/* Answers Options */}
            <div className="flex flex-col h-full space-y-5">
              <div className="">A. {question.correct_answer}</div>
              <div className="">B. {question.incorrect_answers[0]}</div>
              <div className="">C. {question.incorrect_answers[1]}</div>
              <div className="">D. {question.incorrect_answers[2]}</div>
            </div>
          </div>
          <div className="w-1/3 flex flex-col justify-between">
            <p className="w-full">選擇你的答案：</p>
            <div className="space-x-3 w-full flex justify-between">
              <button className="hover:bg-gray-300 px-8 w-full border-gray-500 text-gray-500 rounded-lg border-2">
                A
              </button>
              <button className="hover:bg-gray-300 px-8 w-full border-gray-500 text-gray-500 rounded-lg border-2">
                B
              </button>
              <button className="hover:bg-gray-300 px-8 w-full border-gray-500 text-gray-500 rounded-lg border-2">
                C
              </button>
            </div>
            <div className="space-x-3 w-full flex justify-between">
              <button
                className="px-8 w-full border-black rounded-lg border-2"
                onClick={lastQuestion}
              >
                上一題
              </button>
              <button
                className="px-8 w-full border-black rounded-lg border-2"
                onClick={nextQuestion}
              >
                下一題
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="border-red-500 rounded-xl bg-gray-200 border-2 w-full mt-20">
        <div className={`bg-red-500 h-1`} style={progressStyle}></div>
      </div>
    </div>
  );
}
