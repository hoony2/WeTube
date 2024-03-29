import mongoose from "mongoose";
import { stringLiteral } from "babel-types";

const Videoschema = new mongoose.Schema({
    fileUrl: {
        type: String,
        required: 'File URL is required'
    },
    title: {
        type:String,
        required: "TITLE is required"
    },
    description:String,
    views: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    comments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Comment"
    }],
    creator:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
});

const model = mongoose.model("video", Videoschema);
export default model;