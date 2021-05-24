import { addNewRoom } from "../roomSlice";
import roomSlice from "../roomSlice";
import configureStore from "redux-mock-store";
describe("Room Slice", () => {
	let state = {
		rooms: {
			data: [],
		},
		status: null,
		loading: true,
	};
	const mockStore = configureStore();
	let store, wrapper;
	test("add new room", () => {
		store = mockStore(state);
		const newRoom = {
			createdAt: "2021-05-24T08:36:50.764Z",
			id: 64,
			roomName: "test124",
			roomPicture: "roomPicture-1621845410571.jpg",
			roomText: "test124",
			updatedAt: "2021-05-24T08:36:50.764Z",
			userId: 8,
		};
		const action = addNewRoom(newRoom);
		const newState = roomSlice(state, action);
		expect(newState.rooms.data.length).toBe(1);
		expect(newState.rooms.data.length).not.toBe(0);
	});
});
