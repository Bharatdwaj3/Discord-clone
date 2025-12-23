const express = require('express')
const mongoose = require('mongoose');
const {contentSchema} = require('../schemas/content.schema');

export const contentModel = mongoose.model('contentModel', contentSchema,'content');
