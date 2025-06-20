const flashcards = [
  {
    question: "O que é JavaScript?",
    answer:
      "JavaScript é uma linguagem de programação interpretada e orientada a objetos, usada principalmente para adicionar interatividade e dinamismo a páginas web.",
  },
  {
    question: "O que são funções de callback em JavaScript?",
    answer:
      "São funções passadas como argumento para outra função, que serão executadas após um determinado evento ou operação.",
  },
  {
    question: "O que é o this em JavaScript?",
    answer:
      "this se refere ao contexto de execução atual. Seu valor varia dependendo de como a função é chamada.",
  },
  {
    question: "O que é hoisting em JavaScript?",
    answer:
      'Hoisting é o comportamento em que declarações de variáveis e funções são "movidas" para o topo do escopo durante a fase de compilação. Isso faz com que seja possível usar uma função antes de sua definição no código.',
  },
  {
    question: "O que são tipos primitivos em JavaScript?",
    answer:
      "Os tipos primitivos em JavaScript são: String, Number, Boolean, Null, Undefined, BigInt e Symbol. Eles representam valores imutáveis e não são objetos.",
  },
];

let currentIndex = 0;

function updateCard() {
  const cardContent = document.getElementById("title-card");
  const cardItem = document.getElementById("card-item");
  const counter = document.getElementById("counter");

  if (cardItem.classList.contains("card-revelead")) {
    cardItem.classList.remove("card-revelead");
  }

  cardContent.innerText = flashcards[currentIndex].question;

  counter.innerText = `Card ${currentIndex + 1} de ${flashcards.length}`;
}

function handleCard() {
  //Pega o Span e guarda na variavel
  const cardContent = document.getElementById("title-card");
  //Pega o Card inteiro e guarda na variavel
  const cardItem = document.getElementById("card-item");
  const button = document.getElementById("btnNextQuestion");
  cardContent.innerText = flashcards[currentIndex].question;
  cardItem.addEventListener("click", () => {
    cardItem.classList.add("card-revelead");
    cardContent.innerText = flashcards[currentIndex].answer;
  });

  button.addEventListener("click", () => {
    currentIndex++;
    if (currentIndex === flashcards.length) {
      currentIndex = 0;
    }
    updateCard();
  });
}

handleCard();
