const express = require('express')
const mongoose = require('mongoose');
const {reader_Schema} = require('../schemas/reader.schema');

export const readerModel = mongoose.model('readerModel', reader_Schema,'reader');
