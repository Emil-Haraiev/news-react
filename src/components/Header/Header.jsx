import React from 'react';
import {formatDate} from "../../helpers/fortmatDate.js";
import {useState, useEffect} from "react";
const Header = () => {
    const [currentDate, setCurrentDate] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentDate(new Date());
        },1000)
        return () => clearInterval(interval);
    })
    return (
        <header className="flex flex-col w-full p-[12px] px-[24px] bg-white border-b border-[#F2F4F5]  gap-[12px]">
            <h1 className="font-custom font-bold text-3xl">REACT NEWS</h1>
            <p className="text-base">{formatDate(new Date(currentDate))}</p>
        </header>
    );
};

export default Header;