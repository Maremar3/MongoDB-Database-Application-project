import express from 'express';
import db from '../db/conn.mjs';
import { ObjectId } from 'mongodb';
const router = express.Router();
let collection = await db.collection("department");

//Get all route
router.get('/', async (req, res) => {
    let collection = await db.collection('department');
    let result = await collection.find({}).limit(10).toArray();
    res.json(result);
  });


  //Get using query commands(Employee ID) to retrieve the data from the database 
  router.get('/:id', async (req, res) => {
    let collection = await db.collection('department');
    let query = { _id: new ObjectId(req.params.id) };
    let result = await collection.findOne(query);
  
    if (!result) res.status(404).send('Not found');
    else res.send(result).status(200);
  });
  
    //Create POST new Departent

router.post('/', async (req, res) => {
    let collection = await db.collection('department');
    // let newDocument = req.body;
       
    // let result = await collection.insertOne(newDocument);
    let newDocument = departmentdata.json;
       
    let result = await collection.insertMany(newDocument);
    if (!result) res.status(404).send('Not found');
    else 
    res.json(result).status(201);
  });

 //PATCH to update any field value , but you have to execute  (get)employee by ID
 router.patch('/:id', async (req, res) => {
  const updates=req.body
  if(ObjectId.isValid(req.params.id)){   
      db.collection('department')  
       .updateOne({_id:new ObjectId(req.params.id)},{$set: updates})
    .then(result=>{
     res.status(200).json(result)
    })
    .catch(err=>{res.status(500).json({error:'DID NOT UPDATE'}) })
  }
   else{res.status(500).json({error:'NOT A VALID DOC ID'})}
   
   })

//DELETE to delete any document , but you have to execute  (get)employee by ID

router.delete('/:id', async (req, res) => {
 if(ObjectId.isValid(req.params.id)){
   db.collection('department')
   .deleteOne({_id:new ObjectId(req.params.id)})
  .then(result=>{
   res.status(200).json(result)
  })
  .catch(err=>{
   res.status(500).json({error:'DID NOT DELETE'})
  })
 }else{
   res.status(500).json({error:'NOT A VALID DOC ID'})
 }
;
});
    
  
export default router;