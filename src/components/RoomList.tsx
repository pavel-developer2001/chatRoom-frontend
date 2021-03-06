import React from "react";
import Card from "react-bootstrap/Card";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import ChatRoomApi from "../apis/ChatRoomApi";
import errorImg from "../static/404-boobs-not-found_o_353209.jpg";

import { useTypedSelector } from "../hooks/useTypedSelector";

import socket from "../socket";

const RoomListItem: React.FC<any> = ({ imgFont, name, text, id }) => {
  const user: any = localStorage.getItem("user");
  const history = useHistory();

  const addParticipant = async (e: any) => {
    e.preventDefault();
    const responce = await ChatRoomApi.post("/participants/connect", {
      participantName: JSON.parse(user).user,
      roomId: id,
      userId: JSON.parse(user).id,
    });
    const obj = { name, id, userName: JSON.parse(user).id };
    socket.emit("ROOM:JOIN", obj);
    history.push(`/room/${id}`);
  };
  const checkImg = imgFont ? imgFont : errorImg;
  const fontImg = require(`../static/roomImages/${checkImg}`);
  const checkRepeatImg = !fontImg ? errorImg : fontImg.default;
  return (
    <div className='room-list-item'>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant='top' src={checkRepeatImg} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{text}</Card.Text>
          <Link to={`/room/${id}`}>
            <Button variant='primary' onClick={addParticipant}>
              Присоединиться
            </Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};
const RoomList = () => {
  //@ts-ignore
  const state = useTypedSelector<any>((state) => state?.room?.rooms?.data);

  const { loading } = useTypedSelector((state) => state?.room);
  return (
    <div>
      <Container>
        <Row className='justify-content-md-center'>
          <Col xs lg='1'></Col>
          <Col xs lg='10'>
            <Row>
              {loading ? (
                <p>Loading</p>
              ) : (
                state.map((room: any) => (
                  <Col xs lg='4' key={room.id}>
                    <RoomListItem
                      name={room.roomName}
                      imgFont={room?.roomPicture}
                      text={room.roomText}
                      id={room.id}
                    />
                  </Col>
                ))
              )}
            </Row>
          </Col>
          <Col xs lg='1'></Col>
        </Row>
      </Container>
    </div>
  );
};

export default RoomList;
