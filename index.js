
const express = require("express");
require("dotenv").config();
 app = express();
 const db= require('./src/config/database.js')
const userRoutes=require('./src/routes/auth.routes.js');



 app.use(express.json());//parse request of content type-authentication
 app.use(express.urlencoded({//parse request of content type- application
extended:true
 }));
 app.use('/auth',userRoutes);
 
 //step server to listen on the port 3000
 app.listen(process.env.PORT || 3000,()=>{
  console.log("server is live on port 3000");
 });