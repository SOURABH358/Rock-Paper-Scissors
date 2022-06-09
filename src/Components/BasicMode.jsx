import React, { useState } from "react"
import "./BasicMode.css"

export default function BasicMode() {
    let [class1, SetClass1] = useState('step-1');
    let [class2, SetClass2] = useState('step-2 remove');
    let [class3, SetClass3] = useState('house');
    let [class4, SetClass4] = useState('result');

    function HandleSelection(e) {
        console.log(e.target.id)
        console.log(e.currentTarget.classList)
        SetClass1('step-1 remove')
        setTimeout(() => {
            SetClass2('step-2')
        }, 200);
        setTimeout(()=>{
            SetClass3('disc scissors');
        },2000);
        setTimeout(()=>{
            SetClass4('result show-result')
        },3000)
    }
    function handleButton() {
        SetClass3('house')
        SetClass4('result')
        SetClass2('step-2')
        SetClass1('step-1')
    }
    return (
        <section className="basic-mode">
            <div className={class1} onClick={HandleSelection}>
                <div id="paper" className="disc paper"></div>
                <div id="scissors" className="disc scissors"></div>
                <div id="rock" className="disc rock"></div>
            </div>
            <div className={class2}>
                <div className="title">
                    <p>YOU PICKED</p>
                    <p>THE HOUSE PICKED</p>
                </div>
                <div className="picked">
                    <div className="disc paper" id="user-selection"></div>
                    <div className={class4}>
                        <p>YOU WIN</p>
                        <div className="begin" onClick={handleButton}>PLAY AGAIN</div>
                    </div>
                    <div className={class3}></div>
                </div>
            </div>

        </section>
    )
}
