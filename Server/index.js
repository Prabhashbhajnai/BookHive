import express from "express";
import cors from "cors";
import helmet from "helmet";

const elibrary = express();

// application middlewares
elibrary.use(express.json());
elibrary.use(express.urlencoded({extended: false}));
elibrary.use(helmet());
elibrary.use(cors());

elibrary.get("/", (req, res) => res.json({message: "Setup Success"}));

elibrary.listen(4000, () => console.log("Server is Running"));