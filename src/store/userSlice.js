import { createSlice, createAsyncThunk, Slice } from "@reduxjs/toolkit";

export const getUsers = createAsyncThunk("user/getUsers", async () => {
	return fetch("http://localhost:5000/api/users").then((res) => res.json());
});
const userSlice = createSlice({
	name: "user",
	initialState: {
		users: [],
		token: "",
		status: null,
		loading: true,
	},
	reducers: {
		setToken(state, action) {
			state.token = action.payload;
		},
	},
	extraReducers: {
		[getUsers.pending]: (state, payload) => {
			state.status = "loading";
			state.loading = true;
		},
		[getUsers.fulfilled]: (state, action) => {
			state.memes = action.payload;
			state.status = "success";
			state.loading = false;
		},
		[getUsers.rejected]: (state, action) => {
			state.status = "failed";
			state.loading = null;
		},
	},
});

export default userSlice.reducer;
export const { setToken } = userSlice.actions;
