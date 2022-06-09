import React, { useState } from "react"
import Header from "./Components/Header"
import Modal from "./Components/Modal"
import BasicMode from "./Components/BasicMode"
import AdvancedMode from "./Components/AdvancedMode"
import './App.css'
export default function App() {

    let [Score, SetScore] = useState(0);
    let [mode, SetMode] = useState('basic')
    let [modalClass, SetModalClass] = useState('modal');
    let [winner, SetWinner] = useState('')
    
    return (
        <>
            <Modal 
                mode = {mode}
                modalClass = {modalClass}
                SetModalClass = {SetModalClass}
            />
            <Header
                score={Score}
                SetScore = {SetScore}
                mode={mode}
                SetMode = {SetMode}
            />
            {mode==='basic'?
            <BasicMode 
            winner = {winner}
            SetWinner = {SetWinner}
            SetScore = {SetScore}
            />:
            <AdvancedMode 
            winner = {winner}
            SetWinner = {SetWinner}
            />}
            <div className="rules" onClick={()=>SetModalClass('show-modal')}>RULES</div>
        </>
    )
}