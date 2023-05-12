const { createRendomNumber, createRandomUser } = require('./controller');
const router = require('express').Router();

router.get('/health' , (_req,res) => res.status(200).json({"messgae" : "API health is okay"}));
router.get('/random-value' , createRendomNumber)
router.post('/random-user' , createRandomUser  )

module.exports = router;