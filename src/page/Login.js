import React, { useState } from 'react'
import { Form, Button} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
// 함수 
import { authenticateAction } from '../redux/actions/authenticateAction';

const Login = () => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loginUser = (event) => {
    event.preventDefault();
    // authenticateAction아래에 있는 login함수 불러오기
    dispatch(authenticateAction.login(id, password));
    navigate('/');
  };

  return (
    <div className='login-container'>
      <Form onSubmit={(event)=> loginUser(event)} className='login-form'>
        <Form.Group className='mb-3' controlId='formBasicEmail'>
          <Form.Label>Email address</Form.Label>
          <Form.Control type='email' placeholder='Enter email' onChange={(event)=>setId(event.target.value)}/>
          <Form.Text className='text-muted'>
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className='mb-3' controlId='formBasicPassword' onChange={(event)=>setPassword(event.target.value)}>
          <Form.Label>Password</Form.Label>
          <Form.Control type='password' placeholder='Password' />
        </Form.Group>
        <Form.Group className='mb-3' controlId='formBasicCheckbox'>
          <Form.Check type='checkbox' label='로그인 상태 유지' />
        </Form.Group>
        <div className='login-plus'>
          <Button variant='light' type='submit'>
            로그인
          </Button>
          <Button variant='dark' type='submit'>
            회원가입 하기
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default Login