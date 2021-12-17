// Libraries
import express from "express";

// Database Model
import { TeacherModel } from "../../Database/allModels";

const Router = express.Router();

/* 
    Route:          /
    Description:    Get all the teachers
    Params:         none
    Access:         Public
    Method :        GET
*/
Router.get("/", async (req, res) => {
    try{
        const teachers = await TeacherModel.find();

        return res.json({teachers});
    } catch (error) {
        return res.status(500).json({error:error.message});
    }
});

/* 
    Route:          /:_id
    Description:    Get individual teacher based on id
    Params:         id
    Access:         Public
    Method :        GET
*/
Router.get("/:_id", async (req, res) => {
    try {
        const { _id } = req.params;
        const teacher = await TeacherModel.findById(_id);
        if (!teacher)
            return res.status(404).json({ error: "Teacher Not Found" });

        return res.json({ teacher });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

/* 
    Route:          /new
    Description:    add new teacher
    Params:         none
    Access:         Private
    Method :        POST
*/
Router.post("/new", async (req, res) => {
    try {
        const newTeacher = await TeacherModel.create(req.body.teacherData);
        return res.json({ teacher: newTeacher });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

export default Router;