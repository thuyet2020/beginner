const http=require('http');
const express=require('express');
const dotenv=require('dotenv');
const logger=require('./middleware/logger');
const morgan=require('morgan');
const colors=require('colors');

//const colors=require('colors');
const connectDB=require('./config/db');
const todos= [
   { id1:1, text: 'hello' },
    { id2:2, text: 'greet'}
];
/*const server=http.createServer((req,res)=>{
    const {method,url}=req;
    let body=[];
    req
    .on('data', chunk=>{
        body.push(chunk);
    })
    .on('end',()=>{
        body=Buffer.concat(body).toString();
       let status=404;
       const response= {
        success:false,
        data:null
       }
    if (method==='GET' && url==='/todos')
    {
        status=200;
        response.success=true;
        response.data=todos;
    }

     res.writeHead(status,{
         'Content-type':'application/json'
     // res.end('<strong> hello </strong');
      });
   //console.log(req.headers.authorization);
    res.end(
        JSON.stringify(response)
    );
});
});
*/ 
//route files
const bootcamps=require('./routes/bootcamps');
const auth=require('./routes/auth');

// LOAD ENV VARS
dotenv.config({path: './config/config.env'});

//connect to database
//connectDB();
const app=express();
//body parser
app.use(express.json());
//dev logging middleware
if (process.env.NODE_ENV==='development')
{
    app.use(morgan('dev'));
}
app.use(logger);
// mouth routers
app.use('/api/v1/bootcamps',bootcamps);
app.use('/api/v1/auth',auth);
const PORT=process.env.PORT||5000;
//const PORT=5000;
const server=app.listen(
    PORT,
    console.log(`server is ${process.env.NODE_ENV} and port ${PORT}`.yellow.bold)
    );
//handle unhandled promise rejections
process.on('unhandledRejection',(err,promise)=>{
    console.log(`Error: ${err.message}`);
    //close server and exit process
    server.close(()=>process.exit(1));
});
    
