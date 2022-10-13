import React, { useState } from 'react';
import  ReactDOM  from 'react-dom';


export function Modal() {

const modal = document.getElementById('modal');
  
  return ReactDOM.createPortal (
    children, modal
  )
}

export function Parent() {

  const [open, setOpen] = useState(false);

  return(
    <div>
      <svg onClick={() => setOpen(true)} height="200" viewBox="0 0 200 200" width="200">
        <title />
        <path d="M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z" />
        </svg>

      <Modal >
        <div className='modal-wrapper'>
          
        </div>
      </Modal>
    </div>
  )
}




// export function Modal({ open, setOpen, children }) {
//   return(
//     <div className={`overlay animated ${open ? 'show' : ''}`}>
//       <div className='modal'>
//         <svg onClick={() => setOpen(false)} height="200" viewBox="0 0 200 200" width="200">
//           <title />
//           <path d="M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z" />
//         </svg>
//         {children}
//       </div>
//   </div>
//   )
// }