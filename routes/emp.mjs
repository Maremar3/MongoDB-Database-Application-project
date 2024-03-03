import express from 'express';
import db from '../db/conn.mjs';

const router = express.Router();
let collection = await db.collection("emp");

export default router;