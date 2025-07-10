import express from "express";
import Chat from "../models/chat.model.js";

 export const creategroup = async (req, res) => {
    try {
        const {name,users} = req.body;
        if (!name || !users || users.length === 0) {
            return res.status(400).json({
                message: "Name and users are required",
                success: false
            });
        }
        const adminId = req.id;
        users.push(adminId)

        const groupChat =await Chat.create({
            name,
            users,
            groupAdmin: adminId,
            isGroupChat: true
        })

        const chatMembers = await Chat.findById(groupChat._id)
            .populate("users", "-password")
            .populate("groupAdmin", "-password");

            res.status(201).json({
                message: "Group chat created successfully",
                success: true,
                chat: chatMembers
            });
    } catch (error) {
        console.error("Error creating group chat:", error);
        res.status(500).json({
            message: "Internal server error",
            success: false 
         });
    }
 }

 expoy
