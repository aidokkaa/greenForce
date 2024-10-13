import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";
import { publicRequest } from "../requestMethods";
interface Comment {
  productId: string;
  userId: string;
  text: string;
}
export const fetchComments = createAsyncThunk<Comment[], string>(
  'comments/fetchComments',
  async (productId: string) => { 
      const res = await publicRequest.get(`comments/${productId}`);
      return res.data;
  }
);
  export const addComment = createAsyncThunk<Comment,Comment>('comments/addComment', async (comment) => {
    const response = await publicRequest.post('/comments', comment);
    console.log(response.data)
    return response.data;
  
  });
  export const deleteComment = createAsyncThunk<string, { commentId: string, userId: string }>(
    'comments/deleteComment',
    async ({ commentId, userId }) => {
        await publicRequest.delete(`/comments/${commentId}`, { data: { userId } });
        return commentId; 
    }
);

  const commentsSlice = createSlice({
    name: 'comments',
    initialState: [],
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(fetchComments.fulfilled, (state, action) => {
          return action.payload;
        })
        .addCase(addComment.fulfilled, (state, action) => {
          state.push(action.payload);
        })
        .addCase(deleteComment.fulfilled, (state, action) => {
          return state.filter(comment => comment._id !== action.payload);
        });
    },
  });
  
  export default commentsSlice.reducer;
