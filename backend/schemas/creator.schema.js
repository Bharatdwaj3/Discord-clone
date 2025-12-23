import mongoose from "mongoose";

export const creator_Schema=new mongoose.Schema({
    
    
    bio:{
        type:String,
        required: true,
        trim: true
    },
    intrests:{
        type:[String],
        enum: ['fiction','science','art','daily'],
        trim: true
    },
    authored: [{ 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'content',  
    }],
    followers: [{ 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'content' 
    }],
    following: [{ 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'user'
    }],

    mediaUrl: { type: String, default: '' },
    cloudinaryId: { type: String, default: '' }
},{
    timestamps: true
    }
);
