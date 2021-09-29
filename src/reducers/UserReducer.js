import {
	USER_SUBMIT_APPLICATION_FAIL,
	USER_SUBMIT_APPLICATION_REQUEST,
	USER_SUBMIT_APPLICATION_SUCCESS,
} from "../constants/UserConstant";

export const UserSubmittedReducer = (state = {}, action) => {
	switch (action.type) {
		case USER_SUBMIT_APPLICATION_REQUEST:
			return { loading: true };

		case USER_SUBMIT_APPLICATION_SUCCESS:
			return { loading: false, applicantInfo: action.payload };

		case USER_SUBMIT_APPLICATION_FAIL:
			return { loading: false, error: action.payload };

		default:
			return state;
	}
};
