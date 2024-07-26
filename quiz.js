const quiz = [
  {
    question: "석현철은 무엇인가?",
    choices: ["바보", "근돼", "천재", "사람"],
    answer: 3,
  },
  {
    question: "재정상태가 부유해지면 어떤 일이 발생될까?",
    choices: ["불행해진다", "가족과의 사이가 틀어진다", "똥파리가 꼬인다", "진정한 자유를 획득한다"],
    answer: 3,
  },
  {
    question: "파이는 무엇을 나타내는 수?",
    choices: ["3.14", "애플 파2", "사과 파2", "파2리"],
    answer: 0,
  },
  {
    question: "지구에서 가장 큰 대륙은?",
    choices: ["아시아", "아프리카", "북아메리카", "남아메리카"],
    answer: 0,
  },
];

let currentQuestionIndex = 0;

function startQuiz() {
  document.getElementById("startScreen").style.display = "none";
  showQuestion();
}

function showQuestion() {
  const questionElement = document.getElementById("question");
  const choiceButtons = document.getElementsByClassName("choice");
  questionElement.textContent = quiz[currentQuestionIndex].question;
  for (let i = 0; i < choiceButtons.length; i++) {
    choiceButtons[i].textContent = quiz[currentQuestionIndex].choices[i];
    choiceButtons[i].disabled = false;
  }
  document.getElementById("nextBtn").style.display = "none";
}

function selectAnswer(choice) {
  const choiceButtons = document.getElementsByClassName("choice");
  for (let i = 0; i < choiceButtons.length; i++) {
    choiceButtons[i].disabled = true;
  }
  if (choice === quiz[currentQuestionIndex].answer) {
    alert("정답입니다!");
  } else {
    alert("오답입니다.");
  }
  document.getElementById("nextBtn").style.display = "inline";
}

function nextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex < quiz.length) {
    showQuestion();
  } else {
    alert("퀴즈가 끝났습니다!");
    currentQuestionIndex = 0; // 다시 시작하려면 주석을 해제
    showQuestion();
  }
}

// 첫 번째 문제를 보여줍니다.
// showQuestion();
