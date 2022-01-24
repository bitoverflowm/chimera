import Emoji_Engine from "../components/emoji_engine";
import More from "../components/more";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <header className="relative flex items-center justify-center h-screen mb-12 overflow-hidden">
        <div className="flex flex-col">
          <div className="relative z-30 text-white text-6xl font-bold bg-transparent">
              BitOverflow
          </div>
          <div className="relative z-30 text-white text-6xl font-bold bg-transparent">
              Built Different.
          </div>
        </div>
        <video autoPlay loop muted className="absolute z-10 w-auto min-w-full min-h-full max-w-none" >
          <source src="/videos/background2-block-0.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <link rel="icon" href="/favicon.ico" />
      </header>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <div className="flex relative mt-6 text-5xl">
            <Emoji_Engine label="unicorn" size='text-5xl'/>
            <div className="text-black font-bold mt-2">
              CURRENT WORK.
            </div>
        </div>    
        <div className="flex flex-wrap items-center justify-around max-w-7xl mt-6 sm:w-full">
          <Link href="https://www.verdeblocks.com/">
            <a 
            className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600">
              <Emoji_Engine label="verdeblocks"/>
              <h3 className="text-2xl font-bold">VerdeBlocks &rarr;</h3>
              <p className="mt-4 text-xl">
                <code>The future of energy</code>
              </p>
              <p>An energy trading platform utilizing decentralized infrastructure to ensure instant, secure, guaranteed payment upon delivery.
              </p>
            </a>
          </Link>

          <a href="" 
          className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600">
            <Emoji_Engine label="defungable"/>
            <h3 className="text-2xl font-bold">Defungable &rarr;</h3>
            <p className="mt-4 text-xl">
              <code>The Thanos Gauntlet for NFTs</code>
            </p>
            <p>DeFunged puts creators, artists, musicians, fans and community at the center of the NFT universe.</p>
          </a>

          <a
            href=""
            className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
          >
            <Emoji_Engine label="budoverflow"/>
            <h3 className="text-2xl font-bold">BudOverflow &rarr;</h3>
            <p className="mt-4 text-xl">
              <code>Crafting, curating and cultivating cannabis</code>
            </p>
            <p>Find the cannabis for you. Research backed. BudOverflow is the ultimate tool to exploring the world of cannabis</p>
          </a>

          <a
            href=""
            className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
          >
            <Emoji_Engine label="zero"/>
            <h3 className="text-2xl font-bold">0_o &rarr;</h3>
            <p className="mt-4 text-xl">
              <code>A new frontier for healthcare</code>
            </p>
            <p>
              All health data combined in one place. Get ultimate precision in healthcare optimization using cutting edge scientific research.
            </p>
          </a>

          <a
            href=""
            className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
          >
            <Emoji_Engine label="bazaar"/>
            <h3 className="text-2xl font-bold">Bazaar &rarr;</h3>
            <p className="mt-4 text-xl">
              <code>Global, decentralized, infinitely scalable, sustainable food supply</code>
            </p>
            <p>
              Bazaar solves a global problem with a local solution. Global network of local food producers will eliminate the need for a bloated inefficient supply chain
            </p>
          </a>

          <a
            href=""
            className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
          >
            <Emoji_Engine label="nepal"/>
            <h3 className="text-2xl font-bold">The Nepal Initiative &rarr;</h3>
            <p className="mt-4 text-xl">
              <code>Liberating Nepali infrastructure through Web3</code>
            </p>
            <p>
              Nepali technology and economic development has been stymied in the past due to politics. The Nepal Initiative utilizes web3 in all its capacities to bring Nepal to the forefront of the web3 revolution.
            </p>
          </a>
          <a
            href=""
            className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
          >
            <Emoji_Engine label="EventMe"/>
            <h3 className="text-2xl font-bold">EventMe &rarr;</h3>
            <p className="mt-4 text-xl">
              <code>Fast, simple and efficient event hosting.</code>
            </p>
            <p>
              EventMe makes hosting a party fun and easy. Create, invite and manage everything for your next event with a few clicks.
            </p>
          </a>
          <a
            href=""
            className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
          >
            <Emoji_Engine label="PayUp"/>
            <h3 className="text-2xl font-bold">PayUp &rarr;</h3>
            <p className="mt-4 text-xl">
              <code>Decentralize crypto payments anywhere in the world</code>
            </p>
            <p>
              PayUp bring crypto payments to every online and physical store near you. Our state of the art algorithm allows users to pay in crypto and venders to get paid in their local currency.
            </p>
          </a>
        </div>
        <More />
      </main>
      
      

      <footer className="flex items-center justify-center w-full h-24 border-t">

      </footer>
    </div>
  )
}
