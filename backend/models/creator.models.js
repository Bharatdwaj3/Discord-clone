const express = require('express')
const mongoose = require('mongoose');
const creatorSchema = require('../schemas/creator.schema');

const creatorModel = mongoose.model('creatorModel', creatorSchema,'creator');
module.exports=creatorModel;