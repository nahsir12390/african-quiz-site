const questions = [
    {
      question: "What is the local name for motorbike taxis in Nigeria?",
      options: ["Keke", "Boda-boda", " Okada", "Bajaj"],
      answer: 3
    },
    {
      question: "What is the currency of Ghana?",
      options: ["Cedi", " Naira", " Shilling", "Rand"],
      answer: 1
    },
    {
      question: "What is the capital of Nigeria?",
      options: ["Lagos", "Abuja", "Kano", "Ibadan"],
      answer: 1
    }, 
      
    {
      question: "What is Nigeria’s unofficial national food?",
      options: ["Egusi Soup", "Jollof Rice", "Akara", "Pounded Yam"],
      answer: 2
    },
    {
      question: "What’s the best way to communicate with a fish?",
      options: ["Use a megaphone", "Drop them a line", "Speak whale", " Send a bubble-mail"],
      answer: 2
    },
    {
      question: "Which country is known as the Giant of Africa?",
      options: ["Ghana", " South Africa", "Nigeria", " Kenya"],
      answer: 3
    },
    {
      question: "What animal is featured on the Nigerian coat of arms?",
      options: ["Lion", "Elephant", "Horse", "  Eagle"],
      answer: 4
    },
    {
      question: "Which Nigerian musician is known as the Afrobeat Legend?",
      options: ["Burna Boy", "Fela Kuti", "2Baba", "Wizkid"],
      answer: 2
    },
    {
      question: "What is the Yoruba name for a troublesome person?",
      options: [" Alaseju", "Oloshi", "Wahala", " Oloriburuku"],
      answer: 1
    },
    {
      question: "Which African country is the largest producer of cocoa?",
      options: ["Ghana", "Ivory Coast", "Nigeria", "Cameroon"],
      answer: 2
    },
    {
      question: "What is the most common reason people in Nigeria refuse to eat snail?",
      options: [" It’s expensive", "Religious beliefs", "They say it looks slimy", "It’s rare to find"],
      answer: 3
    },
    {
      question: "What is the capital of Tanzania?",
      options: [" Nairobi", "Dodoma", "Dar es Salaam", " Kampala"],
      answer: 2
    },
    {
      question: "Which river is the longest in Africa?",
      options: ["  River Niger", "River Zambezi", " River Congo", " River Nile"],
      answer: 4
    },
    {
      question: "In Nigeria, what is a common way to call someone without saying their name?",
      options: [" Clap your hands", "Hiss loudly", "Snap your fingers", `Say "You!"`],
      answer: 2
    },
    {
      question: "What is the highest mountain in Africa?",
      options: ["Mount Kenya", "Mount Kilimanjaro", "Mount Atlas", "Mount Cameroon"],
      answer: 3
    },
    {
      question: "What do Nigerians often say when NEPA restores electricity?",
      options: ["It’s a miracle!", "Up NEPA!", "Finally!", "Praise the Lord!"],
      answer: 2
    },
    {
      question: "Which African country has the most pyramids?",
      options: ["Egypt", "Sudan", "Ethiopia", "Morocco"],
      answer: 2
    },
    {
      question: "What is a common Nigerian slang for a stubborn person?",
      options: ["Ajebutter", "Hard Guy", "Oga", "Strong Head"],
      answer: 4
    },
    {
      question: "What is the traditional Yoruba attire for men called?",
      options: ["Dashiki", "Agbada", "Buba", "Isi Agu"],
      answer: 2
    },
    {
      question: "What do Nigerians commonly call someone who pretends to know everything?",
      options: ["JJC", "Ogasir", "ITK (I Too Know)", "Bros Boss"],
      answer: 2
    },

  ];
  const letters = ["A", "B", "C", "D"]
  let currentQuestionIndex = 0;
  let score = 0;
  
  const questionElement = document.getElementById("question");
  const answersElement = document.getElementById("answers");
  const nextButton = document.getElementById("next-btn");
  const resultElement = document.getElementById("result");
  const scoreElement = document.getElementById("score");
  const restartButton = document.getElementById("restart-btn");
  
  function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    answersElement.innerHTML = "";
  
    currentQuestion.options.forEach((option, index) => {
      const button = document.createElement("button");
      button.textContent = option;
      button.classList.add("answer");
      button.textContent = `${letters[index]}. ${option}`;
      button.addEventListener("click", () => selectAnswer(index));
      button.classList.add("answer");
      answersElement.appendChild(button);
    });
  
    nextButton.disabled = true;
  }
  
  function selectAnswer(selectedIndex) {
    const correctIndex = questions[currentQuestionIndex].answer;
  
    Array.from(answersElement.children).forEach((button, index) => {
      button.disabled = true;
      if (index === correctIndex) {
        button.style.backgroundColor = "green";
      } else if (index === selectedIndex) {
        button.style.backgroundColor = "red";
      }
    });
  
    if (selectedIndex === correctIndex) {
      score++;
    }
    nextButton.disabled = false;
  }
  
  function showResult() {
    quiz.style.display = "none";
    resultElement.classList.remove("hidden");
    scoreElement.textContent = `${score} / ${questions.length}`;
  }
  
  function restartQuiz() {
    score = 0;
    currentQuestionIndex = 0;
    resultElement.classList.add("hidden");
    quiz.style.display = "block";
    loadQuestion();
  }
  
  nextButton.addEventListener("click", () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      loadQuestion();
    } else {
      showResult();
    }
  });
  
  restartButton.addEventListener("click", restartQuiz);
  
 
  loadQuestion();
  