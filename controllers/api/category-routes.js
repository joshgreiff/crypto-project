const router = require('express').Router();
// const { Category } = require('../../models')


router.get('/', (req, res) => {
    res.json({name: 'category'})
    // Category.findAll()
        // .then(dbUserData => res.json(dbUserData))
        // .catch(err => {
        //     console.log(err);
        //     res.status(500).json(err);
        // });
})

// router.get('/:id', (req, res) => {


// })

// router.post('/,', (req, res) => {

//     Category.create({
//         question_text: req.body,
//         quiz_id: req.body
//     }).then(dbQuestionData => {
//         res.json(dbQuestionData)
//     }).catch(err => {
//         console.log(err)
//         res.status(500).json(err)
//     })

// })


module.exports = router
