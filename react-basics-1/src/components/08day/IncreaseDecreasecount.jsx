import React from 'react'
import { Button } from 'react-bootstrap'

const IncreaseDecreasecount = ({ increase, decrease }) => {
    return (
        <>
            <Button className='me-2' onClick={() => increase(1)}>Increase by 1</Button>
            <Button className='me-5' onClick={() => increase(5)}>Increase by 5</Button>

            <Button className='me-2' onClick={() => decrease(1)}>Decrease by 1</Button>
            <Button onClick={() => decrease(5)}>Decrease by 5</Button>
        </>
    )
}

export default IncreaseDecreasecount
