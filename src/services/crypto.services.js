import axios from "axios";
import Crypto from "../models/crypto.model.js";

// fn to fetch crypto data
const fetchCryptoData = async () =>{
    try{
        const response = await axios.get(`${process.env.COINX_API_KEY}/coins/markets`, {
            params: {
              vs_currency: 'usd',  
              ids: 'bitcoin,ethereum,matic-network',  
            },
          });

          const data = response.data;
          for(const crypto of data){
            const newCrypto = new Crypto({
                coin:crypto.id,
                price:crypto.current_price,
                marketCap:crypto.market_cap,
                change24h:crypto.price_change_percentage_24h
            });
            // save data db
            await newCrypto.save();
          }
          console.log("data fetched successfully");        
    
    }catch(error){
        console.log("Error in fetching crypto data",error);

    }
}

export default fetchCryptoData;