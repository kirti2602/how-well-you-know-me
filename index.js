let readlineSync = require("readline-sync");

const chalk = require('chalk');

let score = 0;

// data of high score
let highScores = [
  {
    name: "Kirti",
    score: 4,
  },

  {
    name: "Karan",
    score: 3,
  },
]

// array of objects
let questions = [{
  question: "Where do I live? ",
  answer: "Ghaziabad"
}, {
  question: "When is my Birthday? ",
  answer: "2 June"
},

{
  question: "My favorite anime would be? ",
  answer: "One Piece"
},
{
  question: "Where do I study? ",
  answer: "EIT"
}
];

function welcome() {
 let userName = readlineSync.question(("What's your name? "));

  console.log("Welcome "+ chalk.cyanBright(userName) + " to DO YOU KNOW " + chalk.bold(" Kirti ") + "?");
}


// play function
function play(question, answer) {
  let userAnswer = readlineSync.question(chalk.yellowBright(question));

  if (userAnswer.toUpperCase() === answer.toUpperCase()) { 
    console.log(chalk.green("✅ right ✅"));
    score = score + 1;
    
  } else {
    console.log(chalk.red("❌ wrong ❌"));
   
  }

  console.log(chalk.black.bgWhite.bold ("current score: ", score));
  console.log("-------------")
}

function game() {
  for (let i=0; i<questions.length; i++) {
    let currentQuestion = questions[i];
    play(currentQuestion.question, currentQuestion.answer)
  }
}

function showScores() {
  console.log(' ')
  console.log("YAY! You SCORED: ", score);
  console.log(' ')
  console.log(chalk.green("Check out the Leaderboard"));

  highScores.map(score => console.log(score.name, " : ", score.score))
}


welcome();
game();
showScores();
