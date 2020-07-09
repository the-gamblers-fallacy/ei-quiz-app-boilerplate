'use strict';
/* eslint-env jquery */
/* eslint no-console: "off" */

const store = {
  questions: [
    {
      question: 'How many planets are there?',
      responses: ['6', '7', '8', '9'],
      correctResponse: '8'
    },
    {
      question: 'What constellation features three stars forming something of a belt?',
      responses: ['Orion', 'Ursa Major', 'The Seven Sisters', 'The Moon'],
      correctResponse: 'Orion'
    },
    {
      question: 'How many times more massive is Saturn than Earth?',
      responses: ['83', '213', '95', '113'],
      correctResponse: '95'
    },
    {
      question: 'How long does it take the Earth to revolve around the sun?',
      responses: ['24 hours', '234 days', '89 hours', '365 days'],
      correctResponse: '365 days'
    },
    {
      question: 'What is the official name of our sun?',
      responses: ['Bob', 'Sol', 'The Sun', 'Icarus'],
      correctResponse: 'Sol'
    },
  ],
  currentQuestion: 0,
  numCorrect: 0,
  isCorrect: false
};


/********** TEMPLATE GENERATION FUNCTIONS **********/
// These functions return HTML templates

function startPage() {
  return $(`
    <div>
      <h1>Welcome to our Astronomy Questionnaire!<h1>
      <p>In this quiz, you'll be asked a series of astronomy questions. Do your best!</p>
      <form>
        <button type="submit">Get Started!</button>
      </form>
    </div>
  `);
}

function quizQuestion(quizObj) {  
  return $(`
    <p>Q: ${quizObj.question}</p>
    <form>
      <button>${quizObj.responses[0]}</button>
      <button>${quizObj.responses[1]}</button>
      <button>${quizObj.responses[2]}</button>
      <button>${quizObj.responses[3]}</button>
    </form>
  `);
}

function sayCorrect() {
  return $(`
    <div>
      <p>You got that question ${store.isCorrect ? 'correct!' : 'wrong!'}.
        You're current score is ${store.numCorrect}.</p>
      <form>
        <button>Next Question</button>
      </form>
    </div>
  `);
}

function endPage() {
  const quizGrade = store.numCorrect / store.questions.length * 100;
  
  return $(`
    <div>
      <h2>Good Job!</h2>
      <p>You got ${store.numCorrect} correct out of ${store.questions.length}, that's ${quizGrade}%</p>
      <form>
        <button type="submit">Restart</button>
      </form>
    </div>
  `);
}

// function generateQuizQuestion(questions, questionIndex) {

// }

/********** RENDER FUNCTION(S) **********/
// This function conditionally replaces the contents of the <main> tag based on the state of the store

function renderQuizApp(jQueryObj) {
  $('main').html(jQueryObj);
}

/********** EVENT HANDLER FUNCTIONS **********/

// function trackQuestionAndCorrect() {
//   let currentQuestionNum = 0;
//   let currentCorrectNum = 0;
  
  
  
//   return {
//     getCurrentQuestion() {
//       return currentQuestionNum;
//     }
//   }
// }

// These functions handle events (submit, click, etc)

/********** EVENT HANDLER FUNCTIONS **********/
// These functions handle events (submit, click, etc)

function handleQuizApp(){
  renderQuizApp(endPage());
}

$(handleQuizApp);
