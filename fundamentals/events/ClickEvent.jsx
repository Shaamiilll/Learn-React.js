import React from 'react'

const ClickEvent = () => {

    const handleClick = () => {
        alert('Button Clicked')
    }
    return (
        <div>
            <button onClick={handleClick}>click Me</button>
        </div>
    )
}

export default ClickEvent
