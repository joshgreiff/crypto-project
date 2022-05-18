// import models

const Category = require('./Category');
const Quiz = require('./Quiz')
const Question = require('./Question')
const Choice = require('./Choice')

const User = require('./User')

// Quiz belongs to a category
// Quiz.belongsTo(Category, {
//     foreignKey: 'category_id'
// })

// Categories have many quizzes 
// Category.hasMany(Quiz, {
//     foreignKey: 'quiz_id'
// })

// Question belongs to a quizzes
// Question.belongsTo(Quiz, {
//     foreignKey: 'quiz_id'
// })

// Quizzes have many questions
// Quiz.hasMany(Question, {
//     foreignKey: 'quiz_id'
// })

// Choices belongs to a question
// Choice.belongsTo(Question, {
//     foreignKey: 'question_id'
// })

// Question have many choices
// Question.hasMany(Choice, {
//     foreignKey: 'choice_id'
// })



// Products belongsTo Category
// Product.belongsTo(Category, {
//   foreignKey: 'category_id'
// })

// Categories have many Products
// Category.hasMany(Product, {
//   foreignKey: 'product_id'
// })

// Products belongToMany Tags (through ProductTag)
// Product.belongsToMany(Tag, {
//   through: ProductTag,
//   as: 'tag',
//   foreignKey: 'product_id'
// })

// Tags belongToMany Products (through ProductTag)
// Tag.belongsToMany(Product, {
//   through: ProductTag,
//   as: 'product',
//   foreignKey: 'tag_id'
// })

module.exports = {
  Category,
  Quiz,
  Question,
  Choice,
  User
}
