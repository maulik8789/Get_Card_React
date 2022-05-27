import React, { useState, useRef } from "react";
import axios from "axios";
// import FetchCardAuto from "./FetchCardAuto";

const BASE_URL = "http://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1";

/** Deck Component --- shows info from DoC API */

function GetCard() {
  const [deck, setDeck] = useState(null);
//   const cardResult = useRef();
  const [card, setCard] = useState('');
//   const timerId = useRef();

//   function search(username) {
    // setUsername(username);
//   };

  // this is called after component is first added to DOM
  // and every time username changes
    async function fetchDeck() {
      const cardResult = await axios.get(`${BASE_URL}`);
      setDeck(cardResult.data.deck_id);
    }

    async function fetchCard() {
        const cardDraw = await axios.get(`http://deckofcardsapi.com/api/deck/${deck}/draw/?count=1`);
        setCard(cardDraw.data.cards[0].image);
        // console.log(typeof(card))
    }

    async function fetchCard() {
        try{
            const cardDraw = await axios.get(`http://deckofcardsapi.com/api/deck/${deck}/draw/?count=1`);
            setCard(cardDraw.data.cards[0].image);
        }
        catch(e){
            alert("No More Card!")
        }
        
        
        // console.log(typeof(card))
    }

    function fetchCardAuto() {
        let cardCount = 0;
        let autoCard = setInterval(async () => {
           try{
            const cardDraw = await axios.get(`http://deckofcardsapi.com/api/deck/${deck}/draw/?count=1`);
            cardCount += 1;
            setCard(cardDraw.data.cards[0].image);
           }
           catch(e){
            clearInterval(autoCard);
            console.log("No more Card!");
           }
            
        }, 10);
    
      }

  return (
    <div>
        <button onClick={fetchDeck}>Get Deck</button>
      {/* <DeckSearchForm search={search} /> */}
      {deck ? (<h2>Deck is Ready</h2>) : <h2>loading</h2>}
      {deck ? (<button onClick={fetchCard}>Draw a Card</button>) : <h2></h2>}
      {deck ? (<button onClick={fetchCardAuto}>Automatic</button>) : <h2></h2>}
      <br></br>
      {card ? (<img src={card} alt='card'/>) : <h2></h2>}
      
    </div>
  );
};

export default GetCard;
