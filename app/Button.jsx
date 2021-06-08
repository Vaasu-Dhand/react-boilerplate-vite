import React from 'react'

export default function Button() {
  return (
    <button
      type="button"
      onClick={() => {
        console.log('I was clicked');
      }}
    >
      Rude Buttons
    </button>
  )
}
