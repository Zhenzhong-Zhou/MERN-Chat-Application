import axios from "axios";
import {loginFailure, loginStart, loginSuccess, logoutAuth} from "../redux/auth";

export const axiosUser = axios.create({
	baseURL: process.env.REACT_APP_BASE_LOCAL_URL
});

const API = axios.create({
	baseURL: process.env.REACT_APP_BASE_LOCAL_URL
});

export const login = async (dispatch, user) => {
	dispatch(loginStart());
	try {
		const {data} = await API.post("auth/login", user);
		console.log(data, user)
		dispatch(loginSuccess(data));
	} catch (error) {
		dispatch(loginFailure());
	}
};

export const logout = (dispatch, user) => {
	dispatch(logoutAuth(user));
};