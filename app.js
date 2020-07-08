'use strict';
/* eslint-env jquery */
/* eslint no-console: "off" */

const questions = [
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
  }
];


/********** TEMPLATE GENERATION FUNCTIONS **********/
// These functions return HTML templates



/********** RENDER FUNCTION(S) **********/
// This function conditionally replaces the contents of the <main> tag based on the state of the store


/********** EVENT HANDLER FUNCTIONS **********/
// These functions handle events (submit, click, etc)

function handleQuizApp(){
  renderStartPage();
  renderQuizApp();
  trackQuestionAndCorrect();
}

$(handleQuizApp);