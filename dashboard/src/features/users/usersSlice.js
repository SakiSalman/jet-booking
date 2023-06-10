import { createSlice } from "@reduxjs/toolkit";
import { fetchUsers, registerUser } from "./usersApi";

export const usersSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
    status: "idle" /** loading | succeed | Failded */,
    message: null,
    error: null,
    loading : true
  },
  reducers: {},
  extraReducers: (builder) => {

    // get all Users
    builder
    .addCase(fetchUsers.pending, (state, {type, payload}) => {
        state.status = "loading"
        
    })
    .addCase(fetchUsers.fulfilled, (state, {type, payload}) => {
        state.status = "succeed"
        
        state.users = payload
        state.loading = false
    })
    .addCase(fetchUsers.rejected, (state, {type, payload}) => {
        state.status = "falided"
        state.message = 'Data Not Found!'
        
    })
    // Register slice
    .addCase(registerUser.fulfilled, (state, {type, payload}) => {
       state.users = [...state.users, payload.user]
    })    

  },
});



// export actions
export const {} = usersSlice.actions
// export reducers
export default usersSlice.reducer