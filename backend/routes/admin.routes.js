import express from "express";
import upload from "../service/multer.service.js";
import router from express.Router();
import {
    getContents, getContent, createContent, updateContent, deleteContent,
    getReaders, getReader, createReader, updateReaderProfile, updateReader, deleteReader,
    getCreators, getCreator, createCreator, updateCreatorProfile, updateCreator, deleteCreator
} from "../controllers/index.js";

import checkPermission from "../middleware/permission.middleware.js";
import roleMiddleware from "../middleware/role.middleware.js";
import authUser from "../middleware/auth.middleware.js";

router.get('/',roleMiddleware(['admin','reader','creator']),checkPermission('list_contents'),getContents);
router.get( '/profile/:id',roleMiddleware(['admin','reader','creator']),checkPermission('list_Content'),getContent);
router.get('/profile/:id',roleMiddleware(['creator']),checkPermission('create_content'),createContent);
router.get('/profile/:id',authUser,upload.single('image'),roleMiddleware(['creator']),checkPermission('update_content'),updateContent);
router.get('/profile/:id',authUser,roleMiddleware(['admin','creator']),checkPermission('update_profile'),updateContentProfile);
router.get('/profile/:id',authUser,roleMiddleware(['admin','creator']),checkPermission('deactivate_account'),deleteContent);

router.get('/profile/:id',roleMiddleware(['admin','creator']),checkPermission('view_profile'),getCreator);
router.get('/profile/:id',upload.single('image'),authUser,roleMiddleware(['admin','reader']),checkPermission('edit_profile'),updateCreatorProfile);
router.get('/profile/:id',authUser,roleMiddleware(['admin','reader']),checkPermission('deactivate_account'),deleteCreator);


router.get('/',roleMiddleware(['admin','reader','writer']),checkPermission('list_leaders'),getReaders);
router.get('/profile/:id',roleMiddleware(['admin','reader']),checkPermission('view_reader'),getReader);
router.get('/profile/:id',roleMiddleware(['admin','reader']),checkPermission('create_reader'),createReader);
router.get('/profile/:id',authUser,roleMiddleware(['admin','reader']),checkPermission('update_profile'),updateReaderProfile);
router.get('/profile/:id',authUser,roleMiddleware(['admin','reader']),checkPermission('deactivate_account'),deleteReader);