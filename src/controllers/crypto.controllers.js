import Crypto from "../models/crypto.model.js";
import fetchCryptoData from "../services/crypto.services.js";

const getCryptoData = async (req, res) => {
    try {
        const { coin } = req.query;

        if(!coin){
            return res.status(400).json({ message: "Coin parameter is required!" });
        }

        const cryptoData = await Crypto.findOne({ coin });

        if(!cryptoData){
            return res.status(404).json({ message: "Crypto data not found!" });
        }

        return res.status(200).json({
            message: "Latest cryptocurrency data fetched successfully",
            data: cryptoData
        });
    }catch (error) {
        console.error("Error in getCryptoData controller:", error);
        return res.status(500).json({ error: "Failed to fetch data" });
    }
}

export default getCryptoData