/* eslint-disable react/prop-types */

import Star, { StarFill } from "./icons/icons";

export function Card({ coffies }) {
    return (
        <ul className="ul">
        {coffies.map((coffee) => (
                <section key={coffee.id} className="w-full m-auto justify-center flex flex-col">
                    {coffee.popular === true ? 
                    <p className="text-black bg-yellow relative top-8 left-3 w-20 h-6 rounded-lg text-center align-middle">popular</p> : 
                    ''}
                    <li className="w-full m-auto flex flex-col">
                        <img className="rounded-xl aspect-[16/9]" src={coffee.image} alt="cafe" />
                        <li className="mt-3 mb-3 list">
                            <h6 className="text-white text-base">{coffee.name}</h6>
                            <h6 className="bg-green relative text-black w-12 h-6 rounded-lg text-xs text-center align-middle">{coffee.price}</h6>
                        </li>
                        <li className="flex mb-7">
                            {coffee.rating >= 1 ? <StarFill /> : <Star /> }
                            {coffee.rating < 1 ?
                            <p className="text-white pt-1">{coffies.rating}<span className="text-gray">({coffee.votes} votes)</span></p> :
                            <p className="text-white pt-1">{coffies.rating}<span className="text-gray">({coffee.votes} votes)</span></p>}
                            {coffee.available ? '': <p className="text-red mt-1.5 ml-10 md:ml-18">Sold out</p> }
                        </li>
                    </li>
                </section>
            ))
        }
    </ul>
    )
}


