import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getRooms = createAsyncThunk("/getRooms", async () => {
  return fetch("http://localhost:5000/api/rooms").then((res) => res.json());
});
const roomSlice = createSlice({
  name: "room",
  initialState: {
    rooms: {
      data: [],
    },
    status: null,
    loading: true,
  },
  reducers: {
    addNewRoom(state, action) {
      state.rooms.data.push(action.payload);
    },
  },
  extraReducers: {
    [getRooms.pending]: (state, payload) => {
      state.status = "loading";
      state.loading = true;
    },
    [getRooms.fulfilled]: (state, action) => {
      state.rooms = action.payload;
      state.status = "success";
      state.loading = false;
    },
    [getRooms.rejected]: (state, action) => {
      state.status = "failed";
      state.loading = null;
    },
  },
});

export default roomSlice.reducer;
export const { addNewRoom } = roomSlice.actions;
