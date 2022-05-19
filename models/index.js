// import models

const Category = require('./Category');
const Quiz = require('./Quiz')
const Question = require('./Question')
const Choice = require('./Choice')

const User = require('./User')

// // Categories have many quizzes 
Category.hasMany(Quiz)

// Quiz belongs to a category
Quiz.belongsTo(Category)


// Quizzes have many questions
Quiz.hasMany(Question)

// Question belongs to a quizzes
Question.belongsTo(Quiz)


// // Choices belongs to a question
Choice.belongsTo(Question)

// // Question have many choices
Question.hasMany(Choice)





module.exports = {
  Category,
  Quiz,
  Question,
  Choice,
  User
}
