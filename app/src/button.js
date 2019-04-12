import React, { useState } from 'react'

export default function Button(props) {
  const [isClicked, setClick] = useState(false)
  return (
    <button data-testid='btn-id' onClick={() => setClick(!isClicked)}>
      {isClicked ? 'You clicked me' : props.children}
    </button>
  )
}
