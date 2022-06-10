import React from "react";
import "./Modal.css"
import Rules from "../Components/images/image-rules.svg"
import RulesBonus from "../Components/images/image-rules-bonus.svg"
import Iconclose from "../Components/images/icon-close.svg"
export default function Modal({ mode, modalClass, SetModalClass }) {
    
    return (
        <section className={modalClass}>
            <div className="overlay"></div>
            <div className="modal-container">
                <p>RULES</p>
                <img src = {mode==='basic'?Rules:RulesBonus} alt = "modal-bg"/>
                <div className="icon-close" onClick={()=>{SetModalClass('modal')}}>
                    <img src = {Iconclose} alt = "icon-close" />
                </div>
            </div>
        </section>
    )
}