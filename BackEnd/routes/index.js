const router = require('express').Router();
const portfolio = require('./portfolio');

require('../DB/mongoConnection');

router.get('/', (req, res) => {
    res.json({
        sucess: false,
        message: 'Please, do not call /api, it is for our user'
    })
});

router.use('/portfolio', portfolio);

module.exports = router;