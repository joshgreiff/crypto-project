const router = require('express').Router();
const { Quiz } = require('../../models')


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
        where: {
            id: req.params.id   
        }
    })
        .then(dbUserData => res.json(dbUserData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
})

router.post('/', (req, res) => {

    Quiz.create({
        quiz_name: req.body.quiz_name,
        category_id: req.body.category_id
    }).then(dbQuizData => {
        res.json(dbQuizData)
    }).catch(err => {
        console.log(err)
        res.status(500).json(err)
    })

})


module.exports = router