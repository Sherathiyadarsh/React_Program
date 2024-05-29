import React from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'

const Productform = () => {
    const { register, handleSubmit, formState: { errors } ,reset} = useForm()
    let hookFormSubmit = (data) => {
        // alert(JSON.stringify(data))
        alert("Your data successfully submited")
        reset()
    }
    return (
        <>
            <Container className='body'>
                <Form onSubmit={handleSubmit(hookFormSubmit)}>
                    <h3 className='heading'>Product Form</h3>
                    <hr />
                    <Form.Group className='pb-4'>
                        <Form.Label>First Name : </Form.Label>
                        <Form.Control type='text' {...register('fname', { required: 'First Name is required' })}></Form.Control>
                        {errors.fname && <span className='text-danger'>{errors.fname.message}</span>}
                    </Form.Group>
                    <Form.Group className='pb-4'>
                        <Form.Label>last Name : </Form.Label>
                        <Form.Control type='text'{...register('lname', { required: 'Last Name is required' })}></Form.Control>
                        {errors.lname && <span className='text-danger'>{errors.lname.message}</span>}
                    </Form.Group>
                    <Form.Group className='pb-4'>
                        <Form.Label>Price : </Form.Label>
                        <Form.Control type='number'{...register('price', { required: 'Price is required' })}></Form.Control>
                        {errors.price && <span className='text-danger'>{errors.price.message}</span>}
                    </Form.Group>
                    <Form.Group className='pb-4'>
                        <Form.Label>Brand : </Form.Label>
                        <Form.Control type='text'{...register('brand', { required: 'Brand is required' })}></Form.Control>
                        {errors.brand && <span className='text-danger'>{errors.brand.message}</span>}
                    </Form.Group>
                    <Form.Group className='pb-4'>
                        <Form.Label>Category:</Form.Label>
                        <Form.Select {...register('category', { required: 'Category is required' })}>
                            <option value="">Open this select menu</option>
                            <option value="1">Electric</option>
                            <option value="2">Kitchenware</option>
                            <option value="3">Furniture</option>
                        </Form.Select>
                        {errors.category && <span className='text-danger'>{errors.category.message}</span>}
                    </Form.Group>

                    <Form.Group className='pb-4'>
                        <Form.Label>Stock:</Form.Label>
                        <Form.Control type='number' {...register('stock', { required: 'Stock is required' })}></Form.Control>
                        {errors.stock && <span className='text-danger'>{errors.stock.message}</span>}
                    </Form.Group>

                    <Form.Group className='pb-4'>
                        <Form.Label>Description:</Form.Label>
                        <Form.Control as='textarea' {...register('description', { required: 'Add the few line description' })}></Form.Control>
                        {errors.description && <span className='text-danger'>{errors.description.message}</span>}
                    </Form.Group>

                    <Form.Group className='pb-4'>
                        <Form.Label>Upload Image:</Form.Label>
                        <Form.Control type='file' {...register('uimg', { required: 'Image is required' })}></Form.Control>
                        {errors.uimg && <span className='text-danger'>{errors.uimg.message}</span>}
                    </Form.Group>

                    <Button type='submit' variant='info'>Submit Form</Button>
                </Form>
            </Container>
            <br />
        </>
    )
}

export default Productform
