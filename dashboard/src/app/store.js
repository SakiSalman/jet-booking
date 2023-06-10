import { configureStore } from "@reduxjs/toolkit";
import usersSlice from "../features/users/usersSlice";

const store = configureStore({
  reducer: {
    user : usersSlice
  },
});

// export store


export default store
