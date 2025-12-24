const express = require('express')
const mongoose = require('mongoose');
const {chatSchema} = require('../schemas/content.schema');

export const chatModel = mongoose.model('chatModel', chatSchema,'chat');
