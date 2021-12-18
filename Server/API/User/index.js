// Libraries
import express from "express";
import passport from "passport";

// Database modal
import { UserModel } from "../../Database/allModels";

const Router = express.Router();

/*
Route     /
Des       Get user data
Params    _id
BODY      none
Access    Public
Method    GET  
*/
Router.get("/", passport.authenticate("jwt"), async (req, res) => {
    try {
        const { email, fullname } =
            req.session.passport.user._doc;

        return res.json({ user: { email, fullname } });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

/*
Route     /:_id
Des       Get User data
Params    _id
Body      none
Access    Public
Method    GET  
*/
Router.get("/:_id", async (req, res) => {
    try {
        const user = await UserModel.findById(req.params._id);
        const { fullname } = user;

        return res.json({ user: { fullname } });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});


/*
Route     /update/:_id
Des       Update User id
Params    _id
Body      user data
Access    Public
Method    PUT  
*/
Router.put("/update/:_id", async (req, res) => {
    try {
        const { _id } = req.params;
        const { userData } = req.body;
        const updateUserData = await UserModel.findByIdAndUpdate(
            { _id },
            {
                $set: userData,
            },
            { new: true }
        );

        return res.json({ user: updateUserData });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

export default Router