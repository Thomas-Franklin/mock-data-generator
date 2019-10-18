const express = require('express');
const router = express.Router();
const randomController = require('../controllers/random-controller')
const generateController = require('../controllers/generate-controller')
const { catchErrors } = require('../handlers/error-handler');

router.get('/random/data', catchErrors(randomController.random))

router.get('/generated/data/:type', catchErrors(generateController.generatedData))

router.post('/generate/data/:type', catchErrors(generateController.generateData))

module.exports = router;

