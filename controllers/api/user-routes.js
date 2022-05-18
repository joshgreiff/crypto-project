const router = require('express').Router();
const bcrypt = require('bcrypt')
const { User } = require('../../models')

// find all users
router.get('/', (req, res) => {
    
    User.findAll()
        .then(dbUserData => res.json(dbUserData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
})

// router.get('/:id', (req, res) => {


// })

// create user route
router.post('/signup', (req, res) => {
    const saltRounds = 10;
    
    bcrypt.hash(req.body.password, saltRounds, function(err, hash) {
        User.create({
            username: req.body.username,
            password: hash
        }).then(dbUserData => {
            res.json(dbUserData)
        }).catch(err => {
            console.log(err)
            res.status(500).json(err)
        })
    });
})

// login route
router.post('/login/:id', (req, res) => {
    //1. Find a user by id
    //2. inside then, test if user passwrod is correct using bcrypt validator
    //3. start a session for this user info, 
    
    User.findAll()
    .then(dbUserData => res.json(dbUserData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
    

})


module.exports = router
