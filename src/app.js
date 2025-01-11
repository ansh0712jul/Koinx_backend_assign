import express from "express";
import morgan from "morgan";



// creates an express app
const app = express();


// other middlewares
app.use(morgan('dev'));
app.use(express.json({limit: "16kb"}));
app.use(express.urlencoded({
    extended: true,
    limit: "16kb"
}))
app.use(express.static("public"))



// import routes using import
import cryptoRoutes from "./routes/crypto.routes.js"



// declare routes
app.use("/api/v1/crypto", cryptoRoutes)


export default app;