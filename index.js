var readlineSync=require('readline-sync');
var score=0;
console.log("COUNTRY's CAPITAL QUIZ");
console.log("******");
console.log("NOTE:-every correct answer fetch you 1 mark.");
console.log("*******");
var userName=readlineSync.question("what is your name?");

console.log("welcome to the quiz",userName);
console.log("********");

// declared function.
function play(question,answer){
  var userAnswer=readlineSync.question(question);
  if(userAnswer.toUpperCase()===answer.toUpperCase()){
    console.log(" you are right!!");
    score=score+1;
  }else{
    console.log(" you are wrong!!");
  }
  console.log("score is:",score);
  console.log("--------");
}
// declared array of question.
var questionList=[
  questionOne={
    question:"what is capital of FRANCE?",
    answer:"PARIS"
  },
  questionTwo={
    question:"what is capital of AUSTRIA?",
    answer:"VIENNA"
  },
  questionThree={
    question:"what is capitol of NEW ZEALAND?",
    answer: "WELLINGTON"
  },
  questionFour={
    question: "what is capital of BANGLADESH?",
    answer:"DHAKA"
  },
   questionFive={
    question: "what is capital of RUSSIA?",
    answer:"MOSCOW"
  },
   questionSix={
    question: "what is capital of KENYA?",
    answer:"NAIROBI"
  },
   questionSeven={
    question: "what is capital of HUNGRY?",
    answer:"BUDAPEST"
  },
   questionEight={
    question: "what is capital of GERMANY?",
    answer:"BERLIN"
  },
   questionNine={
    question: "what is capital of ENGLAND?",
    answer:"LONDON"
  },
   questionTen={
    question: "what is capital of JAPAN ?",
    answer:"TOKYO"
  },
    question11={
    question: "what is capital of SWEDEN ?",
    answer:"STOCKHOLM"
  },
    question12={
    question: "what is capital of NEATHERLANDS ?",
    answer:"AMSTERDAM"
  },
    question13={
    question: "what is capital of VIETNAM ?",
    answer:"HANOI"
  },
    question14={
    question: "what is capital of SPAIN ?",
    answer:"MADRID"
  },
    question15={
    question: "what is capital of NEPAL ?",
    answer:"KATHMANDU"
  }
]
// declred loop for accessing questions.
for ( i=0;i<questionList.length;i++){
  var response=questionList[i];
  play(response.question,response.answer);
}

console.log("okay your total score is:",score);