import React, { useState } from 'react'

export default function HookCounter() {
    const [count, incremenCount] = useState(0)
    return (
        <div>
            <button onClick={() => incremenCount(count + 1)}>Count {count}</button>
        </div>
    )
}
