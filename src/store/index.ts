// configure redux
import { configureStore } from "@reduxjs/toolkit";
// features
import messageSlice from "@/features/messageSlice";
import tweetSlice from "@/features/tweetSlice";

export const store = configureStore({
  reducer: {
    tweet: tweetSlice,
    message: messageSlice,
  },
});
