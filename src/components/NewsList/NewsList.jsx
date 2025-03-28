import React from "react"
import NewsItem from "../NewsItem/NewsItem.jsx"

const NewsList = ({ news }) => {
  return (
    <ul className=" flex flex-col w-full gap-6 ">
      {news.map((item) => {
        return <NewsItem key={item.id} item={item} />
      })}
    </ul>
  )
}

export default NewsList
