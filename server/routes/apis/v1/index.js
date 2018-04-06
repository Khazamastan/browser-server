'use strict';

const
    express = require('express'),
    browsersController = require('../../../controllers/apis/browserList');

let router = express.Router();

router.use('/browserList', browsersController);

module.exports = router;