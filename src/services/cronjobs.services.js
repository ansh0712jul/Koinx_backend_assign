import cron from "node-cron"
import fetchCryptoData from "./crypto.services.js"

cron.schedule("*/1 * * * *", async () => {
    console.log("fetching data...")
    await fetchCryptoData()
})

