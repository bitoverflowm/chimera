import React from "react";
import Tag_Engine from "./tag_engine";
import Emoji_Engine from "../emoji_engine";


const Card = props => {

    const data = props.data;

    return (
        <div href={data.action}
           className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600">
            <Emoji_Engine label={data.title} />
            <p>{data.subTitle}</p>
            <h3 className="text-2xl font-bold">{data.title} &rarr;</h3>
            <p>
              <code>{data.desc}</code>
            </p>
            <Tag_Engine tags={data.tags} />

        </div>
    )
        
}


export default Card;