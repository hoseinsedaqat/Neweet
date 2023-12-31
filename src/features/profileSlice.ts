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
      if (payload.payload.username !== "") {
        state.username = payload.payload.username;
      }
      if (payload.payload.userid !== "") {
        state.userid = payload.payload.userid.split(" ").join("");
      }
    },
  },
});

export const { updateProfileImage, prepareImage, updateUserNameWithId } =
  profileSlice.actions;

export default profileSlice.reducer;
