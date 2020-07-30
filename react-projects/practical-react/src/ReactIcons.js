import React from 'react'
import { IconContext } from 'react-icons';
import { FaReact } from 'react-icons/fa';
import { GiBadGnome } from 'react-icons/gi';
import { GiSkullSabertooth } from 'react-icons/gi';

function ReactIcons() {
  return (
    <IconContext.Provider value={{ color: 'tomato', size: '5rem' }}>
      <div className="App">
        <FaReact />
        <GiBadGnome />
        <GiSkullSabertooth />
      </div>
    </IconContext.Provider>
  )
}

export default ReactIcons
