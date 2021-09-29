import {
	USER_SUBMIT_APPLICATION_FAIL,
	USER_SUBMIT_APPLICATION_REQUEST,
	USER_SUBMIT_APPLICATION_SUCCESS,
} from "../constants/UserConstant";

export const submitted =
	(name, email, city, address, experience, reason, cv) => async (dispatch) => {
		dispatch({
			type: USER_SUBMIT_APPLICATION_REQUEST,
			payload: { name, email, city, address, experience, reason, cv },
		});
		try {
			const data = { name, email, city, address, experience, reason, cv };

			dispatch({ type: USER_SUBMIT_APPLICATION_SUCCESS, payload: data });
			localStorage.setItem("applicantInfo", JSON.stringify(data));
		} catch (error) {
			dispatch({
				type: USER_SUBMIT_APPLICATION_FAIL,
				payload:
					error.response && error.response.data?.message
						? error.response.data.message
						: error.message,
			});
		}
	};
