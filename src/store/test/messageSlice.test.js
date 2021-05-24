import { addMessageItem } from "../messageSlice";
import messageSlice from "../messageSlice";
import configureStore from "redux-mock-store";
describe("Message Slice", () => {
	let state = {
		messages: [],
		status: null,
		loading: true,
	};
	const mockStore = configureStore();
	let store, wrapper;
	test("add new message", () => {
		store = mockStore(state);
		const newMessage = {
			createdAt: "2021-05-24T08:21:40.880Z",
			id: 69,
			messageText: "test",
			roomId: 62,
			updatedAt: "2021-05-24T08:21:40.880Z",
			userId: 8,
		};
		const action = addMessageItem(newMessage);
		const newState = messageSlice(state, action);
		expect(newState.messages.length).toBe(1);
		expect(newState.messages.length).not.toBe(0);
	});
});
