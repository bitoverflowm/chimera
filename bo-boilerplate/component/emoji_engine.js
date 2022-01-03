import React from 'react';


const Emoji_Engine = props => {
    const emoji_dict = {
        'unicorn' : '🦄',
        'verdeblocks' : '🐳',
        'bazaar' : '🍆',
        'defungable' : '🧁',
        'zero' : '🧬',
        'nepal' : '🌌',
        'budoverflow' : '👽'
    }

    return (
        <div className = "emoji">
            <span         
            role="img"
            aria-label={props.label}
            className='text-3xl'
            >
                {emoji_dict[props.label]}
            </span>
        </div>
    )
}

export default Emoji_Engine;
