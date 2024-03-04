import express from 'express';
import db from '../db/conn.mjs';

const router = express.Router();
let collection = await db.collection("location");

export default router;