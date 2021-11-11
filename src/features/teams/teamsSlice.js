import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiBase } from "../../api-client/api-client";

export const fetchTeams = createAsyncThunk("teams/fetchTeams", async () => {
  const { data: teams } = await apiBase.get("/teams");
  return teams;
});

export const teamsSlice = createSlice({
  name: "teams",
  initialState: {
    data: [],
  },
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchTeams.fulfilled, (state, action) => {
      state.data = state.data.concat(action.payload);
    });
  },
});

export default teamsSlice.reducer;
