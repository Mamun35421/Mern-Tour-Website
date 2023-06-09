import React from 'react'
import '../styles/login.css'
import { Col, Container, Row,Button, Form, FormGroup } from 'reactstrap'

import registerImg from '../assets/images/register.png'
import userIcon from '../assets/images/user.png'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const Register = () => {

  const [credentials, setCredentials] = useState({
    username:undefined,
    email:undefined,
    password:undefined
})

  const handleChange = e =>{
    setCredentials(prev=>({...prev,[e.target.id]:e.target.value})) 
};

const handleClick = e =>{
  e.preventDefault();
}


  return <>
  <section>
    <Container>
      <Row>
        <Col lg='8' className='m-auto'>
          <div className='login__container d-flex justify-content-between'>
            <div className='login__img'>
              <img src={registerImg} alt='' />
            </div>

            <div className='login__form'>
              <div className='user'>
                <img src={userIcon} alt=''/>
              </div>
              <h2>Register</h2>

              <Form onSubmit={handleClick}>
              <FormGroup>
                <input 
                  type='text'
                  placeholder='Username'
                  required 
                  id='mail' 
                  onChange={handleChange} />
              </FormGroup>

              <FormGroup>
                <input 
                type='email' 
                placeholder='Email' 
                required 
                id='mail' 
                onChange={handleChange} />
              </FormGroup>

              <FormGroup>
                <input 
                type='password' 
                placeholder='Password'
                 required 
                 id='password' 
                 onChange={handleChange} />
              </FormGroup>
              <Button className='btn secondary__btn auth__btn' type='submit'>Create Account</Button>
            </Form>
            <p>Already have an account? <Link to='/login'>Login</Link></p>
            </div>
          </div>

        </Col>
      </Row>
    </Container>
  </section>
  
  </>
}

export default Register