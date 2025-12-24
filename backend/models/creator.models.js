import express from 'express';
import mongoose from 'mongoose';
import {creator_Schema} from '../schemas/creator.schema.js';

export const creatorModel = mongoose.model('creatorModel', creator_Schema,'creator');
