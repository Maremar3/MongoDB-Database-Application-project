import express from 'express';
import db from '../db/conn.mjs';
import { ObjectId } from 'mongodb';
const router = express.Router();
let collection = await db.collection("emp");


//Get all route
router.get('/', async (req, res) => {
    let collection = await db.collection('emp');
    let result = await collection.find({}).limit(10).toArray();
    res.json(result);
  });


  //Get using query commands(Employee ID) to retrieve the data from the database 
  router.get('/:id', async (req, res) => {
    let collection = await db.collection('emp');
    let query = { _id: new ObjectId(req.params.id) };
    let result = await collection.findOne(query);
  
    if (!result) res.status(404).send('Not found');
    else res.send(result).status(200);
  });
  
  
export default router;