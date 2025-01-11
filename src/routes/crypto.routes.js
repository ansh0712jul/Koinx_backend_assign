import express from "express"
import getCryptoData from "../controllers/crypto.controllers.js";
import { getPriceDeviation } from "../controllers/crypto.controllers.js";

const router = express.Router();


router.get("/stats", getCryptoData);
router.get("/deviation", getPriceDeviation);


export default router