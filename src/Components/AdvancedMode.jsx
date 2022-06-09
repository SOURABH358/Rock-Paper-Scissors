// import React, { useState } from "react"
// import "./AdvancedMode.css"

// export default function AdvancedMode({winner, SetWinner, SetScore, user, SetUser, house, SetHouse}){
//     let [amclass1, SetAmclass1] = useState('am-step-1');
//     let [amclass2, SetAmclass2] = useState('am-step-2 remove');
//     let [amclass3, SetAmclass3] = useState('am-step-3 remove');
//     let [amclass4, SetAmclass4] = useState('am-step-4 remove');

//     let options = ['paper', 'scissors', 'rock', 'lizard', 'sprock'];

//     useEffect(()=>{
//         SetWinner(()=>{
//             if(user === house){
//                 return 'draw'
//             }
//             if(user==='paper' && house==='rock'){
//                 return 'you win';
//             }
//             else if (user==='paper' && house === 'scissors'){
//                 return 'you lose';
//             }
//             else if (user==='scissors' && house==='paper'){
//                 return 'you win';
//             }
//             else if (user === 'scissors' && house === 'rock'){
//                 return 'you lose';
//             }
//             else if (user === 'rock' && house=== 'scissors'){
//                 return 'you win';
//             }
//             else if (user === 'rock' && house === 'paper'){
//                 return 'you lose';
//             }
//         })
//     },[user,house])

//     useEffect(()=>{
//         SetScore((prev)=>{
//             if(winner==='you win'){
//                 return prev+1;
//             }
//             else if(winner === 'you lose'){
//                 return prev-1;
//             }
//             return prev;
//         })
//     },[winner])

//     function handleSelection(e){
//         SetUser(e.target.id)
//         SetAmclass1('am-step-1 remove')
//         setTimeout(() => {
//             SetAmclass2('am-step-2')
//         }, 200);
//         setTimeout(() => {
//             SetAmclass2('am-step-2 remove')
//             SetHouse(options[Math.floor(Math.random()*5)])
//             SetAmclass3('am-step-3');
//         }, 2000);
//         setTimeout(() => {
//             SetAmclass3('am-step-3 remove')
//             SetAmclass4('am-step-4')
//         }, 3000)
//     }
//     function handleButton(){

//     }
    
//     return (
//         <section className="advanced-mode">
//             <div className = {amclass1} onClick = {handleSelection}>
//                 <div className="amdisc ampaper"></div>
//                 <div className="amdisc amscissors"></div>
//                 <div className="amdisc amrock"></div>
//                 <div className="amdisc amlizard"></div>
//                 <div className="amamdisc amsprock"></div>
//             </div>
//             <div className={amclass2}>
//                 <p className="title">YOU PICKED</p>
//                 <p className="title">THE HOUSE PICKED</p>
//                 <div className={`disc2 ${user}`}></div>

//                 <div className="house"></div>
//             </div>

//             <div className={amclass3}>
//                 <p className="title">YOU PICKED</p>
//                 <p className="title">THE HOUSE PICKED</p>
//                 <div className={`disc2 ${user}`}></div>

//                 <div className={`disc2 ${house}`}></div>
//             </div>
//             <div className={amclass4}>
//                 <p className="title">YOU PICKED</p>
//                 <div></div>
//                 <p className="title">THE HOUSE PICKED</p>
//                 <div className={`disc2 ${user}`}></div>
//                 <div className="result">
//                     <p>{winner}</p>
//                     <div className="begin" onClick={handleButton}>PLAY AGAIN</div>
//                 </div>
//                 <div className={`disc2 ${house}`}></div>
//             </div>
//         </section>
//     )
// }
