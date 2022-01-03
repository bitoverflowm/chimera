import react from "react";

const Card = props => {

    const data = props.data;

    return (
        <a href={data.action}
           className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600">
            <p>{data.subTitle}</p>
            <h3 className="text-2xl font-bold">{data.title} &rarr;</h3>
            <p>
              <code>{data.desc}</code>
            </p>


        </a>
    )
        
}


export default Card;