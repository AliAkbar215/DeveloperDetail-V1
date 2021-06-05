import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./Users/users/usersSlice";

export default configureStore({
  reducer: {
    users: usersReducer,
  },
});
