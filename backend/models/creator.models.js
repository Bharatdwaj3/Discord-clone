const express = require('express')
const mongoose = require('mongoose');
const {creator_Schema} = require('../schemas/creator.schema');

export const creatorModel = mongoose.model('creatorModel', creator_Schema,'creator');
