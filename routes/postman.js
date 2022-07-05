const express=require("express");
const {login,obj}=require("../controllers/postman.js")

const router=express.Router();

router.post("/login",login);
router.post("/obj",obj);

module.exports =router; 