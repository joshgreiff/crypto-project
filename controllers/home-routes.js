const router = require('express').Router()
const { Quiz, Question, Choice, User } = require('../models')

// Import the custom middleware
// const withAuth = require('../utils/auth');


router.get('/', async (req, res) => {

  try {
    const dbPostData = await Quiz.findAll()
    const quizzes = dbPostData.map(quiz => quiz.get({ plain: true }));

    res.render('homepage', { quizzes, loggedIn: req.session.loggedIn })

  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});






router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login', { loggedIn: req.session.loggedIn })
})

router.get('/create-quiz', (req, res) => {
  res.render('create-quiz')
})

router.get('/quiz/:id', async (req, res) => {

  try {
    const dbQuestions = await Quiz.findOne(
      {
        where: { id: req.params.id },
        include: [{
          model: Question,
          attributes: ['id', 'question_text'],
          include: [{
            model: Choice,
            attributes: ['answer_text']
          }]
        }]
      }
    )
    const questions = dbQuestions.toJSON()
    res.render('quiz-view', { questions, loggedIn: req.session.loggedIn })


  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }

})

router.get('/question/:id', async (req, res) => {

  try {
    const dbPostData = await Question.findAll({ where: { id: req.params.id } });
    const choices = dbPostData.map(choice => choice.get({ plain: true }));

    res.render('question-view', { choices, loggedIn: req.session.loggedIn })

  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }

})


// Quiz.findOne({
//   attributes: ['id', 'quiz_name'],
//   where: {
//     id: req.params.id
//   },
//   include: [
//     {
//       model: Question,
//       attributes: ['id', 'question_text'],
//       include: {
//         model: Choice,
//         attributes: ['answer_text']
//       }
//     },
//     {
//       model: User,
//       attributes: ['id', 'username']
//     }
//   ]
// }).then(dbQuizData => {
//   if (!dbQuizData) {
//     res.status(404).json({ message: 'No post found with this id' });
//     return;
//   }

//   // serialize the data
//   const quiz = dbQuizData.get({ plain: true });
//   console.log(quiz)
//   // pass data to template
//   res.render('quiz-view', { quiz, loggedIn: req.session.loggedIn });
// })
//   .catch(err => {
//     console.log(err);
//     res.status(500).json(err);
//   });



module.exports = router