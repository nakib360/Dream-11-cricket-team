import { FaFlag } from "react-icons/fa6";
import { FaUserAlt } from "react-icons/fa";
import React from 'react';

const Player = ({ players, handSelectPlayers }) => {
    const {name, country, role, rating, hand, price, image} = players;
    return (
        <div className='border border-slate-400 rounded-xl px-6 py-6'>
            <img className='w-full h-[250px] object-cover rounded-xl mb-5' src={image} alt="" />
            <p className="flex items-center gap-2 text-xl font-bold text-slate-700 mb-5"><FaUserAlt />{name}</p>
            <div className="flex justify-between items-center mb-5">
                <p className="flex items-center text-slate-400 gap-2"><FaFlag />{country}</p>
                <div className="px-2 py-2 bg-slate-200 rounded-xl text-sm">{role}</div>
            </div>
            <hr className="border-0 border-b border-b-slate-200 mb-5"  />
            <p className="text-sm font-bold mb-2">Rating: {rating}</p>
            <div className="flex justify-between items-center text-sm mb-3">
                <p className="font-bold">Hand</p>
                <p className="text-slate-400">{hand}</p>
            </div>
            <div className="flex justify-between items-center">
                <p className=" font-bold">Price: ${price}</p>
                <button onClick={() => handSelectPlayers(players)} className="px-2 py-2 border border-slate-300 rounded-xl hover:bg-slate-300">Choose Player</button>
            </div>
        </div>
    );
};

export default Player;