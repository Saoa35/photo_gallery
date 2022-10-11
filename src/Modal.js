import React from 'react';

export function Modal = (({ open, setOpen, children }) => {
  return(
    <div className='overlay'>
      <div className='modal'>
        {children}
      </div>
  </div>
  )
})