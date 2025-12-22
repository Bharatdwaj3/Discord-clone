import {
  getCreator,
  updateCreatorProfile,
  deleteCreator
} from "../controllers/creator.controller.js";

import {
  getContents,
  getContent,
  createContent,
  updateContent,
  deleteContent
} from "../controllers/content.controller.js";

import {
  getReaders,
  getReader,
  createReader,
  updateReaderProfile,
  deleteReader
} from "../controllers/reader.controller.js";


export {
    getCreator, updateCreatorProfile, deleteCreator,
    getContents, getContent, createContent, updateContent, deleteContent,
    getReaders, getReader, createReader, updateReaderProfile, deleteReader
}