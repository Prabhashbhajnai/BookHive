// Libraries
import express from "express";
import passport from "passport";

// Database model
import { MidsemModel } from "../../Database/allModels";

const Router = express.Router();

/* 
    Route:          /list
    Description:    Get all menu based on id 
    Params:         _id
    Access:         Public
    Method :        GET
*/
Router.get("/list/:_id", async (req, res) => {
    try {

        const { _id } = req.params;
        const papers = await MidsemModel.findById(_id);

        return res.json({ papers });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

export default Router;
