import React from 'react'
import './comments.css'
import { MdDelete } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { useAppDispatch,useAppSelector } from '../../hooks';
import { deleteComment,fetchComments } from '../../redux/commentSlice';
import { addComment } from '../../redux/commentSlice';
const Comments = ({productId}:{productId:string}) => {
    const comments = useAppSelector(state=>state.comments);
    const user = useAppSelector(state=>state.user.currentUser);
    const dispatch = useAppDispatch();
    const [text,setText]=React.useState('');
    const userId = useAppSelector(state=>state.user.currentUser._id);
    const username = useAppSelector(state=>state.user.currentUser.username);
    React.useEffect(()=>{
        dispatch(fetchComments(productId));
    }, [dispatch, productId])
    const handleSubmit=(e)=>{
        e.preventDefault();
        const newComment = {productId,userId,text,username}
        dispatch(addComment(newComment));
        setText('')
    }
    const handleDelete = (commentId:string)=>{
     dispatch(deleteComment({commentId,userId}))
    }
  return (
    <div className='container section-padding'>
       <div className="commentsDiv">
         <div className="commentIcon">
         <img className='cIcon' src="https://cdn-icons-png.flaticon.com/512/5665/5665758.png" alt="" />
         <h3>Leave a comment</h3>
         </div>
         <hr />
      <div className="commentsForm">
        <form onSubmit={handleSubmit}>
            <textarea className='textArea' name="" value={text} onChange={(e)=>setText(e.target.value)} id="" placeholder='Add a comment...'></textarea>
            <button className='commBtn' type='submit'>Add Comment</button>
        </form>
       <ul>
            {comments.map(comment=>(
                <>
                <br />
                <br />
                <strong><FaUser /> {comment.username}:</strong>
                <div className="liFlex">
                <li className='li' key={comment._id}>{comment.text}</li>
                {comment.userId === userId && (
            <div onClick={() => handleDelete(comment._id)}><MdDelete /></div>
          )}
                </div>
            
                </>
            ))}
        </ul>
       </div>
      </div>
       </div>
  )
}

export default Comments