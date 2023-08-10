import { createSlice } from "@reduxjs/toolkit";

import HoseinSedaqat from "@/assets/HoseinSedaqat.jpg";

const initialState = {
  profile_image: "" as any,
  new_profile_image: "" as any,
  switch_image: true,
  username: "Hosein Sedaqat",
  userid: "HoseinSedaqat",
};

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    prepareImage(state) {
      state.profile_image = HoseinSedaqat;
    },
    updateProfileImage(state, payload) {
      state.switch_image = false;
      state.new_profile_image = payload.payload;
    },
    updateUserNameWithId(state, payload) {
      state.username = payload.payload.username;
      state.userid = payload.payload.userid;
    },
  },
});

export const { updateProfileImage, prepareImage, updateUserNameWithId } =
  profileSlice.actions;

export default profileSlice.reducer;
