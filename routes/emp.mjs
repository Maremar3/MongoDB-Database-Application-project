import express from 'express';
import db from '../db/conn.mjs';

const router = express.Router();
let collection = await db.collection("emp");

  let result = await collection.aggregate([
    {
        $set: {"id": 20}
                }
            ])

// db.emp.aggregate( [
//     { $set: { "id": 20 } }
//   ] )

export default router;