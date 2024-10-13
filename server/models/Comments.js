const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    commentId:{type:String},
    username:{type:String,required:true},
    productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
    text: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
  });
  
  module.exports = mongoose.model('Comment', commentSchema);