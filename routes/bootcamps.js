const express=require('express');
const {getBootcamps,createBootcamp}=require('../controller/bootcamps');
const router=express.Router();

router
.route('/')
.get(getBootcamps)
.post(createBootcamp)

module.exports=router;