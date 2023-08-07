import ModernFamily from "@/assets/ModernFamily.jpg";

import ElonMusk from "@/assets/ElonMusk.webp";

import Sijal from "@/assets/Sijal.jpg";

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tweets: [
    {
      name: "Hosein Sedaqat",
      username: "HoseinSedaqat",
      text: "I love Modern Family Show is Awesome 🤘😍",
      img: ModernFamily,
      buildby: "admin",
    },
    {
      name: "Hosein Sedaqat",
      username: "HoseinSedaqat",
      text: "I Am Nerdi Geek Why are you care ????? 😎 ",
      img: ElonMusk,
      buildby: "admin",
    },
    {
      name: "Hosein Sedaqat",
      username: "HoseinSedaqat",
      text: "Sijaliiiiiiiii 🤞🎤",
      img: Sijal,
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
