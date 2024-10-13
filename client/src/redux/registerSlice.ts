import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";
import { publicRequest } from "../requestMethods";

export interface UserData {
    username:string,
    lastname:string,
    email:string,
    password:string,
    confirmPassword:string
}
export const registerUser = createAsyncThunk<any,UserData>(
 'register/registerUser',
 async(userData, {rejectWithValue})=>{
  try{
    const response = await publicRequest.post('/auth/register',userData);
    return response.data
  }catch(err){
    return rejectWithValue(err.response ?.data?.message || 'Registration failed!')
  }
 }
)

export const registerSlice = createSlice({
    name:'register',
    initialState:{
        user:null,
        loading:false,
        error:null
    },
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(registerUser.pending,(state)=>{
            state.loading = true;
            state.error = null
        })
        .addCase(registerUser.fulfilled,(state,action)=>{
            state.loading = null;
            state.user = action.payload;
        })
        .addCase(registerUser.rejected,(state,action)=>{
            state.loading=false;
            state.error= null
        })

    }
})
export default registerSlice.reducer;