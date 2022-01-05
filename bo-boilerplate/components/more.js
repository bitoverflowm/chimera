import React from 'react';

import Card from './utility/card';

const More = props => {

    const mediaData = [
        {
            'title' : 'BitOverflowTV',
            'tags' : ['Crypto', 'Blockchain', 'Web3', 'AI/ML', 'Robotics', 'Quantum Computing'],
            'subTitle': 'twitch.tv/bitoverflowt',
            'desc' : 'Watch @MisterrPink1 and @EduardoCortes live on Twitch. Follow along as the BitOverflow team shares knowledge, build processes, company and project updates. BitOverflow has and continues to work on software, hardware, business and everything in between.',
            'action' : 'https://www.twitch.tv/bitoverflowt/',
            'asset' : '../public/videos/background0.mp4'
        },
        {
            'title' : 'Nasdaq: TradeTalks',
            'tags' : ['Crypto', 'Blockchain', 'Web3'],
            'subTitle': '#Trade Talks',
            'desc' : 'Watch as Rikesh (@MisterrPink1), Cofounder of BitOverflow and previously CTO of Blockparty, sits down with Jill Malandrino, Global Markets Reporter, at the Nasdaq MarketSite, Times Square, New York.',
            'action' : 'https://www.youtube.com/watch?v=W3FR0QhB0Bw',
            'asset' : '../public/videos/press/media0.mp4'
        },
        {
            'title' : 'Solving Digital Asset Transfers',
            'tags' : ['Crypto', 'Blockchain', 'Web3'],
            'subTitle': 'Introducing Ethereum Quantum Protocols',
            'desc' : 'An Introduction to BitOverflow\'s Thesis on how an Ethereum Quantum Protocol Could Revolutionize the Movement of Digital Assets.',
            'action' : 'https://medium.com/@goblockparty/introducing-ethereum-quantum-protocols-solving-digital-asset-transfers-73098bc9f3b8',
            'asset' : '../public/videos/press/media1.mp4'
        },
        {
            'title' : 'VerdeBlocks for Sustainable Power',
            'tags' : ['Crypto', 'Blockchain', 'Web3', 'Clean Energy', 'Sustainability', 'Energy and Power', 'Infrastucture'],
            'subTitle': 'American PowerNet',
            'desc' : 'VerdeBlocks makes wholesale renewable electricity accessible.',
            'action' : 'https://www.americanpowernet.com/verde-blocks/',
            'asset' : '../public/videos/press/media2.mp4'
        },
        {
            'title' : 'Mariott Data Breach',
            'tags' : ['Cyber Security'],
            'subTitle': 'Cheddar TV',
            'desc' : 'Watch Rikesh (@MisterrPink1) provide his insights on the Mariott Data Breach',
            'action' : 'https://www.dailymotion.com/video/x6y4w3n',
            'asset' : '../public/videos/press/media2.mp4'
        },
        {
            'title' : 'VentureBeat',
            'tags' : ['Crypto', 'Blockchain', 'Web3', 'Bitcoin'],
            'subTitle': 'Why the crypto market dropped 15% in an hour',
            'desc' : 'Rikesh (@MisterrPink1): Within one brutal hour yesterday, Bitcoin’s price plummeted by around $800. The coin is trading under $5,800 for the first time since its October 2017 boom, and cryptocurrency investors are hurting on a global scale.',
            'action' : 'https://venturebeat.com/2018/11/15/why-the-cryptocurrency-market-lost-15-of-its-value-in-an-hour/',
            'asset' : '../public/videos/press/media2.mp4'
        },
        {
            'title' : 'BestLife',
            'tags' : ['Crypto', 'Blockchain', 'Web3', 'Music', 'Live Events'],
            'subTitle': 'Best Life Festival Recap',
            'desc' : 'Rikesh (@MisterrPink) and Eduardo helped found BestLife Music Festival with Blockparty. The first Music Festival on the Blockchain. Watch the recap video. ...with performances by H.E.R., Ella Mai, Xavier Omär, Snoh Aalegra, Tobi Lou and more 🎵Nohemy - Bossy  🎥Beyond The Pines Productions, Inc.',
            'action' : 'https://www.youtube.com/watch?v=8moEuZrVPvs',
            'asset' : '../public/videos/press/media2.mp4'
        }
    ]

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