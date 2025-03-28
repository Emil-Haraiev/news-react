import React from 'react';
import {formatTimeAgo} from "../../helpers/formatTimeAgo.js";

const NewsItem = ({item}) => {
    return (
        <li className="flex w-full gap-3">
            <div className="w-16 h-16 bg-customBackground bg-center bg-cover flex-shrink-0" style={{backgroundImage: `url(${item.image})`}}>

            </div>
            <div className="flex flex-col gap-[8px]">
                <h3 className="text-sm">{item.title}</h3>
                <p className="text-customPrimary text-xs">
                    {formatTimeAgo(item.published)} by {item.author}
                </p>
            </div>
        </li>
    );
};

export default NewsItem;