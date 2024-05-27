import React from 'react'
import { Button, Col, Container, Form, FormGroup, Image, Row } from 'react-bootstrap'
import image1 from '../../assets/login.png'

const ReactBootstrapdemo = () => {
    return (
        <div>
            <Container className='mt-5 shadow p-3 mb-5 bg-secondary-subtle rounded'>
                <Row>
                    <Col xs={4}>
                        <Image src={image1} fluid />
                    </Col>
                    <Col xs={8}>
                        <Form className='p-2'>
                            <Row>
                                <Col>
                                    <FormGroup className='mb-3'>
                                        <Form.Label>Username :</Form.Label>
                                        <Form.Control type='text'></Form.Control>
                                    </FormGroup>
                                </Col>
                                <Col>
                                    <FormGroup className='mb-3'>
                                        <Form.Label>Email :</Form.Label>
                                        <Form.Control type='text'></Form.Control>
                                    </FormGroup>
                                </Col>
                            </Row>
                            <FormGroup className='mb-3'>
                                <Form.Label>Password :</Form.Label>
                                <Form.Control type='text'></Form.Control>
                            </FormGroup>
                            <FormGroup className='mb-3'>
                                <Form.Label>Confirm Password :</Form.Label>
                                <Form.Control type='text'></Form.Control>
                            </FormGroup>
                            <Form.Check className='mb-3'
                                type='checkbox' label='Remember me' />

                            <Button type='submit'>Submit</Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default ReactBootstrapdemo
