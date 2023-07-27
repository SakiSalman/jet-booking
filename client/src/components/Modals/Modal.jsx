import React from 'react'

const Modal = ({children}) => {
  return (
    <div className="bg-black w-full h-screen flex justify-center items-center fixed z-50 top-0 left-0 right-0 bottom-0">
        {children}
    </div>
  )
}

export default Modal