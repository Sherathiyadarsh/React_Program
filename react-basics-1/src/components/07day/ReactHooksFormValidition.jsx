import React from 'react'
import { Button, Col, Container, Form, FormGroup, Row } from 'react-bootstrap'
import { useForm } from 'react-hook-form'

const ReactHooksFormValidition = () => {
    const { register, handleSubmit, formState: { errors },trigger,getValues } = useForm()
    let HookFormSubmit = (data) => {
        alert(JSON.stringify(data))
    }
    return (
        <>
            <Container>
                <Form onSubmit={handleSubmit(HookFormSubmit)}>
                    <Row>
                        <Col>
                            <FormGroup className='mb-3'>
                                <Form.Label>Username :</Form.Label>
                                <Form.Control type='text' {...register('username', { required:'Username is required' })} onBlur={()=>trigger('username')}></Form.Control>
                            </FormGroup>
                            {errors.username && <span className='text-danger'>{errors.username.message}</span>}
                        </Col>
                        <Col>
                            <FormGroup className='mb-3'>
                                <Form.Label>Email :</Form.Label>
                                <Form.Control type='text' {...register('email', { required: 'Email is required', pattern:{value:/^[\w\!\#\$\%\^\&\*\-\+\=\.]+\@[\w]+\.[a-zA-Z]{3}$/,message:"Invalid Email"}})} onBlur={()=>trigger('email')}></Form.Control>
                            </FormGroup>
                            {errors.email && <span className='text-danger'>{errors.email.message}</span>}
                        </Col>
                    </Row>
                    <FormGroup className='mb-3'>
                        <Form.Label>Password :</Form.Label>
                        <Form.Control type='password' {...register('password', { required:'Password is required',minLength:{value:6 ,message:"Min 6 char"},
                        maxLength:{value:20 ,message:"Max 20 char"}})} onBlur={()=>trigger('password')}></Form.Control>
                    </FormGroup>
                    {errors.password && <span className='text-danger'>{errors.password.message}</span>}
                    <FormGroup className='mb-3'>
                        <Form.Label>Confirm Password :</Form.Label>
                        <Form.Control type='password' {...register('cpassword', { required: 'Confirm Password is required',
                            validate:(cpwd)=>{
                                let {password}=getValues()
                                return password==cpwd || "Password not match"
                            }
                         })} onBlur={()=>trigger('cpassword')}></Form.Control>
                    </FormGroup>
                    {errors.cpassword && <span className='text-danger'>{errors.cpassword.message}</span>}
                    <Form.Check className='mb-3'
                        type='checkbox' label='Remember me' />

                    <Button type='submit'>Submit</Button>
                </Form>
            </Container>
        </>
    )
}

export default ReactHooksFormValidition
