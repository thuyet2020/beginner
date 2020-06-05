const Bootcamp=require('../models/Bootcamp');
const db=require('../config/db');
exports.getBootcamps=async (req,res,next)=>{
    try{
        const bootcamp= await Bootcamp.findById(req.params.id);
        res.status(200).json({ sucess:true, data:bootcamp});
        if(!bootcamp){
            return res.status(400).json({sucess:false});
        }
    } catch (err) { res.status(400).json({success:false});}
}
exports.createBootcamp=async (req,res,next)=>{
   // console.log(req.body);
   //conn.insertOne(Bootcamp);
  


  
   //const bootcamp = await Bootcamp.create(req.body);
 
    res.status(200).json({
        sucess:true, msg:"create bootcamp"
    });
}
exports.updateBootcamp=async (req,res,next)=>{
    const bootcamp= await Bootcamp.findByIdAndUpdate(req.params.id,req.body,{
        new:true,
        runValidators:true
    });
}