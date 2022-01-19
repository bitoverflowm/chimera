import React from "react";


const CardM = props => {


    const data = props.data;

    return (
        <a target="_blank" rel="noopener noreferrer"
           className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-slate-50 hover:bg-slate-900 focus:text-slate-50 focus:bg-slate-900 ">
         <h3 className="text-2xl font-bold">{data.title}</h3>
            <p>{data.subtitle}</p>
            <p>
              <code>{data.desc}</code>
            </p>

        </a>
    )
        
}

export default CardM;