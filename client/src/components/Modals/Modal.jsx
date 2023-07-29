import React from 'react'
import usePopupToggle from '../../hooks/hideModals'

const Modal = ({children}) => {
  return (
    <div className="bg-black bg-opacity-60 w-full h-screen flex justify-center items-center fixed z-50 top-0 left-0 right-0 bottom-0 modal-close">
        {children}
    </div>
  )
}

export default Modal