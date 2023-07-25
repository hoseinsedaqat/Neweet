import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    tweet: 'That is my First Tweet'
}

const tweetSlice = createSlice({
    name: 'tweet',
    initialState,
    reducers: {}
})

export default tweetSlice.reducer;