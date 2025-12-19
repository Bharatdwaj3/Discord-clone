const express=require('express');
const upload=require('../service/multer.service');
const router=express.Router();
const {
  getContents,
  getContent,
  createContent,
  updateContent,
  deleteContent
} =require("../controllers/creator.controller");

const checkPermission=require("../middleware/permission.middlewareS");
const roleMiddleware=require("../middleware/role.middleware");
const authUser=require("../middleware/auth.middleware");

router.get(
    '/',
    roleMiddleware(['admin','reader','creator']),
    checkPermission('list_contents'),
    getContents
);

router.get(
    '/profile/:id',
    roleMiddleware(['admin','reader','creator']),
    checkPermission('list_Content'),
    getContent
);

router.get(
    '/profile/:id',
    roleMiddleware(['creator']),
    checkPermission('create_content'),
    createContent
);

router.get(
    '/profile/:id',
    authUser,upload.single('image'),
    roleMiddleware(['creator']),
    checkPermission('update_content'),
    updateContent
);

router.get(
    '/profile/:id',
    authUser,
    roleMiddleware(['admin','creator']),
    checkPermission('update_profile'),
    updateContentProfile
);

router.get(
    '/profile/:id',
    authUser,
    roleMiddleware(['admin','creator']),
    checkPermission('deactivate_account'),
    deleteContent
);