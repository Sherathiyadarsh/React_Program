import React from 'react'
import Inlinecssdemo from './Inlinecssdemo'
import CSSvariable from './CSSvariable'
import './Mystyle.css'
import Globalcssdemo from './Globalcssdemo'
import modulecss from './mystyle.module.css'

const CssinReact = () => {
    return (
        <>
            1. Inline CSS - <Inlinecssdemo /><br />
            2. CSS variable - <CSSvariable /><br />
            3. <h1 className='success'>My style CSS</h1><br />
            4. Global CSS - <Globalcssdemo /><br />
            5. Module css - <h3 className={modulecss.err}>Module CSS Demo</h3>

        </>
    )
}

export default CssinReact
