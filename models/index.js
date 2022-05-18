const Question = require('./Question')
const Category = require('./Category')
const

    Question.belongsTo(Category, {
        foreignKey: 'category_id'
    });

Category.hasMany(Question, {
    foreignKey: 'category_id'
})
module.exports = { Question, Category, Choices, Quiz };