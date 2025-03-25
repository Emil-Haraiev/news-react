import React, {useEffect, useState} from 'react';
import NewsBanner from "../../components/NewsBanner/NewsBanner.jsx";
import {getNews} from "../../api/apiNews.js";
const Main = () => {
const [news, setNews] = useState([]);
    useEffect(() => {
        const fetchNews = async () => {
            try {
                const response = await getNews();
                setNews(response.news);
            } catch (err) {
                console.error( err);
            }
        };

        fetchNews();

    }, []);
    console.log(news);
    return (
        <main className=" flex w-full flex-col gap-8">
            {news.length > 0 ? <NewsBanner item={news[0]} /> : null}
        </main>
    );
};

export default Main;