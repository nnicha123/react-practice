import React from 'react'

function Button(props) {
    const {handleClick,children} = props
    console.log('Rendering button - ',children)
    return (
        <div>
            <button onClick={handleClick}>{children}</button>
        </div>
    )
}

export default React.memo(Button)
