const quotes=require("../data.js")

const login=(req,res)=>{
    const{name}=req.body;
    console.log(req.body);
    if(!name){
        return res.status(400).json({success:false,msg:"provide name"});
    }
     res.status(200).send(`Welcome to this site ${name}`);
}

const obj=(req,res)=>{
    const{name}=req.body;
    if(!name){
        return res.status(400).json({success:false,msg:"provide name"});
    }
    res.status(200).json({success:true,data:[...quotes,name]})
}

module.exports={login,obj}