import express from 'express';
import mongoose from 'mongoose';
import {chatSchema} from '../schemas/chat.schema.js';

export const chatModel = mongoose.model('chatModel', chatSchema,'chat');
