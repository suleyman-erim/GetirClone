/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import cardsData from 'api/cards';

export default function Cards(){

    const [cards, setCards] = useState([]);

    useEffect(() => {
        //data isteği
        setCards(cardsData)
    },[])

   return(
    <div className="grid grid-cols-3 gap-x-4">
        {cards.length && cards.map(card =>(
            <div className=" bg-white p-14 rounded-lg shadow-sm flex flex-col items-center">
                <img className="mb-6" src={card.image}></img>
                <h6 className="font-semibold text-lg text-primary-brand-color">{card.title}</h6>
                <p className=" text-sm  text-gray-700 mt-2">{card.description}</p>
            </div>
        ))}
    </div>
    )
}
 