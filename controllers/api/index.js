const router = require('express').Router();
const categoryRoutes = require('./category-routes')
const choicesRoutes = require('./');
const questionRoutes = require('./question-routes');
const quizRoutes = require('./quiz-routes');
const userRoutes = require('./user-routes');

router.use('/categories', categoryRoutes);
router.use('/choices', choicesRoutes);
router.use('/questions', questionRoutes);
router.use('/quizRoutes', quizRoutes);
router.use('/users', userRoutes);

module.exports = router;
