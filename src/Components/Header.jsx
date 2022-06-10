import React from "react";
import "./Header.css"
export default function Header({score,mode, SetMode}){
    return (
        <>
            <header className="header">
                <div className="logo">
                    <img src = {mode === 'basic'?'../images/logo.svg':'../images/logo-bonus.svg'} alt = "logo" />
                </div>
                <div className="score">
                    <p className="score-title">SCORE</p>
                    <p className="score-value">{score}</p>
                </div>
            </header>
            <div className="toggle-bar">
                <p>level</p>
                <select className="toggle" value={mode} onChange={(e)=>{SetMode(e.target.value)}}>
                    <option value = "basic">BASIC</option>
                    <option value = "advanced">ADVANCED</option>
                </select>
            </div>
        </>
    )
}