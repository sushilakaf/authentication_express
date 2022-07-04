const express = require('express'),
router=express.Router(),
{
    signup,
    signin
}=require('../controller/auth.controller.js');

router.post("/register",signup,function(req,res){

});
router.post('/login',signin,function(req,res){

});
module.exports=router;
