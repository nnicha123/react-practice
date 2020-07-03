import React from 'react'
import {UserContext} from './App'

function F() {
    return (
        <div>
            <UserContext.Consumer>
                {
                    user => <div>User context value {user.name} {user.age}
                    email: {user.email}</div>
                }
            </UserContext.Consumer>
        </div>
    )
}

export default F
