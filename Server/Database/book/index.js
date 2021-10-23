import mongoose from "mongoose";

const BookSchema = new mongoose.Schema(
    {
        ISBN: {type: String, required: true},
        title: {type: String, required: true},
        pubDate: {type: String},
        language: {type: String},
        numPage: {type: Number},
        author: {type: String, required: true},             
        publication: {typr: String, required: true},
        category: [String],
        location: {type: String, required: true}
    }
);

export const BookModel = mongoose.model("Books", BookSchema);