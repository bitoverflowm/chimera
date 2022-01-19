import React from 'react';

import Card from './utility/card';

const More = props => {

    return (
        <div >
            <div className="relative text-black text-6xl font-bold bg-transparent mt-6">
              MORE.
            </div>
            <div className='flex flex-wrap items-center justify-around max-w-7xl py-6'>
                {mediaData.map( data => <Card data={data} key={data.title} />)}
            </div>
        </div>
    )
}

export default More;