import {
  getContents,
  getContent,
  createContent,
  updateContent,
  deleteContent,
} from "./content.controller";

import {
  getReaders,
  getReader,
  createReader,
  updateReaderProfile,
  updateReader,
  deleteReader,
} from "./reader.controller";

import {
  getCreators,
  getCreator,
  createCreator,
  updateCreatorProfile,
  updateCreator,
  deleteCreator,
} from "./creator.controller.js";

import { 
    registerUser,
    oauthSuccess,
    refreshToken,
    verifyEmail,
    loginUser,
    logoutUser,
    profileUser,
    oauthSuccess
} from "./auth.controller.js"


export {
    getContents, getContent, createContent, updateContent, deleteContent,
    getReaders, getReader, createReader, updateReaderProfile, updateReader, deleteReader,
    getCreators, getCreator, createCreator, updateCreatorProfile, updateCreator, deleteCreator,
    registerUser, oauthSuccess, refreshToken, verifyEmail, loginUser, logoutUser, profileUser, oauthSuccess
}