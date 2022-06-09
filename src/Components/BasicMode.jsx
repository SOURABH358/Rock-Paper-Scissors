import React, { useEffect, useState } from "react"
import "./BasicMode.css"

export default function BasicMode({winner, SetWinner, SetScore}) {
    let [class1, SetClass1] = useState('step-1');
    let [class2, SetClass2] = useState('step-2 remove');
    let [class3, SetClass3] = useState('step-3 remove');
    let [class4, SetClass4] = useState('step-4 remove');
    let [user, SetUser] = useState('');
    let [house, SetHouse] = useState('')

    let options = ['paper', 'scissors', 'rock'];

    console.log(user, house, winner)
    useEffect(()=>{
        SetWinner(()=>{
            if(user === house){
                return 'draw'
            }
            if(user==='paper' && house==='rock'){
                return 'you win';
            }
            else if (user==='paper' && house === 'scissors'){
                return 'you lose';
            }
            else if (user==='scissors' && house==='paper'){
                return 'you win';
            }
            else if (user === 'scissors' && house === 'rock'){
                return 'you lose';
            }
            else if (user === 'rock' && house=== 'scissors'){
                return 'you win';
            }
            else if (user === 'rock' && house === 'paper'){
                return 'you lose';
            }
        })
    },[user,house])

    useEffect(()=>{
        SetScore((prev)=>{
            if(winner==='you win'){
                return prev+1;
            }
            else if(winner === 'you lose'){
                return prev-1;
            }
            return prev;
        })
    },[winner])
    function HandleSelection(e) {
        SetUser(e.target.id)
        SetClass1('step-1 remove')
        setTimeout(() => {
            SetClass2('step-2')
        }, 200);
        setTimeout(() => {
            SetClass2('step-2 remove')
            SetHouse(options[Math.floor(Math.random()*3)])
            SetClass3('step-3');
        }, 2000);
        setTimeout(() => {
            SetClass3('step-3 remove')
            SetClass4('step-4')
        }, 3000)
    }
    function handleButton() {
        SetUser('')
        SetHouse('')
        SetClass4('step-4 remove')
        SetClass3('step-3 remove')
        SetClass2('step-2 remove')
        SetClass1('step-1')
    }
    return (
        <section className="basic-mode">
            <div className={class1} onClick={HandleSelection}>
                <div id="paper" className="disc paper"></div>
                <div id="scissors" className="disc scissors"></div>
                <div id="rock" className="disc rock rocky"></div>
            </div>
            <div className={class2}>
                <p className="bm-title">YOU PICKED</p>
                <p className="bm-title">THE HOUSE PICKED</p>
                <div className={`disc2 ${user}`}></div>

                <div className="house"></div>
            </div>

            <div className={class3}>
                <p className="bm-title">YOU PICKED</p>
                <p className="bm-title">THE HOUSE PICKED</p>
                <div className={`disc2 ${user}`}></div>

                <div className={`disc2 ${house}`}></div>
            </div>
            <div className={class4}>
                <p className="bm-title">YOU PICKED</p>
                <div></div>
                <p className="bm-title">THE HOUSE PICKED</p>
                <div className={`disc2 ${user}`}></div>
                <div className="result">
                    <p>{winner}</p>
                    <div className="begin" onClick={handleButton}>PLAY AGAIN</div>
                </div>
                <div className={`disc2 ${house}`}></div>
            </div>
        </section>
    )
}
