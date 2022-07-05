const logger=(req,res,next)=>{
    const method=req.method;
    const param=req.params;
    const url=req.url;
    const time=new Date().getFullYear();
    console.log(method,url,time,param);
    next();
}

module.exports=logger;

