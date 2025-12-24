import express from "express";
const router = express.Router();  
import upload from "../service/multer.service.js";


import {
  getCreator,
  updateCreatorProfile,
  deleteCreator
} from "../controllers/creator.controller.js";

import {checkPermission} from "../middleware/permission.middleware.js";
import {roleMiddleware} from "../middleware/role.middleware.js";
import {authUser} from "../middleware/auth.middleware.js";



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

export default router;