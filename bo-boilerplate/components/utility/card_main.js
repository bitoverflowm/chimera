import React, { useState, useEffect } from "react";
import Emoji_Engine from "../emoji_engine";



const CardM = props => {
    const [refReplace, setRefReplace] = useState();
    const data = props.data;

    

    useEffect(()=> {
        if(data.title === "VerdeBlocks"){
            setRefReplace("https://www.verdeblocks.com/");
        }else if(data.title === "Bazaar"){
            setRefReplace("https://www.bazaar.farm/");
        }else{
            setRefReplace(data.action);
        }
    },[data])

    return (
        <a href={refReplace} target="_blank" rel="noopener noreferrer"
           className="p-4 m-1 sm:p-6 mt-6 text-left border sm:w-96 rounded-xl hover:text-slate-50 hover:bg-slate-900 focus:text-slate-50 focus:bg-slate-900 ">
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