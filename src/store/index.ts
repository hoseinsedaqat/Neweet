import { configureStore } from "@reduxjs/toolkit";
import tweetSlice from "@/features/tweetSlice";
 

export const store = configureStore({
    reducer: {
        tweet: tweetSlice
    }
})