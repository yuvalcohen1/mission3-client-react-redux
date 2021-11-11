import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiBase } from "../../api-client/api-client";

export const fetchMeetingsById = createAsyncThunk(
  "meetings/fetchMeetingsById",
  async (teamId) => {
    try {
      const { data: meetings } = await apiBase.get(`/meetings/${teamId}`);
      return meetings;
    } catch (err) {
      console.log(err);
    }
  }
);

export const meetingsSlice = createSlice({
  name: "meetings",
  initialState: {
    data: [],
  },
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchMeetingsById.fulfilled, (state, action) => {
      state.data = action.payload;
    });
  },
});

export default meetingsSlice.reducer;
