import express from 'express';
import mongoose from 'mongoose';
import {user_Schema} from '../schemas/user.schema.js';

export const userModel = mongoose.model('userModel', user_Schema,'user');