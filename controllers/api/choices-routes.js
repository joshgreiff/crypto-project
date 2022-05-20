const router = require('express').Router();
const { Choice } = require('../../models')


router.get('/', (req, res) => {
    Choice.findAll()
        .then(dbChoiceData => res.json(dbChoiceData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
})

router.get('/:id', (req, res) => {
    Choice.findOne({
        where: {
            id: req.params.id   
        }
    })
        .then(dbChoiceData => res.json(dbChoiceData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
})

router.post('/', (req, res) => {

    Choice.create({
        answer_text: req.body.answer_text,
        question_id: req.body.question_id,
        isTrue: req.body.isTrue
    }).then(dbChoiceData => {
        res.json(dbChoiceData)
    }).catch(err => {
        console.log(err)
        res.status(500).json(err)
    })

})


module.exports = router
