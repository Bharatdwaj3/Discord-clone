const express=require('express');
const upload=require('../service/multer.service');
const router=express.Router();

const {
  getCreator,
  updateCreatorProfile,
  deleteCreator
} =require("../controllers/creator.controller");

const checkPermission=require("../middleware/permission.middlewareS");
const roleMiddleware=require("../middleware/role.middleware");
const authUser=require("../middleware/auth.middleware");



router.get(
    '/profile/:id',
    roleMiddleware(['admin','creator']),
    checkPermission('view_profile'),
    getCreator
);

router.get(
    '/profile/:id',
    upload.single('image'),
    authUser,
    roleMiddleware(['admin','reader']),
    checkPermission('edit_profile'),
    updateCreatorProfile
);

router.get(
    '/profile/:id',
    authUser,
    roleMiddleware(['admin','reader']),
    checkPermission('deactivate_account'),
    deleteCreator
);