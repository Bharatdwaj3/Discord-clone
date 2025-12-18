const express = require('express')
const mongoose = require('mongoose');
const contentSchema = require('../schemas/content.schema');

const contentModel = mongoose.model('contentModel', contentSchema,'content');
module.exports=contentModel;