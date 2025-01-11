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



// declare routes


export default app;