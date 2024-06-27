"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
// Middleware: upload
// npm i multer

// Multer: UploadFile:
// https://expressjs.com/en/resources/middleware/multer.html
const multer = require('multer');
const path = require('path');

// Define the storage location for uploaded files
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, '/tmp'); // Use the /tmp directory
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname);
    }
});

// Create the multer instance
const upload = multer({ storage: storage });

module.exports = upload;