// Library
import express from 'express';
import passport from 'passport';

// Models
import {UserModel} from '../../Database/user'

const Router = express.Router();

/* 
    Route:          /signup
    Description:    Register New User
    Params:         none
    Access:         Public
    Method :        Post
*/
Router.post("/signup", async (req, res) => {
    try {
        await UserModel.findByEmail(req.body.credentials);
        // save to DB
        const newUser = await UserModel.create(req.body.credentials);
        // generate JWT auth token
        const token = newUser.generateJwtToken();
        // return
        return res.status(200).json({token, status: "Success"});
    } catch (error) {
        return res.status(500).json({error: error.message});
    }
});

/* 
    Route:          /signin
    Description:    Signin with email and password
    Params:         none
    Access:         Public
    Method :        Post
*/
Router.post("/signin", async (req, res) => {
    try {
        const user = await UserModel.findByEmailAndPassword(req.body.credentials);
       
        const token = user.generateJwtToken();
        
        return res.status(200).json({token, status: "Success"});
    } catch (error) {
        return res.status(500).json({error: error.message});
    }
});

/* 
    Route:          /google
    Description:    Google signin
    Params:         none
    Access:         Google
    Method :        GET
*/
Router.get(
    "/google", 
    passport.authenticate("google", {
        scope: [
            "https://www.googleapis.com/auth/userinfo.profile",
            "https://www.googleapis.com/auth/userinfo.email"
        ],
    })
);

/* 
    Route:          /google/callback
    Description:    Google signin callback
    Params:         none
    Access:         Google
    Method :        GET
*/
Router.get(
    "/google/callback", 
    passport.authenticate("google", {failureRedirect: "/"}),
    (req, res) => {
        return res.redirect(`http://localhost:3000/google/${req.session.passport.user.token}`);
    }
);

export default Router;