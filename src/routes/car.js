"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
const router = require('express').Router()
/* ------------------------------------------------------- */
// routes/car:

const car = require('../controllers/car')
const permissions=require("../middlewares/permissions")

const upload=require("../middlewares/upload")

// URL: /cars


router.route('/')
    .get(car.list)
    // .post(permissions.isStaff, car.create)
    .post(permissions.isStaff, car.create)

router.route('/:id')
    .get(car.read)
    .put(permissions.isStaff, upload.array("images"), car.update)
    .patch(permissions.isStaff, car.update)
    .delete(permissions.isAdmin, car.delete)

/* ------------------------------------------------------- */
module.exports = router