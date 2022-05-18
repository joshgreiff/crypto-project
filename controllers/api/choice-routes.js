const router = require('express').Router();
const { Choice } = require('../../models')


router.get('/', (req, res) => {
    Choice.findAll()
        .then(dbUserData => res.json(dbUserData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
})

router.post('/,', (req, res) => {

    Question.create({
        question_text: req.body,
        quiz_id: req.body
    }).then(dbQuestionData => {
        res.json(dbQuestionData)
    }).catch(err => {
        console.log(err)
        res.status(500).json(err)
    })

})

module.exports = router