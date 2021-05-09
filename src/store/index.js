import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import roomSlice from "./roomSlice";

const rootReducer = combineReducers({
	user: userSlice,
	room: roomSlice,
});

export const store = configureStore({
	reducer: rootReducer,
});
