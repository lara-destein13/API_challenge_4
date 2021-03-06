console.log('hello Lara');
var question1 = {
  question: 'The condition in an if/else statement is enclosed with ______.',
  answers: [
    '1. quotes',
    '2. curly brackets',
    '3. parenthesis',
    '4. square brackets',
  ],
  correct: 1,
};

var question2 = {
  question: 'Arrays in JavaScript can be used to store ______.',
  answers: [
    '1. numbers and strings',
    '2. other arrays',
    '3. booleans',
    '4. all of the above',
  ],
  correct: 3,
};

var question3 = {
  question: 'String values must be enclosed within ______ when being assigned to variables.',
  answers: [
    '1. commas',
    '2. curly brackets',
    '3. quotes',
    '4. parenthesis',
  ],
  correct: 2, 
};

var question4 = {
  question4: 'Commonly used data types DO Not include',
  answers: [
    '1. strings',
    '2. booleans',
    '3. alerts',
    '4. numbers',
  ],
  correct: 1,
};

var question5 = {
  question5: 'A very useful tool used during development and debugging for printing content to the debugger is:',
  answers: [
    '1. JavaScript',
    '2. terminal/bash',
    '3. for loops',
    '4. console.log',
  ],
  correct: 2,
};

var allQuestions = [
  question1,
  question2,
  question3,
  question4,
  question5,
];

for (var i = 0; i < allQuestions.length; i++){
  var question = allQuestions[i]
  var questionString = JSON.stringify(question, null, 4);
  console.log(questionString)
}