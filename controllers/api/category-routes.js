const router = require('express').Router();
const { Category, Quiz } = require('../../models')


router.get('/', (req, res) => {
    Category.findAll()
        .then(dbUserData => res.json(dbUserData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
})

router.get('/:id', (req, res) => {
    Category.findOne({
        where: {
            id: req.params.id   
        },
        include: [
            {
              model: Quiz,
              attributes: ['id', 'quiz_name']
            },
          ]
    })
        .then(dbUserData => res.json(dbUserData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
})

router.post('/', (req, res) => {

    Category.create({
        category_name: req.body.category_name
    }).then(dbCategoryData => {
        res.json(dbCategoryData)
    }).catch(err => {
        console.log(err)
        res.status(500).json(err)
    })

})


module.exports = router
