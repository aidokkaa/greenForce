const mongoose = require ('mongoose');

const goodsSchema= new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  imgUrl: { type: String, required: true },
  isPopular: { type: Boolean, default: false },
});

module.exports = mongoose.model('Goods',goodsSchema)