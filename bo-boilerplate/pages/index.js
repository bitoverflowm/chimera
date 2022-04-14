import Emoji_Engine from "../components/emoji_engine";
import More from "../components/more";
import OverView from "../components/overview";

export async function getServerSideProps(){

  const res = await fetch('https://mighty-anchorage-30412.herokuapp.com/api/bit-overflows')
  //const res = await fetch('http://localhost:1337/api/verdeblocks/')
  const overViewData = await res.json()

  //const res2 = await fetch('http://localhost:1337/api/verdeblocks/')
  const res2 = await fetch('https://mighty-anchorage-30412.herokuapp.com/api/bit-overflow-mores/')
  const moreData = await res2.json()

  return { props: {overViewData, moreData}}
}

const Home = ({overViewData, moreData}) => {

  return (
    <div>
      <header className="relative flex items-center justify-center h-screen mb-12 overflow-hidden">
        <div className="absolute left-10 top-10 z-30 text-white text-4xl font-bold">
            BitOverflow
        </div>
        <div className="grid grid-cols-1">
          <div className="relative z-30 text-white text-9xl font-extrabold">
              Built
          </div>
          <div className="relative z-30 text-white text-9xl font-extrabold">
              Different.
          </div>
        </div>
        
        <video autoPlay loop muted playsInline className="absolute z-10 w-auto min-w-full min-h-full max-w-none" >
          <source src="/videos/background2-block-0.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <link rel="icon" href="/favicon.ico" />
      </header>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <div className="relative mt-6 p-16 text-6xl text-left">
            <div className="text-black font-extrabold mt-2">
              BitOverflow is the future.
            </div>
            <div className="text-black mt-2">
            <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-pink-400 to-red-600">EVERYTHING</span> <span className="underline"> hand-crafted</span>
            </div>
            <div className="text-black mt-2">
              <span className="font-extrabold">EVERYTHING</span> <span className="text-transparent bg-clip-text bg-gradient-to-br from-nft-purple to-nft-cotton font-extrabold">in-house </span>
            </div>
            <div className=" mt-2 font-extrabold text-8xl text-transparent bg-clip-text bg-gradient-to-br from-pink-400 to-red-600">
             Built Different.
            </div>
        </div>
        <div className="grid grid-cols-1 mt-6 p-4 m-4">
            <div className="font-bold mt-2 text-4xl">
              Our Focus Areas
            </div>
            <div className="flex flex-wrap text-lg font-bold place-content-center">
              <div className="bg-gradient-to-br rounded-lg p-2 m-2 from-nft-purple to-nft-cotton hover:from-nft-blue hover:to-nft-glow hover:text-transparent hover:bg-clip-text ">Sustainability</div>
              <div className="bg-gradient-to-br rounded-lg p-2 m-2 from-nft-purple to-nft-cotton hover:from-nft-blue hover:to-nft-glow hover:text-transparent hover:bg-clip-text ">Decentralization</div>
              <div className="bg-gradient-to-br rounded-lg p-2 m-2 from-nft-purple to-nft-cotton hover:from-nft-blue hover:to-nft-glow hover:text-transparent hover:bg-clip-text ">Local Community Development</div>
              <div className="bg-gradient-to-br rounded-lg p-2 m-2 from-nft-purple to-nft-cotton hover:from-nft-blue hover:to-nft-glow hover:text-transparent hover:bg-clip-text ">AI</div>
              <div className="bg-gradient-to-br rounded-lg p-2 m-2 from-nft-purple to-nft-cotton hover:from-nft-blue hover:to-nft-glow hover:text-transparent hover:bg-clip-text ">Health</div>
              <div className="bg-gradient-to-br rounded-lg p-2 m-2 from-nft-purple to-nft-cotton hover:from-nft-blue hover:to-nft-glow hover:text-transparent hover:bg-clip-text ">Crypto</div>
              <div className="bg-gradient-to-br rounded-lg p-2 m-2 from-nft-purple to-nft-cotton hover:from-nft-blue hover:to-nft-glow hover:text-transparent hover:bg-clip-text ">NFTs</div>
              <div className="bg-gradient-to-br rounded-lg p-2 m-2 from-nft-purple to-nft-cotton hover:from-nft-blue hover:to-nft-glow hover:text-transparent hover:bg-clip-text ">VR</div>
            </div>     
        </div>

        <div className="flex relative mt-6 text-5xl">
            <div className="text-black font-bold mt-2">
              CURRENT WORK.
            </div>
        </div>    
        <OverView data={overViewData.data}/>
        <More data={moreData.data}/>
      </main>
      
      

      <footer className="flex items-center justify-center w-full h-24 border-t">

      </footer>
    </div>
  )
}

export default Home;
