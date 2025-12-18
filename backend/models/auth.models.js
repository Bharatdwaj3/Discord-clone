const express = require('express')
const mongoose = require('mongoose');
const authSchema = require('../schemas/auth.schema');

const authModel = mongoose.model('authModel', authSchema,'auth');
module.exports=authModel;