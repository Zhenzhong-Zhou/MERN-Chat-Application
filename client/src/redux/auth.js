import {createSlice} from "@reduxjs/toolkit";

const authSlice = createSlice({
	name: "auth",
	initialState: {
		currentUser: null,
		isFetching: false,
		error: false
	},
	reducers: {
		loginStart: (state) => {
			state.isFetching = true
		},
		loginSuccess: (state, action) => {
			state.isFetching = false;
			state.currentUser = action.payload;
		},
		loginFailure: (state) => {
			state.isFetching = false;
			state.error = true
		},
		logoutAuth: (state => {
			localStorage.clear();
			state.currentUser = null;
		})
	}
});

export const {loginStart, loginSuccess, loginFailure, logoutAuth} = authSlice.actions;
export default authSlice.reducer;