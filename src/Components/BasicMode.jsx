import React from "react"
import "./BasicMode.css"

export default function BasicMode() {
    return (
        <section className="basic-mode">
            <div className="step-1">
                <div class="disc paper"></div>
                <div class="disc scissors"></div>
                <div class="disc rock"></div>
            </div>
            <div className="step-2">
                <p>YOU PICKED</p>
                <p>THE HOUSE PICKED</p>
                <div className="user-selection"></div>
                <div className="house"></div>
            </div>
            <div className="step-3">
                <p>YOU PICKED</p>
                <p>THE HOUSE PICKED</p>
                <div className="user-selection"></div>
                <div className="house-selection"></div>
            </div>
            <div className="step-4">
                <div className="user-selection"></div>
                <div className="result">
                    <p>YOU WIN</p>
                    <div className="begin">PLAY AGAIN</div>
                </div>
                <div className="house-selection"></div>
            </div>
        </section>
    )
}
