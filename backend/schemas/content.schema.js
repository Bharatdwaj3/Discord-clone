import mongoose from "mongoose";

export const content_Schema=new mongoose.Schema({
    
    title: {
        type: String,
        required: true,
        trim: true
    },
    description:{
        type:String,
        required: true,
        trim: true
    },
    category:{
        type:String,
        enum: ['fiction','science','art','daily'],
        trim: true
    },
    mediaType:{
        type:String,
        enum: ['video','image','audio'],
        trim: true
    },
     author: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'user', 
        required: true 
    },

    mediaUrl: { type: String, default: '' },
    cloudinaryId: { type: String, default: '' }
},{
    timestamps: true
    }
);
