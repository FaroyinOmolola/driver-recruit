import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { UserSubmittedReducer } from "./reducers/UserReducer";

const initialState = {
	userSubmitted: {
		applicantInfo: localStorage.getItem("applicantInfo")
			? JSON.parse(localStorage.getItem("applicantInfo"))
			: null,
	},
};

const reducer = combineReducers({
	userSubmitted: UserSubmittedReducer,
});
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
	reducer,
	initialState,
	composeEnhancer(applyMiddleware(thunk))
);

console.log(store.getState());
export default store;
