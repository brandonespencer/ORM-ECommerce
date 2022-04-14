const router = require('express').Router();
const apiRoutes = require('./api');

router.use('/api', apiRoutes);

router.use((_req, res) => {
  res.send("<h1>bad Route!</h1>")
});

module.exports = router;
