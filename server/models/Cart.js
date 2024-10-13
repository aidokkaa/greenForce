const mongoose = require('mongoose');
const ProductSchema = new mongoose.Schema({
    _id: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    desc: {
        type: String,
    },
    desc1: {
        type: String,
    },
    price1: Number,
    price2: Number,
    price3: Number,
    price4: Number,
    img1: String,
    img2: String,
    img3: String,
    categories: {
        type: [String],
        required: true,
    },
}, { _id: false }); 
const CartSchema = new mongoose.Schema({
    price:{type:Number},
    products: {
        type: [ProductSchema],
        default: [], 
    },
    quantity:{type:Number},
    selectedsize:{type:String,},
    userId:{type:String,required:true}

})

module.exports = mongoose.model('Cart', CartSchema);
