import cron from "node-cron"
import fetchCryptoData from "./crypto.services.js"

cron.schedule("0 */2 * * *", async () => {
    console.log("fetching data...")
    await fetchCryptoData()
})

