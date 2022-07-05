const quotes=require("../data.js");

const productSingle=(req,res)=>{ 
    const{productTel}=req.params;
    const newData=quotes.find((fil)=>fil.tel==Number(productTel));
    if(!newData){
        return res.status(404).send("<h1>Product does not exist</h1>");
    }
    res.send(newData);
}

const productAbout=(req,res)=>{
    res.send('<h1>Welcome to About</h1> <a href="./product/:productTel"> Get data </a>')
}

module.exports={productAbout,productSingle};