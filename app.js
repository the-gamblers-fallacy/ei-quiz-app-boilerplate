'use strict';

// const store = {
//   // 5 or more questions are required
//   questions: [
//     {
//       question: 'What color is broccoli?',
//       answers: [
//         'red',
//         'orange',
//         'pink',
//         'green'
//       ],
//       correctAnswer: 'green'
//     },
//     {
//       question: 'What is the current year?',
//       answers: [
//         '1970',
//         '2015',
//         '2019',
//         '2005'
//       ],
//       correctAnswer: '2019'
//     }
//   ],
//   quizStarted: false,
//   questionNumber: 0,
//   score: 0
// };

const questions = [
  {
    question: 'What question number are we on?',
    responses: ['1', '2', '3', '4'],
    correctResponse: '1'
  },
  {
    question: 'Okay, so NOW what question number are we on?',
    responses: ['1', '3', '5', '2'],
    correctResponse: '2'
  },
  {
    question: 'What question are we on if we we\'re zero indexed?',
    responses: ['2', '3', '1', '4'],
    correctResponse: '2'
  },
  {
    
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
