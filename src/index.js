import app from "./app.js";
import connectDB from "./db/index.js";

// connecting to Database
connectDB()
.then(() =>{
    const port = process.env.PORT || 8088 ;
    app.listen(3000, () => {
        console.log(`🥳🥳Server is running on port ${port}`);
    })
})
.catch((error) =>{
    console.log("MongoDb connection error ",error);
})