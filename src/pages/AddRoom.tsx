import React from "react";
import { Button, Form } from "react-bootstrap";

const AddRoom = () => {
	const [picture, setPicture] = React.useState<any>(null);
	const handleChange = (e: any) => {
		const imageUrl = URL.createObjectURL(e.target.files[0]);
		setPicture(imageUrl);
	};
	const func = () => {
		const formData = new FormData();
		formData.append("image", picture);
	};
	return (
		<div className='add-room'>
			<h4>Создать комнату</h4>
			<Form>
				<Form.Group controlId='formBasicEmail'>
					<Form.Label>Название комнаты</Form.Label>
					<Form.Control type='name' placeholder='Введите название комнаты' />
				</Form.Group>
				<Form.Group controlId='exampleForm.ControlTextarea1'>
					<Form.Label>Описание комнаты</Form.Label>
					<Form.Control as='textarea' className='add-room__textarea' rows={3} />
				</Form.Group>
				<Form.Group className='add-room__file'>
					{picture ? (
						<img src={picture} className='add-room__img' />
					) : (
						<>
							<Form.Label>Выбрать фоновую картинку комнаты</Form.Label>
							<Form.File
								className='position-relative'
								required
								name='file'
								onChange={handleChange}
								onClick={func}
								id='validationFormik107'
								feedbackTooltip
							/>{" "}
						</>
					)}
				</Form.Group>
				<Button variant='primary' type='submit'>
					Создать
				</Button>
			</Form>
		</div>
	);
};

export default AddRoom;
