import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";



export const fetchUsers = createAsyncThunk(
    'users/fetch',
  async () => {
    const res = await axios.get('https://jetbooking.vercel.app/api/v1/user/all')
    return res.data
  }
)

// Register user
export const registerUser = createAsyncThunk(
    'users/register',
  async (data, {rejectWithValue}) => {
   try {
    const res = await axios.post('https://jetbooking.vercel.app/api/v1/user/register', data)
    return res.data
   } catch (error) {
    console.log(error.response.data.message);
    return toast('warn', error.response.data.message)
   }
    
  }
)
// Register user
export const delateUser = createAsyncThunk(
    'users/delete',
  async (data, {rejectWithValue}) => {
   try {
    const res = await axios.delete(`https://jetbooking.vercel.app/api/v1/user/${data}`)
    console.log(res.data);
    return res.data
   } catch (error) {
    console.log(error.response.data.message);
    return toast('warn', error.response.data.message)
   }
    
  }
)