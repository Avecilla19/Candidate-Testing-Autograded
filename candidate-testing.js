const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = "";
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer = "";


//TODO: Variables for Part 2
let questions = [
  'Who was the first American woman in space? ', 
  "True or false: 5 kilometer == 5000 meters? ", 
  "(5 + 3)/2 * 10 = ? ", 
  "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ", 
  "What is the minimum crew size for the ISS? " ]
let correctAnswers = [
  'Sally Ride',
  'true',
  '40',
  'Trajectory',
  "3"]
let candidateAnswers = [];


function askForName() {
  // TODO 1.1b: Ask for candidate's name //
  //const input = require('readline-sync');
  
  let name = input.question("Hello, What is your name? ");
  candidateName = name;
}
  
function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
  for (let i = 0; i < questions.length; i++) {
    candidateAnswer = input.question(questions[i]);
    candidateAnswers.push(candidateAnswer);
  
    /*questions = input.question(questions[i], `Enter your answer: `);
     candidateAnswers.push(candidateAnswers);*/
    }
}

function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
 let totalScore = 0;
  for (let i = 0; i<candidateAnswers.length; i++){
    if (candidateAnswers[i].toUpperCase() === correctAnswers[i].toUpperCase()){
      totalScore++;
    } 
    
    /*else {
      console.log(`Incorrect answer.`)
    }*/
  }
  let grade =(totalScore * 20);  //TODO 3.2 use this variable to calculate the candidates score.


  return grade;
}

function runProgram() {
  askForName();
  // TODO 1.1c: Greet candidate using their name //
   console.log("Good evening " + candidateName);
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// ----------- Don't write any code or change any code below this line ---------- //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};