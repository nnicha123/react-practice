import React, { useState } from 'react'
import { ChromePicker } from 'react-color'
import './ColorPicker.css'

function ColorPicker() {
  const [color, setColor] = useState('#fff')
  const [showColorPicker, setShowColorPicker] = useState(false)
  return (
    <div className="colorPicker-wrapper">
      <button onClick={() => setShowColorPicker(showColorPicker => !showColorPicker)} style={{ marginBottom: '15px' }}>{showColorPicker ? 'Close color picker' : 'Pick a color'}</button>
      {showColorPicker && <ChromePicker color={color} onChange={updatedColor => setColor(updatedColor.hex)} />}
      <h2>You picked: {color}</h2>
    </div>
  )
}

export default ColorPicker
