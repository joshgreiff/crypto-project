const router = require('express').Router()
const { Quiz, Question, Choice } = require('../models')

router.get('/', (req, res) => {
  console.log(req.session)
  Quiz.findAll({
    attributes: ['id', 'quiz_name'],
    
    include: [
        {
          model: Question,
          attributes: ['id', 'question_text'],
          include: {
            model: Choice,
            attributes: ['answer_text']
          }
        }
      ]
})
    
    .then(dbPostData => {
      const quizzes = dbPostData.map(quiz => quiz.get({ plain: true }));
      
        res.render('homepage', { quizzes })
    }
    )
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
})

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  
  res.render('login')
})

router.get('/create-quiz', (req, res) => {
  res.render('create-quiz')
})

module.exports = router