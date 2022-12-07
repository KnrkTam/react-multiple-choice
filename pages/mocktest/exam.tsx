import React, { useEffect, useMemo, useState } from "react";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import Clock from "@/../components/clock";
import shuffleArr from "@/helpers/shuffleArr";

type Answer = {
  question: number;
  answer: number | null;
  correct_answer_index: number;
};

const chosenAnswerArr: Answer[] = [];
const questions: any[] = [];

export const getServerSideProps: GetServerSideProps = async () => {
  const url = "https://opentdb.com/api.php?amount=20&type=multiple";
  const response = await fetch(url);
  const data = await response.json();

  data.results.map((element: any, i: number) => {
    let mc_arr = shuffleArr([
      element.correct_answer,
      element.incorrect_answers[0],
      element.incorrect_answers[1],
    ]);
    questions[i] = {
      question: element.question,
      questionIndex: i,
      answerOptions: mc_arr,
      correctAnswer: element.correct_answer,
      chosenAnswer: null,
      correctAnswerIndex: mc_arr.indexOf(element.correct_answer),
    };
  });

  return {
    props: {
      questions: questions,
    },
  };
};

export default function Exam({ questions }: any) {
  const router = useRouter();
  const [progress, setProgress] = useState(1);
  const [question, setQuestion] = useState(questions[0]);
  const [chosenAnswer, setChosenAnswer] = useState<number | null>(null);
  const multipleAnswer = ["A", "B", "C"];

  useEffect(() => {
    setQuestion(questions[progress - 1]);
    setChosenAnswer(questions[progress - 1].chosenAnswer);
  }, [progress]);

  function nextQuestion() {
    questions[progress - 1].chosenAnswer = chosenAnswer;

    if (progress < 20) {
      setProgress(progress + 1);
    } else {
      localStorage.setItem("result", JSON.stringify(questions));

      router.push("/mocktest/review");
    }

    console.log(questions);
  }

  function lastQuestion() {
    if (progress > 1) {
      setProgress(progress - 1);
    }
  }

  function handleChosenAnswer(mc: number | null) {
    setChosenAnswer(mc);
  }

  const progressStyle = {
    width: (progress * 5).toString() + "%",
  };

  return (
    <div className="flex flex-col mock bg-gray-100 min-h-[600px] items-center ">
      {/* Title */}
      <h2 className="flex-one mt-10 w-full px-5">Mock Test</h2>
      <div className="flex w-3/4 flex-col ">
        {/* Timer and question count */}
        <div className="flex w-full justify-between mb-2">
          <h3 className="flex-one text-2xl">{progress} / 20</h3>
          <div className="flex items-center">
            <p className="mr-2">Time: </p>
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
              {question.answerOptions.map((mc: string, i: number) => (
                <div className="" key={i}>
                  {multipleAnswer[i]}. {mc}
                </div>
              ))}
            </div>
          </div>
          <div className="lg:w-1/3 flex flex-col justify-between space-y-3">
            <p className="w-full">Choose your answer</p>
            <div className="space-x-3 w-full flex justify-between">
              {multipleAnswer.map((mc, key) => (
                <button
                  key={key}
                  className={`hover:bg-gray-300 px-8 w-full bg-gray-200 border-black text-gray-800 rounded-lg border bold ${
                    chosenAnswer == key &&
                    "bg-zinc-100 border-gray-500 text-gray-500"
                  }`}
                  onClick={() => handleChosenAnswer(key)}
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
                Last
              </button>
              <button
                className="border-black px-5 w-full rounded-lg border"
                onClick={nextQuestion}
              >
                Next
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
