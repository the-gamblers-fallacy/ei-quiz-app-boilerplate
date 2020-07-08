'use strict';

/**
 * Example store structure
 */
const store = {
  // 5 or more questions are required
  questions: [
    {
      question: 'What color is broccoli?',
      answers: [
        'red',
        'orange',
        'pink',
        'green'
      ],
      correctAnswer: 'green'
    },
    {
      question: 'What is the current year?',
      answers: [
        '1970',
        '2015',
        '2019',
        '2005'
      ],
      correctAnswer: '2019'
    }
  ],
  quizStarted: false,
  questionNumber: 0,
  score: 0
};

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
    responses: ['430 days', '234 days', '89 hours', '365 days'],
    correctResponse: '365 days'
  },
  {
    question: 'What is the official name of our sun?',
    responses: ['Bob', 'Sol', 'The Sun', 'Icarus'],
    correctResponse: 'Sol'
  }
];

/**
 * 
 * Technical requirements:
 * 
 * Your app should include a render() function, that regenerates the view each time the store is updated. 
 * See your course material, consult your instructor, and reference the slides for more details.
 *
 * NO additional HTML elements should be added to the index.html file.
 *
 * You may add attributes (classes, ids, etc) to the existing HTML elements, or link stylesheets or additional scripts if necessary
 *
 * SEE BELOW FOR THE CATEGORIES OF THE TYPES OF FUNCTIONS YOU WILL BE CREATING 👇
 * 
 */

/********** TEMPLATE GENERATION FUNCTIONS **********/

// These functions return HTML templates

/********** RENDER FUNCTION(S) **********/

// This function conditionally replaces the contents of the <main> tag based on the state of the store

/********** EVENT HANDLER FUNCTIONS **********/

// These functions handle events (submit, click, etc)
