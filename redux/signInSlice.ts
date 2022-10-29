import { Errors, formValues } from "../pages/signin";
import { createSlice } from "@reduxjs/toolkit";

const initialState: formValues[] = [
  {
    email: "",
    password: "",
  },
];
const errors: Errors[] = [];

const signInSlice = createSlice({
  name: "SignIn",
  initialState,
  reducers: {
    signIn: (state, { payload }): any => {
      const { email, password } = payload.formValues;
      return [
        {
          email,
          password,
        },
      ];
    },
  },
});

export const { signIn } = signInSlice.actions;
export default signInSlice.reducer;
export { errors };
