import React from "react";
import "./Modal.css"
export default function Modal({ mode, modalClass, SetModalClass }) {
    
    return (
        <section className={modalClass}>
            <div className="overlay"></div>
            <div className="modal-container">
                <p>RULES</p>
                <img src = {mode==='basic'?'./images/image-rules.svg':'./images/image-rules-bonus.svg'} alt = "modal-bg"/>
                <div className="icon-close" onClick={()=>{SetModalClass('modal')}}>
                    <img src = "../images/icon-close.svg" alt = "icon-close" />
                </div>
            </div>
        </section>
    )
}