import express from 'express'
import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;
await mongoose.connect(process.env.MONGO_URI);

//Middleware
app.use(express.json());

//MAIN ROUTES
app.get('/',(req,res)=>{
    res.send("We are EMPLOYEE");
  })

app.listen(PORT,()=>{
 console.log('server listenong to port 3000');
})