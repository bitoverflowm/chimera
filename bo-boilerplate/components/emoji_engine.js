import React from 'react';


const Emoji_Engine = props => {


    const emoji_dict = {
        'unicorn' : '🦄',
        'VerdeBlocks' : '🐳',
        'Bazaar' : '🍆',
        'Defungable' : '🧁',
        '0_o' : '🧬',
        'The Nepal Initiative' : '🌌',
        'BudOverflow' : '👽',
        'BitOverflowTV' : '👀',
        'Nasdaq: TradeTalks' : '🤙',
        'Solving Digital Asset Transfers' : '👩‍💻',
        'VerdeBlocks for Sustainable Power' : '🧊',
        'EventMe': '🎉',
        'PayUp': '💸',
        'Mariott Data Breach' : '👾',
        'VentureBeat': '💩',
        'BestLife': '🌈',
        'quantum': '🕉️',
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
