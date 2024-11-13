const router= require('express').Router();
const authenticateToken = require('../Middlewares/authenticateToken');
const {addToCart, getCartItems, deleteCartItem, emptyCart, decreaseQuantity}= require('../Controllers/CartController');
router.post('/add', authenticateToken, addToCart);
router.get('/', authenticateToken, getCartItems);
router.post('/delete', authenticateToken, deleteCartItem);
router.post('/decreasequantity', authenticateToken, decreaseQuantity);
router.post('/empty', authenticateToken, emptyCart);

module.exports = router;