import React from "react";
import Emoji_Engine from "../emoji_engine";



const CardM = props => {


    const data = props.data;

    return (
        <a href="" target="_blank" rel="noopener noreferrer"
           className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-slate-50 hover:bg-slate-900 focus:text-slate-50 focus:bg-slate-900 ">
         <Emoji_Engine label={data.title}/>
         <h3 className="text-2xl font-bold">{data.title} &rarr;</h3>
         <p className="mt-4 text-xl">
            <code>{data.subtitle}</code>
          </p>
              <p>{data.desc}</p>
        </a>
    )
        
}

export default CardM;