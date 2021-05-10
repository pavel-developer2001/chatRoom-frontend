import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import roomSlice from "./roomSlice";
import messageSlice from "./messageSlice";
import participantSlice from "./participantSlice";

const rootReducer = combineReducers({
	user: userSlice,
	room: roomSlice,
	message: messageSlice,
	participant: participantSlice,
});

export const store = configureStore({
	reducer: rootReducer,
});
