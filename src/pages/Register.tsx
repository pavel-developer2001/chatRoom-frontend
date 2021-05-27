import React from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import ChatRoomApi from "../apis/ChatRoomApi";
import { setToken } from "../store/userSlice";

const Register = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [user, setUser] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [password2, setPassword2] = React.useState("");
  const registerUser = async (e: any) => {
    e.preventDefault();
    try {
      const responce = await ChatRoomApi.post("/users/register", {
        user,
        email,
        password,
        password2,
      });
      localStorage.setItem("user", JSON.stringify(responce.data.data));
      localStorage.setItem("token", responce.data.token);
      dispatch(setToken(responce.data.token));
      history.push(`/`);
      setUser("");
      setEmail("");
      setPassword("");
      setPassword2("");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className='login'>
      <Form>
        <Form.Group controlId='formBasicName'>
          <Form.Label>Имя</Form.Label>
          <Form.Control
            type='name'
            placeholder='Введите имя'
            value={user}
            onChange={(e) => setUser(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId='formBasicEmail'>
          <Form.Label>Email</Form.Label>
          <Form.Control
            type='email'
            placeholder='Введите email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId='formBasicPassword'>
          <Form.Label>Пароль</Form.Label>
          <Form.Control
            type='password'
            placeholder='Введите пароль'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId='formBasicPassword2'>
          <Form.Label>Повторите пароль</Form.Label>
          <Form.Control
            type='password'
            placeholder='Введите пароль ещё раз '
            value={password2}
            onChange={(e) => setPassword2(e.target.value)}
          />
        </Form.Group>

        <Button variant='primary' type='submit' onClick={registerUser}>
          Зарегистрироваться
        </Button>
      </Form>
    </div>
  );
};

export default Register;
