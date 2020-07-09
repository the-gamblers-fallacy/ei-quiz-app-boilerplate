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
    {
      question: 'What nation was the first to send a human into space?',
      responses: ['Russia', 'China', 'The United States', 'Soviet Union'],
      correctResponse: 'Soviet Union'
    }
  ],
  currentQuestion: 0,
  numCorrect: 0,
  isCorrect: false
};


/********** TEMPLATE GENERATION FUNCTIONS **********/
// These functions return HTML templates

function startPage() {
  return $(`
    <div class="start-page group wrapper">
      <h1>Welcome to our Astronomy Questionnaire!<h1>
      <p>In this quiz, you'll be asked a series of astronomy questions. Do your best!</p>
      <form>
        <button class="start-btn" type="submit">Get Started!</button>
      </form>
    </div>
  `);
}

function quizQuestion(quizObj) {  
  return $(`
    <div class="question wrapper">  
      <p>Q: ${quizObj.question}</p>
      <form class="group">
        <button class="choice item" value="${quizObj.responses[0]}">${quizObj.responses[0]}</button>
        <button class="choice item" value="${quizObj.responses[1]}">${quizObj.responses[1]}</button>
        <button class="choice item" value="${quizObj.responses[2]}">${quizObj.responses[2]}</button>
        <button class="choice item" value="${quizObj.responses[3]}">${quizObj.responses[3]}</button>
      </form>
      <p>You're on question ${store.currentQuestion + 1} of ${store.questions.length}</p>
    </div>
  `);
}

function sayCorrect() {
  return $(`
    <div class="wrapper">
      <p>
        You got that question ${store.isCorrect ? 'correct!' : 'wrong!'}
        The correct answer was ${store.questions[store.currentQuestion].correctResponse}
      </p>
      <form>
        <button class="next-button" type="submit">Next Question</button>
      </form>
      <p>You're current score is ${store.numCorrect}</p>
    </div>
  `);
}

function endPage() {
  const quizGrade = Math.round(store.numCorrect / store.questions.length * 100);
  
  return $(`
    <div class="wrapper">
      <h2>Good Job!</h2>
      <img src="https://media.giphy.com/media/xT0xeJpnrWC4XWblEk/giphy.gif" alt="mind blown gif">
      <p>You got ${store.numCorrect} correct out of ${store.questions.length}, that's ${quizGrade}%</p>
      <form>
        <button class="restart-button" type="submit">Restart</button>
      </form>
    </div>
  `);
}


/********** RENDER FUNCTION(S) **********/
// This function conditionally replaces the contents of the <main> tag based on the state of the store

function renderQuizApp(jQueryObj) {
  $('main').html(jQueryObj);
}

/********** EVENT HANDLER FUNCTIONS **********/
//These functions handle events for all buttons in the application
  
function handleStartButton() {
  $('main').on('click', '.start-btn', function(evt) {
    evt.preventDefault();
    renderQuizApp(quizQuestion(store.questions[store.currentQuestion]));
  });
}

function handleSayCorrect(){
  $('main').on('click', '.next-button', function(evt){
    evt.preventDefault();
    store.currentQuestion += 1;
    if(store.currentQuestion < store.questions.length){
      renderQuizApp(quizQuestion(store.questions[store.currentQuestion]));
    } else if (store.currentQuestion === store.questions.length){
      renderQuizApp(endPage());
    }
  });
}

function handleQuizButtons() {
  $('main').on('click', '.choice', function(evt) {
    evt.preventDefault();
    
    let userResponse = $(this).val();
    if (userResponse === store.questions[store.currentQuestion].correctResponse){
      store.isCorrect = true;
      store.numCorrect += 1;
      renderQuizApp(sayCorrect());
    } else{
      store.isCorrect = false;
      renderQuizApp(sayCorrect());
    }
    
  });
}

function handleEndPage(){
  $('main').on('click', '.restart-button', function(evt) {
    evt.preventDefault();

    store.currentQuestion = 0;
    store.numCorrect = 0;
    renderQuizApp(startPage());
  });
}

/********** MAIN FUNCTION **********/
// This function handles initial page rendering and event listeners

function handleQuizApp(){
  renderQuizApp(startPage());
  handleStartButton();
  handleSayCorrect();
  handleQuizButtons();
  handleEndPage();
}

$(handleQuizApp);
