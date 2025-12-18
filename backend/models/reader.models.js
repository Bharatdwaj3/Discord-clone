const express = require('express')
const mongoose = require('mongoose');
const readerSchema = require('../schemas/reader.schema');

const readerModel = mongoose.model('readerModel', readerSchema,'reader');
module.exports=readerModel;