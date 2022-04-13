import React from 'react';


const Tag_Engine = props => {

    const tag_dict = {
        'Crypto' : 'bg-violet-800',
        'Blockchain' : 'bg-pink-800',
        'Web3' : 'bg-blue-800',
        'AI/ML' : 'bg-slate-900',
        'Robotics' : 'bg-stone-600',
        'Quantum Computing' : 'bg-green-800',
        'Clean Energy' : 'bg-cyan-800',
        'Sustainability' : 'bg-emerald-900',
        'Energy and Power' : 'bg-fuchsia-900',
        'Infrastucture' : 'bg-indigo-900',
        'Cyber Security' : 'bg-cyan-500',
        'Bitcoin' : 'bg-orange-500',
        'Music' : 'bg-indigo-600',
        'Live Events' : 'bg-violet-500'
    }

    return (
            <div
            className='flex flex-wrap pt-1'
            >
                {props.tags.map( tag => <div 
                    key={Math.random()} 
                    className={`px-3 py-2.5 ml-1 mt-1 text-sm ${tag_dict[tag]} text-white rounded-3xl`}>
                        {tag}
                    </div>)}
            </div>
    )
}

export default Tag_Engine;
