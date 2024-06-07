// import React from 'react'
// import { Button, Col, Container, Form, Image, Row } from 'react-bootstrap'
// import img1 from '/src/assets/login.png'
// import { useForm } from 'react-hook-form'
// import { Link } from 'react-router-dom'
// const Login = () => {
//     const { register, handleSubmit, formState: { errors }, trigger } = useForm()
//     let FormSubmit = (data) => {
//         //submit login data to the server 
//     }

//     return (
//         <div>
//             <Container className="col-9 shadow mt-5">
//                 <br />
//                 <h1>Login Form</h1>
//                 <hr />
//                 <br />
//                 <Form onSubmit={handleSubmit(FormSubmit)}>
//                     <Row>
//                         <Col xs={6}>
//                             <Image src={img1} width={500} height={400} />
//                         </Col>
//                         <Col xs={6}><br />
//                             <Form.Group >
//                                 <Form.Label className='mb-4'>Email :</Form.Label>
//                                 <Form.Control type='text' {...register('email', { required: "Email is required", pattern: { value: /^[\w\!\#\$\%\^\&\*\-\+\=\.]+\@[\w]+\.[a-zA-Z]{3}$/, message: "Invalid Email" } })} onBlur={() => trigger('email')}></Form.Control>
//                             </Form.Group>
//                             {errors.email && <span className='text-danger'>{errors.email.message}</span>}
//                             <Form.Group>
//                                 <Form.Label className='mt-4'>Password :</Form.Label>
//                                 <Form.Control type='password'{...register('password', { required: "Password is required", minLength: { value: 6, message: 'Min 6 char allow' }, maxLength: { value: 20, message: 'Max 20 char allow' } })} onBlur={() => trigger('password')}></Form.Control>
//                             </Form.Group>
//                             {errors.password && <span className='text-danger'>{errors.password.message}</span>}
//                             <div class="d-grid gap-2 mt-2">
//                                 <Button variant="secondary" type='submit'>Login</Button>
//                             </div><br />
//                             <p>Create an account?? <Link to="/register">Register</Link ></p>

//                         </Col>
//                     </Row>
//                 </Form>
//             </Container>
//         </div>
//     )
// }

// export default Login

import React from 'react'
import { Button, Col, Container, Form, Image, Row } from 'react-bootstrap'
import img1 from '/src/assets/login.png'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'

const Login = () => {
    const { register, handleSubmit, formState: { errors }, trigger } = useForm()
    let FormSubmit = (data) => {
        //submit login data to the server 
    }

    return (
        <div>
            <Container className="col-9 shadow mt-5">
                <br />
                <h1>Login Form</h1>
                <hr />
                <br />
                <Form onSubmit={handleSubmit(FormSubmit)}>
                    <Row>
                        <Col md={6} xs={12}>
                            <Image src={img1} width={500} height={400} className="w-100" />
                        </Col>
                        <Col md={6} xs={12}><br />
                            <Form.Group>
                                <Form.Label className='mb-4'>Email :</Form.Label>
                                <Form.Control type='text' {...register('email', { required: "Email is required", pattern: { value: /^[\w\!\#\$\%\^\&\*\-\+\=\.]+\@[\w]+\.[a-zA-Z]{3}$/, message: "Invalid Email" } })} onBlur={() => trigger('email')}></Form.Control>
                            </Form.Group>
                            {errors.email && <span className='text-danger'>{errors.email.message}</span>}
                            <Form.Group>
                                <Form.Label className='mt-4'>Password :</Form.Label>
                                <Form.Control type='password' {...register('password', { required: "Password is required", minLength: { value: 6, message: 'Min 6 char allow' }, maxLength: { value: 20, message: 'Max 20 char allow' } })} onBlur={() => trigger('password')}></Form.Control>
                            </Form.Group>
                            {errors.password && <span className='text-danger'>{errors.password.message}</span>}
                            <div className="d-grid gap-2 mt-2">
                                <Button variant="secondary" type='submit'>Login</Button>
                            </div><br />
                            <p>Create an account? <Link to="/register">Register</Link></p>
                        </Col>
                    </Row>
                </Form>
            </Container>
        </div>
    )
}

export default Login

