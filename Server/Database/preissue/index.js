import mongoose from "mongoose";

const PreIssueSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Types.ObjectId,
            ref: "Users",
        },
        issueDetails: [
            {
                book: {type: mongoose.Types.ObjectId, ref: "Books"},
            },
        ],
    },
    {
        timestamps: true,
    }
);

export const PreIssueModel = mongoose.model("preIssue", PreIssueSchema);