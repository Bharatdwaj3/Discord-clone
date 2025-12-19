import {
  getCreator,
  updateCreatorProfile,
  deleteCreator
} from ("../controllers/creator.controller");

import {
  getContents,
  getContent,
  createContent,
  updateContent,
  deleteContent
} from ("../controllers/creator.controller");

import {
  getReaders,
  getReader,
  createReader,
  updateReaderProfile,
  deleteReader
} from ("../controllers/reader.controller");


export {
    getCreator, updateCreatorProfile, deleteCreator,
    getContents, getContent, createContent, updateContent, deleteContent,
    getReaders, getReader, createReader, updateReaderProfile, deleteReader
}