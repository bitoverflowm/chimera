import React from 'react';


const Emoji_Engine = props => {
    const emoji_dict = {
        'unicorn' : '🦄',
        'verdeblocks' : '🐳',
        'bazaar' : '🍆',
        'defungable' : '🧁',
        'zero' : '🧬',
        'nepal' : '🌌',
        'budoverflow' : '👽',
        'BitOverflowTV' : '👀',
        'Nasdaq: TradeTalks' : '🤙',
        'Solving Digital Asset Transfers' : '👩‍💻',
        'VerdeBlocks for Sustainable Power' : '🧊',
        'Mariott Data Breach' : '👾',
        'VentureBeat': '💩',
        'BestLife': '🌈'
    }

    return (
        <div className = "emoji">
            <span         
            role="img"
            aria-label={props.label}
            className={props.size ? props.size : 'text-3xl'}
            >
                {emoji_dict[props.label]}
            </span>
        </div>
    )
}

export default Emoji_Engine;
