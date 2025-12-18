const mongoose = require("mongoose");
const Creator = require("../models/creator.models");
const User = require("../models/user.model");
const cloudinary = require("../services/cloudinary.service");

const getCreators=async(req, res)=>{
    try{

    }catch(error){
        console.error("Cannot get creators!!",error);
        res.status(500).json({message: error.message});
    }
};

const getCreator=async(req, res)=>{
    try{
        const {id}=req.params;
        if(!mongoose.Types.ObjectId.isValid(id)){
            return res.status(400).json({message: "Invalid seller ID format"});
        }
        const [aggregatedSeller]=await User.aggregate([
            {
                $match:{
                    _id: new mongoose.Types.ObjectId(id), 
                    accountType:"creator", 
                },
            },
            {
                $lookup:{
                    from: "creator",
                    localField:"_id",
                    foreignField: "userId",
                    as: "profile",
                },
            },
            {$unwind: {path: "$profile", preserveNullAndEmptyArrays: false}},
            {
                $replaceRoot: {
                    newRoot: {
                        $mergeObjects: [
                            {
                                _id: "$_id",
                                fullName: "$fullName",
                                email: "$email",
                                accountType: "$accountType",
                            },
                            {$ifNull: ["$profile",{}]},
                        ],
                    },
                },
            },
        ]);
        if(!aggregatedSeller){
            return res.status(404).json({message: "Creator profile not found"});
        }
        res.status(200).json(aggregatedSeller);
    }catch(error){
        console.error("Cannot get Creator",error);
        res.status(500).json({message: error.message});
    }
};

const createCreator=async(req, res)=>{
    try{
        const creatorData=req.body;
        if(req.file){
            creatorData.imageUrl=req.file.path;
            creatorData.cloudinaryId=req.file.filename;
        }
        const creator=await creator.create(creatorData);
        res.status(201).json(creator);
    }catch(error){
        onsole.error("Cannot get Creator",error);
        res.status(500).json({message: error.message});
    }
};

const updateCreatorProfile=async(req, res)=>{
    try{
        const userId=req.user.id;
        const user =   await User.findById(userId);
        
        if(!user) return res.status(404).json({message: "User not found!!"});
        if(user.accountType !== "creator" && user.accountType !== "admin"){
            return res.status(403).json({message: "You don't have permissions to edit this"});
        }
        
        const profileData={...req.body, userId};
        let oldCreator=null;

        if(req.file){
            profileData.imageUrl=req.file.path;
            profileData.cloudinaryId=req.file.filename;

            oldCreator=await Creator.findOne({userId});
            if(oldCreator?.cloudinaryId){
                await cloudinary.uploader.destroy(oldCreator.cloudinaryId);
            }
        }

        const updated=await Creator.findOneAndUpdate(
            {userId},
            {$set: profileData},
            {
                new: true,
                upsert: true,
                setDefaultOnInsert: true,
                runValidators: true,
            }
        );
        res.status(200).json(updated);
    }catch(error){
        console.error("Creator Profile Updation Error!!",error);
        res.status(500).json({message: error.message});
    }
};

const updateCreator=async(req, res)=>{
    try{
        const {id}=req.params;
        const updateData={...req.body};

        const targetCreator=await Creator.findById(id);
        if(!targetCreator)  return req.status(404).json({message: "Creator not found!"});
        
        const currentUser=await User.findById(req.user.id);
        const isCreator=targetCreator.userId.toString()===req.user.id;
        const isAdmin=currentUser?.accountType==="admin";
        
        if(!isCreator && !isAdmin){
            return res.status(403).json({message:"Unathorized to update this creator!"});
        }
        
        if(req.file){
            updateData.imageUrl=req.file.path;
            updateData.cloudinaryId=req.file.filename;

            if(targetCreator.cloudinaryId){
                await cloudinary.uploader.destroy(targetCreator.cloudinaryId);
            }
        }

        const updated=await Creator.findByIdAndUpdate(id, updateData,{
            new: true,
            runValidators: true,
        });

        res.status(200).json(updated);
    }catch(error){
        console.error("UpdateSeller error: ",error);
        res.status(500).json({message: error.message});
    }
};

const deleteCreator=async(req, res)=>{
    try{
        const {id}=req.params;
        const deleteCreator=await Creator.findByIdAndDelete(id);
        if(!deleteCreator){
            return res.status(404).json({message: "Seller not found"});
        }
        if(deleteCreator.cloudinaryId){
            await cloudinary.uploader.destroy(deleteSeller.cloudinary.cloudinaryId);
        }
        res.status(200).json({
            message: "Seller deleted successfully",
            deletedCreatorId: deleteCreator._id
        });
    }catch(error){
        console.error("deleteSeller error: ", error);
        res.status(500).json({message: error.message});
    }
};

module.exports = {
  getCreators,
  getCreator,
  createCreator,
  updateCreatorProfile,
  updateCreator,
  deleteCreator,
};