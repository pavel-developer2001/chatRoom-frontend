import { createSlice, createAsyncThunk, Slice } from "@reduxjs/toolkit";

export const getRoomParticipants = createAsyncThunk(
	"participant/getRoomParticipants",
	async (roomId) => {
		return await fetch(
			`http://localhost:5000/api/participants?roomId=${roomId}`
		).then((res) => res.json());
	}
);
const participantSlice = createSlice({
	name: "participant",
	initialState: {
		participants: [],
		status: null,
		loading: true,
	},
	reducers: {
		connectParticipant(state, action) {
			state.participants.push(action.payload);
		},
		disconnectParticipant(state, action) {
			state.participants = [];
		},
	},
	extraReducers: {
		[getRoomParticipants.pending]: (state, payload) => {
			state.status = "loading";
			state.loading = true;
		},
		[getRoomParticipants.fulfilled]: (state, action) => {
			state.participants = action.payload;
			state.status = "success";
			state.loading = false;
		},
		[getRoomParticipants.rejected]: (state, action) => {
			state.status = "failed";
			state.loading = null;
		},
	},
});

export default participantSlice.reducer;
export const {
	connectParticipant,
	disconnectParticipant,
} = participantSlice.actions;
