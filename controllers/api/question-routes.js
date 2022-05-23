const router = require('express').Router();
const { Question } = require('../../models')


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
        }
    })
        .then(dbQuestionData => res.json(dbQuestionData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
})

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
