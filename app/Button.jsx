import React from 'react';

export default function Button() {
  return (
    <button
      type="button"
      onClick={() => {
        alert('😠');
      }}
    >
      Rude Buttons
    </button>
  );
}
