const mongoose = require ('mongoose');
const ProductSchema = new mongoose.Schema({
    title:{
        type:String,required:true,unique:true
    },
    desc:{type:String,required:true,unique:true},
    desc1:{type:String,unique:true},
    img1:{type:String,required:true},
    img2:{type:String,required:true},
    img3:{type:String,required:true},
    categories:{
        type:Array,
    },
    price:{
        type:Number,required:true
    }
  
},{timestamps:true})

module.exports = mongoose.model('Product',ProductSchema)