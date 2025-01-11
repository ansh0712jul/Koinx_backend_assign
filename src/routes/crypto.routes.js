import express from "express"
import getCryptoData from "../controllers/crypto.controllers.js";

const router = express.Router();


router.get("/stats", getCryptoData);


export default router