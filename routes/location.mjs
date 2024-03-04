import express from 'express';
import db from '../db/conn.mjs';
import { ObjectId } from 'mongodb';
const router = express.Router();
let collection = await db.collection("location");


//Get all route
router.get('/', async (req, res) => {
    let collection = await db.collection('location');
    let result = await collection.find({}).limit(10).toArray();
    res.json(result);
  });


  //Get using query commands(Employee ID) to retrieve the data from the database 
  router.get('/:id', async (req, res) => {
    let collection = await db.collection('location');
    let query = { _id: new ObjectId(req.params.id) };
    let result = await collection.findOne(query);
  
    if (!result) res.status(404).send('Not found');
    else res.send(result).status(200);
  });
  
    //Create POST new Location

    router.post('/', async (req, res) => {
        let collection = await db.collection('location');
        let newDocument = req.body;
           
        let result = await collection.insertOne(newDocument);
        if (!result) res.status(404).send('Not found');
        else 
        res.json(result).status(201);
      });
        //Update a Location_id PATCH
      router.patch('/location/:locatinN', async (req, res) => {
 
        let query = { locationno: Number(req.params.locatinN) };
      
        let result = await collection.updateMany(query, {
          $set: { locationno: req.body.locationno },
        });
      
        console.log(result)
        if (result.upsertedCount === 0 ) res.status(404).send('Not found');
        else res.json(result).status(200);
      });
export default router;