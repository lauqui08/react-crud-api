const express = require('express');

const router = express.Router();
const Person = require('../models/Person');
const {displayAll, displaySingleData, createData, patchData, deleteData} = require('../controllers/apiController');

//display all data
router.get('/',displayAll);

//display single data
router.get('/:id',displaySingleData);

//create new data
router.post('/',createData);

//patch data
router.patch('/:id',patchData);

//delete data
router.delete('/:id',deleteData);

module.exports = router;