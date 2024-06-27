"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
const router = require('express').Router()
/* ------------------------------------------------------- */
// routes/car:

const car = require('../controllers/car')
const permissions=require("../middlewares/permissions")

// const upload=require("../middlewares/upload")

// const multer =require("multer")
// const upload=multer({
//     //dest:"./uploads"
//     storage: multer.diskStorage({
//         destination:"./uploads", 
//         filename:function(req, file, returnCallback){
//             returnCallback(null, "mesut.jpg")
//         }

//        })
// })

// URL: /cars


router.route('/')
    .get(car.list)
    // .post(permissions.isStaff, car.create)
    .post(permissions.isStaff, car.create)
    // .post(permissions.isStaff, upload.array("images") , car.create)
    // .post(permissions.isStaff, upload.any() , car.create)

router.route('/:id')
    .get(car.read)
    .put(permissions.isStaff, car.update)
    .patch(permissions.isStaff, car.update)
    .delete(permissions.isAdmin, car.delete)

/* ------------------------------------------------------- */
module.exports = router