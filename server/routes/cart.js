const router = require ('express').Router();
const Cart = require('../models/Cart');
const { verifyTokenAndAdmin, verifyToken, verifyTokenAndAuthorization } = require('./verifyToken');
// CREATE

router.post('/', verifyToken, async (req, res) => {
    const { product,quantity, price, selectedsize, userId } = req.body;
    console.log(req.body)
    console.log(product)
    if (!product || !product.title || !product._id || !product.img1 || !product.price1 || !product.price2 || !product.price3 || !product.price4) {
        return res.status(400).json({ message: "Все обязательные поля должны быть заполнены." });
    }
    const newProduct = {
        _id: product._id, 
        title: product.title,
        price1: product.price1,
        price2: product.price2,
        price3: product.price3,
        price4: product.price4,
        desc: product.desc, 
        img1: product.img1, 
        img2: product.img2, 
        img3: product.img3,
        categories: product.categories || [],
    };

    console.log("newProduct is", newProduct);

    try {
        let cart = await Cart.findOne({ userId: userId });

        if (cart) {
            cart.products.push({
                ...newProduct,
                quantity: quantity, 
                price: price, 
                selectedsize: selectedsize 
            });
        } else {
            cart = new Cart({
                userId: userId,
                products: [{
                    ...newProduct,
                    quantity: quantity,
                    price: price,
                    selectedsize: selectedsize
                }],
            });
        }

        const savedCart = await cart.save(); 
        console.log("SavedCart is:", savedCart);
        res.status(200).json(savedCart);
    } catch (err) {
        console.error("Error saving cart:", err);
        res.status(500).json(err);
    }
});

// UPDATE
router.put('/:id',verifyTokenAndAuthorization,async(req,res)=>{
    try{
        const updatedCart = await Cart.findByIdAndUpdate(req.params.id,
         {
         $set:req.body
        },{new:true})
        res.status(200).json(updatedCart)
     }
     catch(err){
  res.status(501).json(err)
     }
})

// DELETE

router.delete('/:id',verifyTokenAndAuthorization,async(req,res)=>{
    try{
      await Cart.findByIdAndDelete(req.params.id);
      res.status(200).json('Cart has been deleted')
    }
    catch(err){
        res.status(500).json(err)
    }
})
//  GET USER CART

router.get('/find/:userId',verifyTokenAndAuthorization,async(req,res)=>{
    try{
      const cart =await Cart.findOne({userId:req.params.userId});
     
      res.status(200).json(cart)
    }
    catch(err){
        res.status(500).json(err)
    }
})
// GET ALL 

router.get('/',verifyTokenAndAdmin,async(req,res)=>{
    try{
      const carts = await Cart.find();
      res.status(200).json(carts)   
    }
    catch(err){
        res.status(500).json(err)
    }
})

module.exports = router