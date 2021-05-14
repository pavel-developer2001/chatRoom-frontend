import React from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import ChatRoomApi from "../apis/ChatRoomApi";
import { addNewRoom } from "../store/roomSlice";

const AddRoom = () => {
	const [roomPicture, setRoomPicture] = React.useState<any>(null);
	const handleChange = (e: any) => {
		// const imageUrl = URL.createObjectURL(e.target.files[0]);
		// const formData = new FormData();
		// formData.append("roomPicture", e.target.files[0]);
		setRoomPicture(e.target.files[0]);
	};
	const func = (e: any) => {
		const formData = new FormData();
		formData.append("roomPicture", e.target.files[0]);
		setRoomPicture(formData);
	};
	const user: any = localStorage.getItem("user");

	const [roomName, setRoomName] = React.useState("");
	const [roomText, setRoomText] = React.useState("");

	const dispatch = useDispatch();
	const history = useHistory();
	const addRoom = async (e: any) => {
		e.preventDefault();
		if (roomName === "") {
			return alert("Напишите название комнаты");
		}
		console.log(roomPicture);
		const formData = new FormData();
		formData.append("roomName", roomName);
		formData.append("roomText", roomText);
		formData.append("roomPicture", roomPicture);
		formData.append("userId", JSON.parse(user).id);
		//@ts-ignore
		console.log([...formData.entries()]);
		const responce = await ChatRoomApi.post("/rooms/create", formData, {
			headers: {
				accept: "application/json",
				"Accept-Language": "en-US,en;q=0.8",
				"Content-Type": "multipart/form-data",
			},
		});
		dispatch(addNewRoom(responce.data.data));
		history.push(`/`);
		// console.log(responce.data.data);
		setRoomName("");
		setRoomText("");
		setRoomPicture(null);
	};
	return (
		<div className='add-room'>
			<h4>Создать комнату</h4>
			<Form>
				<Form.Group controlId='formBasicEmail'>
					<Form.Label>Название комнаты</Form.Label>
					<Form.Control
						type='name'
						placeholder='Введите название комнаты'
						value={roomName}
						onChange={(e) => setRoomName(e.target.value)}
					/>
				</Form.Group>
				<Form.Group controlId='exampleForm.ControlTextarea1'>
					<Form.Label>Описание комнаты</Form.Label>
					<Form.Control
						as='textarea'
						className='add-room__textarea'
						rows={3}
						value={roomText}
						onChange={(e) => setRoomText(e.target.value)}
					/>
				</Form.Group>
				<Form.Group className='add-room__file'>
					{roomPicture ? (
						<img src={roomPicture} className='add-room__img' />
					) : (
						<>
							<Form.Label>Выбрать фоновую картинку комнаты</Form.Label>
							<Form.File
								className='position-relative'
								required
								name='file'
								onChange={handleChange}
								// onClick={func}
								id='validationFormik107'
								feedbackTooltip
							/>{" "}
						</>
					)}
				</Form.Group>
				<Button variant='primary' type='submit' onClick={addRoom}>
					Создать
				</Button>
			</Form>
		</div>
	);
};

export default AddRoom;
