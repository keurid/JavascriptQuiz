var questions = [
    {
    numb: 1,
    question: "Which is not a JavaScript Data Type?",
    answer: "Hoolean",
    options: [
      "Number",
      "String",
      "Object",
      "Hoolean"
    ]
  },
    {
    numb: 2,
    question: "Which company developed JavaScript?",
    answer: "Netscape",
    options: [
      "Java",
      "Mojang",
      "Oracle",
      "Netscape"
    ]
  },
    {
    numb: 3,
    question: "Which is not a type of Pop up box?",
    answer: "Caution",
    options: [
      "Prompt",
      "Confirm",
      "Alert",
      "Caution"
    ]
  },
    {
    numb: 4,
    question: "Which is not a type of error?",
    answer: "Screentime Error",
    options: [
      "Screentime Error",
      "Load time errors",
      "Runtime errors",
      "Logical errors"
    ]
  },
    {
    numb: 5,
    question: "Which is not a Loop?",
    answer: "infinite loop",
    options: [
      "for loop",
      "while loop",
      "do…while loop",
      "infinite loop"
    ]
  },
];

const start_btn = document.querySelector(".start_btn button");
const info_box = document.querySelector(".info_box");
const exit_btn = info_box.querySelector(".buttons .quit");
const continue_btn = info_box.querySelector(".buttons .restart");
const quiz_box = document.querySelector(".quiz_box");
const result_box = document.querySelector(".result_box");
const option_list = document.querySelector(".option_list");
const time_line = document.querySelector("header .time_line");
const timeText = document.querySelector(".timer .time_left_txt");
const timeCount = document.querySelector(".timer .timer_sec");

start_btn.onclick = ()=>{
    info_box.classList.add("activeInfo");
}

exit_btn.onclick = ()=>{
    info_box.classList.remove("activeInfo");
}

continue_btn.onclick = ()=>{
    info_box.classList.remove("activeInfo");
    quiz_box.classList.add("activeQuiz");
    showQuestions(0);
    queCounter(1);
    startTimer(15);
    startTimerLine(0);
}

var timeValue = 15;
var que_count = 0;
var que_numb = 1;
var userScore = 0;
var counter;
var counterLine;
var widthValue= 0;

const restart_quiz = result_box.querySelector(".buttons . restart");
const quit_quiz = result_box.querySelector(".buttons .quit")

