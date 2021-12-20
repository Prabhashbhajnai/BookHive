// Libraries
import express from "express";
import passport from "passport";

// Database model
import { TermendModel } from "../../Database/allModels";

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
        // await ValidateMenuId(req.params);

        const { _id } = req.params;
        const papers = await TermendModel.findById(_id);

        return res.json({ papers });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

export default Router;
