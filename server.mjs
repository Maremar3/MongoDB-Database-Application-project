import express from 'express'
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import empeRouter from './routes/emp.mjs';
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;
await mongoose.connect(process.env.MONGO_URI);

//Middleware
app.use(express.json());

//MAIN ROUTES
app.get('/',(req,res)=>{
    res.send("WE ARE AN EMPLOYEE");
  })
  app.use('/emp', empeRouter);

// Global error handling
app.use((err, _req, res, next) => {
  res.status(500).send('Seems like we messed up somewhere...');
});

app.listen(PORT,()=>{
 console.log('server listenong to port 3000');
})