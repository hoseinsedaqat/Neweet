import ModernFamily from "@/assets/ModernFamily.jpg";

import { createSlice } from "@reduxjs/toolkit";

import ElonMusk from "@/assets/ElonMusk.webp";

import Sijal from "@/assets/Sijal.jpg";

const initialState = {
  tweets: [
    {
      name: "Hosein Sedaqat",
      username: "HoseinSedaqat",
      text: "I love Modern Family Show is Awesome 🤘😍",
      img: ModernFamily,
      buildby: "admin",
      time: "14h",
      comments: "115",
      forward: "245",
      likes: "324",
      trend: "21k",
    },
    {
      name: "Hosein Sedaqat",
      username: "HoseinSedaqat",
      text: "I Am Nerdi Geek Why are you care ????? 😎 ",
      img: ElonMusk,
      buildby: "admin",
      time: "19h",
      comments: "214",
      forward: "324",
      likes: "756",
      trend: "36k",
    },
    {
      name: "Hosein Sedaqat",
      username: "HoseinSedaqat",
      text: "Sijaliiiiiiiii 🤞🎤",
      img: Sijal,
      buildby: "admin",
      time: "23h",
      comments: "100",
      forward: "114",
      likes: "95",
      trend: "3k",
    },
  ],
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
        time: "now",
        comments: "0",
        forward: "0",
        likes: "0",
        trend: "0",
      });
    },
  },
});

export const { addTweet } = tweetSlice.actions;

export default tweetSlice.reducer;
