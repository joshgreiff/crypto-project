const router = require('express').Router();
const { Question, Choice } = require('../../models')



router.get('/', (req, res) => {
    Question.findAll()
        .then(dbQuestionData => res.json(dbQuestionData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
})

router.get('/:id', (req, res) => {
    Question.findOne({
        where: {
            id: req.params.id
        },
        include: [
            {
                model: Choice,
                attributes: ['answer_text']
            }

        ]
    })
        .then(dbQuestionData => res.json(dbQuestionData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
})
// Quiz.findOne({
//     attributes: ['id', 'quiz_name'],
//     where: {
//         id: req.params.id
//     },
//     include: [
//         {
//             model: Question,
//             attributes: ['id', 'question_text'],
//             include: {
//                 model: Choice,
//                 attributes: ['answer_text']
//             }
//         },
// {
//   model: User,
//   attributes: ['id', 'username']
// }
//]

router.post('/', (req, res) => {

    Question.create({
        question_text: req.body.question_text,
        quiz_id: req.body.quiz_id
    }).then(dbQuestionData => {
        res.json(dbQuestionData)
    }).catch(err => {
        console.log(err)
        res.status(500).json(err)
    })

})


module.exports = router