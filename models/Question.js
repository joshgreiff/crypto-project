<<<<<<< HEAD
const { Model, DataTypes } = require("sequelize");

const sequelize = require('../config/connection.js');
const router = require("../controllers/api/user-routes.js");
const Choice = require("./Choice.js");

class Question extends Model {}

Question.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        question_text: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        quiz_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'quiz',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'question'
    }
)

router.post("/api/question", async (req, res) => {
    req.body = {
        quiz_id: 1,
        question: "words",
        choice_one: {
            text: "answer 1",
            correct: false
        },
        choice_two: {
            text: "answer 2",
            correct: false
        },
        choice_three: {
            text: "answer 3",
            correct: true

        },choice_four: {
            text: "answer 4",
            correct: false
        },
    }
    const question = await Question.create({questionText: req.body.question, quizId: req.body.quiz_id})
    const choiceOne = await Choice.create({choiceText: req.body.choice_one.text, questionId: question.id, correct: req.body.choice_one.false})
    const choiceTwo = await Choice.create({choiceText: req.body.choice_two.text, questionId: question.id, correct: req.body.choice_two.false})
    const choiceThree = await Choice.create({choiceText: req.body.choice_three.text, questionId: question.id, correct: req.body.choice_three.true})
    const choiceFour = await Choice.create({choiceText: req.body.choice_four.text, questionId: question.id, correct: req.body.choice_four.false})
}
)

=======
const { Model, DataTypes } = require("sequelize");

const sequelize = require('../config/connection.js');

class Question extends Model { }

Question.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        question_text: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        quiz_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'quiz',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'question'
    }
)

>>>>>>> 7e7e565d1b9ce6c58c88e564dcaf7bb6c5737b32
module.exports = Question