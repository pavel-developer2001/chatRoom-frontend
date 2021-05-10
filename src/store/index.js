import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import roomSlice from "./roomSlice";
import messageSlice from "./messageSlice";

const rootReducer = combineReducers({
	user: userSlice,
	room: roomSlice,
	message: messageSlice,
});

export const store = configureStore({
	reducer: rootReducer,
});
