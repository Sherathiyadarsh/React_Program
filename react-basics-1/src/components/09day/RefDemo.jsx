// import React, { useRef } from 'react'
// import { Button, Form } from 'react-bootstrap'

// const RefDemo = () => {
//     const txtRef = useRef()
//     let getdata = () => {
//         alert(txtRef.current)
//     }
//     <>
//         <Form.Group>
//             <Form.Control className='me-2' ref={txtRef}></Form.Control>
//             <Button onClick={getdata}>GetData</Button>
//         </Form.Group>
//     </>

// }

// export default RefDemo
import React, { useEffect, useRef } from 'react'
import { Button, Container, Form } from 'react-bootstrap'

const RefDemo = () => {
    const txtRef = useRef()
    const focusRef = useRef()

    let getdata = () => {
        txtRef.current.style.color = 'pink'
        txtRef.current.focus()
        alert(txtRef.current.value)
        focusRef.current.value="Surbhi"
        focusRef.current.id="@patel"
    }
    useEffect(()=>{
        focusRef.current.focus()
    },[])
    return (
        <>
            <Container className='col-6 p-2'>
                <Form.Group>
                    <Form.Control className='mb-4' ref={txtRef}></Form.Control>
                    <Button onClick={getdata}>GetData</Button>
                </Form.Group>

                <h3 className='mt-5'>Focus</h3>
                <Form.Control className='mb-4' ref={focusRef} ></Form.Control>
            </Container >
        </>
    )
}

export default RefDemo

