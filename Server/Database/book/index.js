import mongoose from "mongoose";

const BookSchema = new mongoose.Schema(
    {
        ISBN: {type: String, required: true},
        title: {type: String, required: true},
        description: {type: String},
        pubDate: {type: String},
        language: {type: String},
        numPage: {type: Number},
        author: {type: String, required: true},             
        aboutAuthor: {type: String},             
        publication: {type: String, required: true},
        genre: {type: String, required: true},
        location: {type: String, required: true},
        photo: {type: String, required: true},
        reviews: [{type: mongoose.Types.ObjectId, ref: "Reviews"}],
    },
    {
        timestamps: true,
    }
);

export const BookModel = mongoose.model("Books", BookSchema);