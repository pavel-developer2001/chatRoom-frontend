import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getRoomMessages = createAsyncThunk(
  "message/getRoomMessages",
  async (roomId) => {
    return await fetch(
      `http://localhost:5000/api/rooms/messages/${roomId}`
    ).then((res) => res.json());
  }
);
const messageSlice = createSlice({
  name: "message",
  initialState: {
    messages: [],
    status: null,
    loading: true,
  },
  reducers: {
    addMessageItem(state, action) {
      // state.messages.data.push(action.payload);
      state.messages.push(action.payload);
    },
    getAllMessages(state, action) {
      state.messages = action.payload;
      state.loading = false;
    },
  },
  extraReducers: {
    [getRoomMessages.pending]: (state, payload) => {
      state.status = "loading";
      state.loading = true;
    },
    [getRoomMessages.fulfilled]: (state, action) => {
      state.messages = action.payload;
      state.status = "success";
      state.loading = false;
    },
    [getRoomMessages.rejected]: (state, action) => {
      state.status = "failed";
      state.loading = null;
    },
  },
});

export default messageSlice.reducer;
export const { addMessageItem, getAllMessages } = messageSlice.actions;
