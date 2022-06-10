import React from "react";
import "./Header.css";
import logo from '../Components/images/logo.svg';
import logoBonus from '../Components/images/logo-bonus.svg';
export default function Header({score,mode, SetMode}){
    return (
        <>
            <header className="header">
                <div className="logo">
                    <img src = {mode === 'basic'?logo:logoBonus} alt = "logo" />
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