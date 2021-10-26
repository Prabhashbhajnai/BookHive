// importing env variables
require("dotenv").config();

// Libraries
import express from "express";
import cors from "cors";
import helmet from "helmet";

// microservice routes
import Auth from "./API/Auth";

// Database connection
import ConnectDB from "./Database/connection";

const elibrary = express();

// application middlewares
elibrary.use(express.json());
elibrary.use(express.urlencoded({extended: false}));
elibrary.use(helmet());
elibrary.use(cors());

// Application Routes
elibrary.use("/auth", Auth)

elibrary.get("/", (req, res) => res.json({message: "Setup Success"}));

elibrary.listen(4000, () => 
    ConnectDB()
        .then(() => console.log("Server is Running!!"))
        .catch(() => console.log("Server is running, but connection failed!!"))
);