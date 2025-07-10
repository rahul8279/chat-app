import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
    sender: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    receiver: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    messageType: {
        type: String,
        enum:["text","file"],
        required: true
    },
    content: {
        type: String,
        required: function() {
            return this.messageType === "text";
        }
    },
    file: {
        type: String,
        required: function() {
            return this.messageType === "file";
        }
    },
    } ,{timestamps: true});

export const Message = mongoose.model("Message", messageSchema);