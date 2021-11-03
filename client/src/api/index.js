import axios from "axios";
import {loginFailure, loginStart, loginSuccess} from "../redux/auth";

export const axiosUser = axios.create({
	baseURL: process.env.REACT_APP_BASE_LOCAL_URL
});

const API = axios.create({
	baseURL: process.env.REACT_APP_BASE_LOCAL_URL
});

API.interceptors.request.use((req) => {
	if (localStorage.getItem("persist:root")) {
		req.headers.authorization = `Bearer ${JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken}`;
	}
	return req;
});

export const login = async (dispatch, user) => {
	dispatch(loginStart());
	try {
		const {data} = await API.post("auth/login", user);
		dispatch(loginSuccess(data));
	} catch (error) {
		dispatch(loginFailure());
	}
};