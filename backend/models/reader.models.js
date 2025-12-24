import express from 'express';
import mongoose from 'mongoose';
import {reader_Schema} from '../schemas/reader.schema.js';

export const readerModel = mongoose.model('readerModel', reader_Schema,'reader');
