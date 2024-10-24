const Cart = require("../Models/cartModel.js");
const addToCart = async (req, res) => {
  const userId = req.user._id;
  const { foodItemId, name, image, description, price } = req.body;
  try {
    let cart = await Cart.findOne({ userId });
    if (!cart) {
      // Create new cart if none exists
      cart = new Cart({
        userId,
        items: [
          {
            itemId: foodItemId,
            name: name,
            image: image,
            description: description,
            price: price,
            quantity: 1,
          },
        ],
      });
    } else {
      // if cart exist, check if item is already in cart
      const itemIndex = cart.items.findIndex(
        (item) => item.itemId.toString() === foodItemId
      );
      if (itemIndex > -1) {
        //item already in cart
        cart.items[itemIndex].quantity += 1;
        return res.status(200).json({ message: "Item Quantity increased", cart });
      } else {
        // add the food item
        cart.items.push({
          itemId: foodItemId,
          name: name,
          image: image,
          description: description,
          price: price,
          quantity: 1,
        });
      }
    }
    await cart.save();
    return res
      .status(200)
      .json({ message: "Item added to cart", status: 200, cart });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Error while adding to cart", error });
  }
};

const getCartItems = async (req, res) => {
  const userId = req.user._id;
  try {
    const cart = await Cart.findOne({ userId }).populate("items");
    if (!cart) {
      return res.status(404).json({ message: "cart not found" });
    }
    return res.status(200).json({ message: "Cart items found", cart });
  } catch (error) {
    return res.status(500).json({ message: "Error retriving items from cart" });
  }
};

const deleteCartItem = async (req, res) => {
  const userId = req.user._id;
  const { _id } = req.body;
  try {
    const cart = await Cart.findOne({ userId });
    cart.items = cart.items.filter((item) => item._id.toString() !== _id);
    await cart.save();
    return res.status(200).json({ message: "Item deleted from cart", status: 200, cart });
  } catch (error) {
    return res
      .status(400)
      .json({ message: "error while deleting the item", error });
  }
};

const emptyCart = async (req, res) => {
  const userId = req.user._id;
  console.log(userId);
  try {
    const cart = await Cart.findOne({ userId });
    cart.items = [];
    await cart.save();
    return res.status(200).json({ message: "Cart cleared", status: 200, cart });
  } catch (error) {
    return res
      .status(400)
      .json({ message: "error while deleting the item", error });
  }
};

module.exports = { addToCart, getCartItems, deleteCartItem, emptyCart };
