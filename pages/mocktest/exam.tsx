import React, { useEffect, useState } from "react";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import Clock from "@/components/clock";
// import questions from '@/api/questions';

export const getServerSideProps: GetServerSideProps = async () => {
  const url = "https://opentdb.com/api.php?amount=20&type=multiple";
  const response = await fetch(url);
  const data = await response.json();
  return {
    props: {
      questions: data.results,
    },
  };
};

export default function Exam({ questions }: any) {
  const router = useRouter();
  console.log(questions);
  const [progress, setProgress] = useState(1);
  const [question, setQuestion] = useState(questions[0]);
  const [chosenAnswer, setChosenAnswer] = useState(false);
  let chosenAnswerArr = [];

  let multipleAnswer = ['A', 'B', 'C'];
  // let correct_answer_arr = [];
  // let chosen_answer = [];

  useEffect(() => {
    setQuestion(questions[progress - 1]);
  }, [progress]);

  function nextQuestion() {
    if (progress < 21) {
      setProgress(progress + 1);
      if (progress == 20) {
        router.push("/mocktest/review");
      }
    }
  }

  function lastQuestion() {
    if (progress > 1) {
      setProgress(progress - 1);
    }
  }

  function handleChosenAnswer() {}

  const progressStyle = {
    width: (progress * 5).toString() + "%",
  };

  return (
    <div className="flex flex-col mock bg-gray-100 min-h-[600px] items-center ">
      {/* Title */}
      <h2 className="flex-one mt-10 w-full px-5">模擬筆試</h2>
      <div className="flex w-3/4 flex-col ">
        {/* Timer and question count */}

        <div className="flex w-full justify-between mb-2">
          <h3 className="flex-one text-2xl">{progress} / 20</h3>
          <div className="flex items-center">
            <p>時限：</p>
            <Clock />
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
              {multipleAnswer.map((mc, key) => (
                <button
                  key={key}
                  className="hover:bg-gray-300 px-8 w-full bg-gray-200 border-black text-gray-800 rounded-lg border-2 bold "
                  onClick={handleChosenAnswer}
                >
                  {mc}
                </button>
              ))}
            </div>
            <div className="space-x-3 w-full flex justify-between">
              <button
                className={`${
                  progress == 1
                    ? "cursor-not-allowed border-gray-300 text-gray-300"
                    : " border-black "
                } px-8 w-full rounded-lg border-2 `}
                onClick={lastQuestion}
                disabled={progress == 1}
              >
                上一題
              </button>
              <button
                className="border-black px-8 w-full rounded-lg border-2"
                onClick={nextQuestion}
              >
                下一題
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="border-red-500 rounded-xl bg-gray-200 border-2 w-full mt-20 ">
        <div
          className={`bg-red-500 h-1 transition-all ease-in-out duration-700`}
          style={progressStyle}
        ></div>
      </div>
    </div>
  );
}
