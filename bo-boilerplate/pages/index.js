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
