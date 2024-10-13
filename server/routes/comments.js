const express = require('express');
const Comment = require('../models/Comments.js')
const router = express.Router();
router.post('/',async(req,res)=>{
    try{
      const newComment = new Comment(req.body);
      const savedComments = await newComment.save();
      res.status(200).json(savedComments)
    }
    catch(err){
      res.status(500).json('Something went wrong...')
    }
});
router.get('/:productId',async (req, res) => {
    try {
      const comments = await Comment.find({ productId: req.params.productId }).populate('userId', 'username');
      res.status(200).json(comments);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching comments' });
    }
  })
  router.delete('/:commentId', async (req, res) => {
    try {
        const comment = await Comment.findById(req.params.commentId); 
        if (!comment) {
            return res.status(404).json({ message: 'Comment not found!' }); 
        }
        if (comment.userId.toString() !== req.body.userId) {
            return res.status(403).json({ message: 'You do not have permission to delete this comment' });
        }
        await Comment.findByIdAndDelete(req.params.commentId);
        res.status(200).json({ message: 'Comment deleted successfully' });
    } catch (err) {
        console.error(err); 
        res.status(500).json({ message: 'Error deleting comment' });
    }
});
module.exports = router;