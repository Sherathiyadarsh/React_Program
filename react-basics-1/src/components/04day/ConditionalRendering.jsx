import React from 'react'

const ConditionalRendering = ({ isLoggedIn, username }) => {
    /*if (isLoggedIn) {
        return (
            <> <h1>Welcome Back!!</h1>
                <h1>Hello {username}</h1> </>
        )
    }
    else {
        return (
            <><h1>Welcome Guest</h1> </>
        )
    }*/

    /*let result = ''
    if (isLoggedIn) {
        result =
            <> <h1>Welcome Back!!</h1>
                <h1>Hello {username}</h1> </>

    }
    else {
        result =
            <><h1>Welcome Guest</h1> </>

    }
    return(<>{result}</>)*/

    return (
        <>
            {isLoggedIn ?
                <> <h1>Welcome Back!!</h1>
                    <h1>Hello {username}</h1> </>
                :
                <><h1>Welcome Guest</h1> </>
            }

            <br />
            {isLoggedIn &&
                <> <h1>Welcome Back!!</h1> 
                   <h1>Hello {username}</h1> </>}
        </>
    )
}

export default ConditionalRendering
