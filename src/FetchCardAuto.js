// import React, { useState, useEffect, useRef } from "react";
// import axios from "axios";
// import GetCard from "./GetCard";


// function FetchCardAuto() {
//   const timerId = useRef();
//   let [count, setCount] = useState(0);

  
//   useEffect(async function setCounter() {
//     console.log("EFFECT RAN!");
//     timerId.current = setInterval(() => {
//         const cardDraw = await axios.get(`http://deckofcardsapi.com/api/deck/${deck}/draw/?count=1`);
//         setCard(cardDraw.data.cards[0].image);
//     }, 1000);

//     return function cleanUpClearTimer() {
//       console.log("Unmount ID", timerId.current);
//       clearInterval(timerId.current);
//     };
//   }, [timerId]);

//   return (
//     <div>
//       <h1>{count}</h1>
//       <p>(Timer id is {timerId.current}.)</p>
//     </div>
//   );
// }

// export default FetchCardAuto;