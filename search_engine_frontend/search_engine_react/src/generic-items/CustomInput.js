import React from 'react'

function CustomInput({Icon,customStyle}) {
  return (
    <div>
      <Icon/>
      <input className={customStyle}/>
    </div>
  )
}

export default CustomInput