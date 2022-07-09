const express=require("express");
const logger=require("./logger.js");
const productRouter=require("./routes/product.js");
const postmanRouter=require("./routes/postman.js");

const app=express();

app.use([logger,express.static("public")]);
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use("/product",productRouter)
app.use("/postman",postmanRouter)


let htmf=__dirname+"/public/index.html"

app.get("/",(req,res)=>{
    res.sendFile(htmf);
});

app.all("*",(req,res)=>{
    res.send("OOPS");
});

app.listen(process.env.PORT||5000,()=>{
    console.log("connected to port 5000"); 
}) 