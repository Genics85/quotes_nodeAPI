const express=require("express");
const quotes=require("../data.js");

const {productAbout,productSingle}=require("../controllers/products.js")
const router=express.Router();

router.get("/about",productAbout);
router.get("/:productTel",productSingle);

module.exports=router; 