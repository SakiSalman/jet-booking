import React from 'react'
import './modal.css'
import { useRef } from 'react'
const Modal = ( {children, modal, setModal, title}) => {
  
  return (
    <div className='modal-wrapper'>
            <div className="modal-inner">
                <span className='btn-close' onClick={() => setModal(!modal)}>X</span>
               <div className="container">
               <div className="row">
                
                    <div className="col-12 py-3">
                      <h3 className='text-center'>{title? title : ""}</h3>
                    </div>
                    <div className="col-12">
                       {children}
                    </div>
                </div>
               </div>
            </div>
    </div>
  )
}

export default Modal