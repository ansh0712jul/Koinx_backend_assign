import Crypto from "../models/crypto.model.js";


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

export const getPriceDeviation = async (req, res) => {
    try{
        const { coin } = req.query;
         
        if(!coin){
            return res.status(400).json({ message: "Coin parameter is required!" });
        }

        const cryptoData = await Crypto.find({ coin }).sort({ createdAt: -1 }).limit(100);

        if(!cryptoData || cryptoData.length === 0){
            return res.status(404).json({ message: "Crypto data not found!" });
        }

        const prices = cryptoData.map(data => data.price);
        const sum_of_prices = prices.reduce((acc,price) => acc + price,0)
        const average = sum_of_prices / prices.length;

        const variance = prices.reduce((acc,price) => acc + Math.pow(price - average,2),0)/prices.length;

        const deviation = Math.sqrt(variance);

        return res.status(200).json({
            data:{
                coin,
                deviation
            }
        })
    }catch(error){
        console.error("Error in getPriceDeviation controller:", error);
        return res.status(500).json({ error: "Failed to calculate deviation" });
    }

}

export default getCryptoData