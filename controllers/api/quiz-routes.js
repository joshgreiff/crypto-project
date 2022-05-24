const router = require('express').Router();
const { Quiz, Question, Choice, User } = require('../../models')


router.get('/', (req, res) => {
    Quiz.findAll()
        .then(dbUserData => res.json(dbUserData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
})





router.get('/:id', (req, res) => {
    Quiz.findOne({
        attributes: ['id', 'quiz_name'],
        where: {
            id: req.params.id
        },
        include: [
            {
                model: Question,
                attributes: ['id', 'question_text'],
                include: {
                    model: Choice,
                    attributes: ['answer_text']
                }
            },
            // {
            //   model: User,
            //   attributes: ['id', 'username']
            // }
        ]
    })

        .then(dbUserData => res.json(dbUserData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
})

router.post('/', (req, res) => {

    Quiz.create({
    }).then(dbQuizData => {
        const questions = [{ 'question_text': 'what questions' },
        { 'question_text': 'what questions12' }]

        for (var i = 0; i < questions.length; i++) {
            let questionObj = {
                id: dbQuizData.id,
                quiz_name: dbQuizData.quiz_name
            }
            questions.push(questionObj)
        }

        console.log(questions)

        Question.bulkCreate(questions, { returning: true })
            .then(dbQuestion => {
                console.log(dbQuestion)
            });
        //question_text bulk create pass through relevant data
        // .then bulk create for choices
    }).catch(err => {
        console.log(err)
        res.status(500).json(err)
    })

})


module.exports = router
