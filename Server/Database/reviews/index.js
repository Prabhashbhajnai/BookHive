import mongoose from "mongoose";

const ReviewSchema = new mongoose.Schema(
    {
        book: {type: mongoose.Types.ObjectId, ref: "Books"},
        user: {type: mongoose.Types.ObjectId, ref: "Users"},
        rating: {type: Number, required: true},
        reviewText: {type: String, required: true},
    },
    {
        timestamps: true,
    }
);

export const ReviewModel = mongoose.model("Reviews", ReviewSchema);