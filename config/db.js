const mongoose=require('mongoose');


const connectDB= async()=>{
    const conn=await mongoose.connect('mongodb://127.0.0.1:27017/devcamper',
{   useNewUrlParser:true,
    useUnifiedTopology: true 
});

  //const db=mongoose.connection;
  //var dbo = db.db("devcamper");


db.on('error',console.error.bind(console,'MongoDB connection error'));
db.once('open', function(){
    console.log("Successfully connected to MongoDB!");
});

}
module.exports=connectDB;