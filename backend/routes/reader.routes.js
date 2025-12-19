const express=require('express');
const upload=require('../service/multer.service');
const router=express.Router();
const {
  getReaders,
  getReader,
  createReader,
  updateReaderProfile,
  deleteReader
} =require("../controllers/reader.controller");

const checkPermission=require("../middleware/permission.middlewareS");
const roleMiddleware=require("../middleware/role.middleware");
const authUser=require("../middleware/auth.middleware");


router.get(
    '/',
    roleMiddleware(['admin','reader','writer']),
    checkPermission('list_leaders'),
    getReaders
);

router.get(
    '/profile/:id',
    roleMiddleware(['admin','reader']),
    checkPermission('view_reader'),
    getReader
);

router.get(
    '/profile/:id',
    roleMiddleware(['admin','reader']),
    checkPermission('create_reader'),
    createReader
);

router.get(
    '/profile/:id',
    authUser,
    roleMiddleware(['admin','reader']),
    checkPermission('update_profile'),
    updateReaderProfile
);

router.get(
    '/profile/:id',
    authUser,
    roleMiddleware(['admin','reader']),
    checkPermission('deactivate_account'),
    deleteReader
);