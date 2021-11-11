import { configureStore } from "@reduxjs/toolkit";
import meetingsReducer from "../features/meetings/meetingsSlice";
import teamsReducer from "../features/teams/teamsSlice";

export const store = configureStore({
  reducer: {
    teams: teamsReducer,
    meetings: meetingsReducer,
  },
});
