// Libraries
import express from "express";
import passport from "passport";

// Database Model
import {BookModel} from "../../Database/allModels";

const Router = express.Router();

/* 
    Route:          /
    Description:    Get books based on category
    Params:         none
    Access:         Public
    Method :        GET
*/
Router.get("/", async (req, res) => {
    try {
        const {category} = req.query;
        const books = await BookModel.find({category});

        return res.json({books});
    } catch (error) {
        return res.status(500).json({error: error.message});
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
        const {_id} = req.params;
        const book = await BookModel.findOne(_id);
        if(!book) 
            return res.statusMessage(404).json({error: "Book Not Found"});
       
        return res.json({book});
    } catch (error) {
        return res.statusMessage(500).json({error: error.message});  
    }
});

/* 
    Route:          /new
    Description:    add new restaurant
    Params:         none
    Access:         Private
    Method :        POST
*/
Router.post("/new", passport.authenticate("jwt"), async (req, res) => {
    try {
      const newBook = await BookModel.create(req.body.bookData);
      return res.json({ Book: newBook });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
});

export default Router;