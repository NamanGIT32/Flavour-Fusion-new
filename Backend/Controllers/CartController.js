const Cart = require("../Models/cartModel.js");
const addToCart= async (req, res) => {
    const userId = req.user._id;
    const {foodItemId, name, image, description, price} = req.body;
    try {
        let cart = await Cart.findOne({userId});
        if(!cart){
            // Create new cart if none exists
            cart = new Cart({
                userId,
                items: [{
                    itemId: foodItemId,
                    name: name,
                    image: image,
                    description: description,
                    price: price
                }]
            })
        }
        else{
            // if cart exist, check if item is already in cart
            const itemIndex = cart.items.findIndex(item => item.itemId.toString() === foodItemId); 
            if(itemIndex>-1){
                //item already in cart
                return res.status(200).json({message: "food item already exists"});
            }
            else{
                // add the food item
                cart.items.push({
                    itemId: foodItemId,
                    name: name,
                    image: image,
                    description: description,
                    price: price
                });
            } 
        }
        await cart.save();
        return res.status(200).json({ message: 'Item added to cart', status: 200, cart });
    } catch (error) {
        return res.status(500).json({message: 'Error while adding to cart', error});
    }
};

module.exports= {addToCart};