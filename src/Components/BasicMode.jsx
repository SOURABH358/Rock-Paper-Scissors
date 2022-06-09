import React, { useEffect, useState } from "react"
import "./BasicMode.css"

export default function BasicMode({ winner, SetWinner, SetScore, user, SetUser, house, SetHouse, mode }) {
    let [class1, SetClass1] = useState('step-1');
    let [class2, SetClass2] = useState('step-2 remove');
    let [class3, SetClass3] = useState('step-3 remove');
    let [class4, SetClass4] = useState('step-4 remove');


    let options = ['paper', 'scissors', 'rock','lizard', 'spock'];

    useEffect(() => {
        SetWinner(() => {
            if (user === house) {
                return 'draw'
            }
            else if ((user === 'paper' && house === 'rock')||(user === 'scissors' && house === 'paper')||(user === 'rock' && house === 'scissors')
            ||(user === 'rock' && house === 'lizard')||(user === 'scissors' && house === 'lizard')||(user === 'paper' && house === 'spock')
            ||(user === 'lizard' && house === 'spocks')||(user === 'lizard' && house === 'paper')||(user === 'spock' && house === 'scissors')
            ||(user === 'spock' && house === 'rock')){
                return 'you win';
            }
            else if ((user === 'paper' && house === 'scissors')||(user === 'scissors' && house === 'rock')||(user === 'rock' && house === 'paper')
            ||(user === 'rock' && house === 'spock')||(user === 'scissors' && house === 'spock')||(user === 'paper' && house === 'lizard')
            ||(user === 'lizard' && house === 'rock')||(user === 'lizard' && house === 'scissors')||(user === 'spock' && house === 'paper')||
            (user === 'spocks' && house === 'lizard')) {
                return 'you lose';
            }
           
            
        })
    }, [user, house])

    useEffect(() => {
        SetScore((prev) => {
            if (winner === 'you win') {
                return prev + 1;
            }
            else if (winner === 'you lose') {
                return prev - 1;
            }
            return prev;
        })
    }, [winner])
    function HandleSelection(e) {
        SetUser(e.target.id)
        SetClass1('step-1 remove')
        setTimeout(() => {
            SetClass2('step-2')
        }, 200);
        setTimeout(() => {
            SetClass2('step-2 remove')
            SetHouse(options[Math.floor(Math.random() * (mode === 'basic'?3:5))])
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
        <section className={mode}>
            <div className={class1} onClick={HandleSelection}>
                <div id="paper" className="disc paper"></div>
                <div id="scissors" className="disc scissors"></div>
                <div id="rock" className="disc rock rocky"></div>
                {mode === 'advanced' ?
                    <>
                        <div id="lizard" className="disc lizard"></div>
                        <div id="spock" className="disc spock"></div>
                    </> :
                    <></>}
            </div>

            <div className={class2}>
                <p className="title">YOU PICKED</p>
                <p className="title">THE HOUSE PICKED</p>
                <div className={`disc2 ${user}`}></div>

                <div className="house"></div>
            </div>

            <div className={class3}>
                <p className="title">YOU PICKED</p>
                <p className="title">THE HOUSE PICKED</p>
                <div className={`disc2 ${user}`}></div>

                <div className={`disc2 ${house}`}></div>
            </div>
            <div className={class4}>
                <p className="title">YOU PICKED</p>
                <div></div>
                <p className="title">THE HOUSE PICKED</p>
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
