import mongoose from "mongoose";

const TeacherSchema = new mongoose.Schema(
    {
        name: {type: String, required: true},
        subject: {type: String, required},
        papers: [
            {
                type: mongoose.Types.ObjectId,
                ref: "Quespaper",
            }
        ]
    }
);

export const Teachermodel = mongoose.model("Teacher", TeacherSchema);