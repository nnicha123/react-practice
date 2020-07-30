import React, { forwardRef } from 'react'
import Tippy from '@tippy.js/react'
import 'tippy.js/dist/tippy.css'

const ColoredTooltip = () => {
  return <span style={{ color: 'yellow' }}>Colored component</span>
}

const CustomChild = forwardRef((props, ref) => {
  return (
    <div ref={ref}>
      <div>First line</div>
      <div>Second line</div>
    </div>
  )
})

function TippyTest() {
  return (
    <div className="App">
      <div style={{ padding: '20px' }}>
        <Tippy placement="right" delay={1000} arrow={false} content="Basic Tooltip">
          <button>Hover</button>
        </Tippy>
      </div>

      <div style={{ padding: '20px' }}>
        <Tippy content={<span style={{ color: 'orange' }}>Colored</span>}>
          <button>Colored</button>
        </Tippy>
      </div>

      <div style={{ padding: '20px' }}>
        <Tippy content={<ColoredTooltip />}>
          <button>Colored</button>
        </Tippy>
      </div>

      <div style={{ padding: '20px' }}>
        <Tippy content={<ColoredTooltip />}>
          <CustomChild></CustomChild>
        </Tippy>
      </div>
    </div>
  )
}

export default TippyTest
