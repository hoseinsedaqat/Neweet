import { createSlice } from "@reduxjs/toolkit";
import ModernFamily from "@/assets/ModernFamily.jpg";

const initialState = {
  tweets: [
    {
      name: "Hosein Sedaqat",
      username: "HoseinSedaqat",
      text: "Nice dude",
      img: ModernFamily,
      buildby: "admin",
    },
    {
      name: "Hosein Sedaqat",
      username: "HoseinSedaqat",
      text: "Nice dude",
      img: ModernFamily,
      buildby: "admin",
    },
    {
      name: "Hosein Sedaqat",
      username: "HoseinSedaqat",
      text: "Nice dude",
      img: ModernFamily,
      buildby: "admin",
    },
  ],
  tweet: "That is my First Tweet",
};

const tweetSlice = createSlice({
  name: "tweet",
  initialState,
  reducers: {
    addTweet(state, payload) {
      console.log(payload.payload);

      state.tweets.unshift({
        name: "Hosein Sedaqat",
        username: "HoseinSedaqat",
        text: payload.payload.tweetText,
        img: payload.payload.files,
        buildby: "user",
      });
    },
  },
});

export const { addTweet } = tweetSlice.actions;

export default tweetSlice.reducer;
