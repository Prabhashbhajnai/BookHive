// Libraries
import express from "express";
import passport from "passport";
import multer from "multer";

// Database Model
import { BookModel } from "../../Database/allModels";

// Utilities
import { s3Upload } from "../../Utils/s3";

const Router = express.Router();

// Multer Config
const storage = multer.memoryStorage();
const upload = multer({ storage });


/* 
    Route:          /
    Description:    Get books based on category
    Params:         none
    Access:         Public
    Method :        GET
*/
Router.get("/", async (req, res) => {
    try {
        const { genre } = req.query;
        const books = await BookModel.find({ genre });

        return res.json({ books });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

/* 
    Route:          /:_id
    Description:    Get individual book based on id
    Params:         id
    Access:         Public
    Method :        GET
*/
Router.get("/:_id", async (req, res) => {
    try {
        const { _id } = req.params;
        const books = await BookModel.findById(_id);
        if (!books)
            return res.status(404).json({ error: "Book Not Found" });

        return res.json({ books });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

/* 
    Route:          /new
    Description:    add new book
    Params:         none
    Access:         Private
    Method :        POST
*/
Router.post("/new", passport.authenticate("jwt"), async (req, res) => {
    try {
        const newBook = await BookModel.create(req.body.bookData);
        return res.json({ books: newBook });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

export default Router;