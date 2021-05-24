import { setToken } from "../userSlice";
import userSlice from "../userSlice";
import configureStore from "redux-mock-store";
describe("User Slice", () => {
	let state = {
		users: [],
		token: "",
		status: null,
		loading: true,
	};
	const mockStore = configureStore();
	let store, wrapper;
	test("add user token", () => {
		store = mockStore(state);
		const addToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6I…Bzsm4t5Q4";
		const action = setToken(addToken);
		const newState = userSlice(state, action);
		expect(newState.token).toEqual("eyJhbGciOiJIUzI1NiIsInR5cCI6I…Bzsm4t5Q4");
		expect(newState.token).not.toEqual("");
	});
});
