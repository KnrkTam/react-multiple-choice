import React, { useEffect, useState } from "react";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import Clock from "@/components/clock";
import shuffleArr from "@/helpers/shuffleArr";

type Answer = {
  question: number;
  answer: string | null;
  // correct_answer: string;
};

const chosenAnswerArr: Answer[] = [];

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

export default async function Exam({ questions }: any) {
  console.log(questions)
  const router = useRouter();
  const [progress, setProgress] = useState(1);
  const [question, setQuestion] = useState(questions[0]);
  // const [correctAnswer, setCorrectAnswer] = useState<string>("");
  const [chosenAnswer, setChosenAnswer] = useState<string | null>(null);
  // const [answerOptions, setAnswerOptions] = useState<string[]>([]);

  let multipleAnswer = ["A", "B", "C"];
  // let shuffledArr = shuffleArr([
  //     question.correct_answer,
  //     question.incorrect_answers[0],
  //     question.incorrect_answers[1],
  //   ])
  //  let answer_options = [
  //     question.correct_answer,
  //     question.incorrect_answers[0],
  //     question.incorrect_answers[1],
  //   ];

  // console.log("this is answers", shuffledArr);

  useEffect(() => {
    setQuestion(questions[progress - 1]);
  }, [progress]);

  function nextQuestion() {
    // chosenAnswerArr.push({
    //   question: progress,
    //   answer: chosenAnswer,
    //   // correct_answer: correctAnswer,
    // });
    console.log("push answer", chosenAnswerArr);
    if (progress < 21) {
      setProgress(progress + 1);

      setChosenAnswer(null);
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

  function handleChosenAnswer(mc: string) {
    setChosenAnswer(mc);
    console.log(chosenAnswerArr);
  }

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
        <div className="flex h-full flex-col lg:flex-row justify-between">
          {/* Question */}

          <div className="flex flex-col h-full lg:w-2/3 my-3">
            <div className="lg:min-h-[200px] flex flex-col">
              <div className="flex-1 py-2">{question.question}</div>
            </div>
            {/* Answers Options */}
            <div className="flex flex-col h-full space-y-5">
     
            </div>
          </div>
          <div className="lg:w-1/3 flex flex-col justify-between space-y-3">
            <p className="w-full">選擇你的答案：</p>
            <div className="space-x-3 w-full flex justify-between">
              {multipleAnswer.map((mc, key) => (
                <button
                  key={key}
                  className={`hover:bg-gray-300 px-8 w-full bg-gray-200 border-black text-gray-800 rounded-lg border bold ${
                    chosenAnswer == mc &&
                    "bg-zinc-100 border-gray-500 text-gray-500"
                  }`}
                  onClick={() => handleChosenAnswer(mc)}
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
                } px-5 w-full rounded-lg border`}
                onClick={lastQuestion}
                disabled={progress == 1}
              >
                上一題
              </button>
              <button
                className="border-black px-5 w-full rounded-lg border"
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
    // <></>
  );
}
