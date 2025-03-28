import React from "react"
import Image from "../Image/Image.jsx"
import { formatTimeAgo } from "../../helpers/formatTimeAgo.js"

const NewsBanner = ({ item }) => {
  return (
    <div className="flex flex-col w-full  gap-[12px]">
      <Image image={item?.image} />
      <h3 className="font-custom font-bold text-base">{item.title}</h3>
      <p className="text-xs text-primary ">
        {formatTimeAgo(item.published)} by {item.author}
      </p>
    </div>
  )
}

export default NewsBanner
