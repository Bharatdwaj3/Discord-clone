import express from 'express';
import mongoose from 'mongoose';
import {content_Schema} from '../schemas/content.schema.js';

export const contentModel = mongoose.model('contentModel', content_Schema,'content');
