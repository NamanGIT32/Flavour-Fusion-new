const mongoose= require("mongoose");

const foodItemSchema= new mongoose.Schema({
    itemId:{
        type: String,
        required: true
    },
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
    },
    price:{
        type:Number,
    },
    image:{
        type:String
    },
    quantity:{
        type:Number,
    }
},{timestamps:true});

const cartSchema = new mongoose.Schema({
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
        unique: true  // Each user has one cart
    },
    items: [foodItemSchema]
});
const cart= mongoose.model("Cart", cartSchema);
module.exports= cart;
