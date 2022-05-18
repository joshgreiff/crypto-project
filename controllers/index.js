const router = require('express').Router();
<<<<<<< HEAD


=======
>>>>>>> 6f46e9ac4b8dc4cdf61fce6ed87006e4b17dc5ed
const apiRoutes = require('./api');

router.use('/api', apiRoutes);

<<<<<<< HEAD
module.exports = router
=======
router.use((req, res) => {
  res.send("<h1>Wrong Route!</h1>")
});

module.exports = router;  
>>>>>>> 6f46e9ac4b8dc4cdf61fce6ed87006e4b17dc5ed
