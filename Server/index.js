// importing env variables
require("dotenv").config();

// Libraries
import express from "express";
import cors from "cors";
import helmet from "helmet";
import passport from "passport";

// configs
import googleAuthConfig from "./config/google.config";
import routeConfig from "./config/route.config";

// microservice routes
import Auth from "./API/Auth";
import Books from "./API/Books";
import Bookupload from "./API/S3upload";
import Teachers from "./API/Teacher";
import Review from "./API/review";
import User from "./API/User";
import QuesPaper from "./API/Question paper";
import Termend from "./API/Termend";
import Midsem from "./API/Midsem";

// Database connection
import ConnectDB from "./Database/connection";

const elibrary = express();

// application middlewares
elibrary.use(express.json());
elibrary.use(express.urlencoded({extended: false}));
elibrary.use(helmet());
elibrary.use(cors());
elibrary.use(passport.initialize());
elibrary.use(passport.session());

// passport configuration
googleAuthConfig(passport);
routeConfig(passport);

// Application Routes
elibrary.use("/auth", Auth);
elibrary.use("/books", Books);
elibrary.use("/upload", Bookupload);
elibrary.use("/teachers", Teachers);
elibrary.use("/reviews", Review);
elibrary.use("/user", User);
elibrary.use("/quespaper", QuesPaper);
elibrary.use("/midsem", Midsem);
elibrary.use("/termend", Termend);

elibrary.get("/", (req, res) => res.json({message: "Setup Success"}));

elibrary.listen(4000, () => 
    ConnectDB()
        .then(() => console.log("Server is Running!!"))
        .catch(() => console.log("Server is running, but connection failed!!"))
);