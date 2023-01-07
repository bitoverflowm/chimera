import {useState} from "react";
import OverView from "../components/overview";
import Chat from "../components/chat";

export async function getStaticProps(){
  const overViewData = {
    'data' : [
      {
      'id': 0,
      'attributes': {
        'title': "VerdeBlocks",
        'subtitle': "The Future of Clean Energy",
        'desc': "Any business can now switch their consumption to 100% renewable energy at the click of a button. No need to invest millions in installing solar panels, or setting up a distant solar farm. As long as you are connected to the grid, you can consume 100% veriafiably clean energy.",
        'action': "https://www.verdeblocks.com/"
      }
    },
    {
      'id': 1,
      'attributes': {
        'title': "Bazaar",
        'subtitle': "Get Your Groceries Directly from Your Local Farmer",
        'desc': "The current commercial food supply system is not sustainable. Local solutions to global problems, like supporting local farmers, can help save the planet by reducing carbon emissions. By buying from your local farmer, you not only support small businesses, but also make a positive impact on the environment.",
        'action': "https://www.bazaar.farm/"
      },
    },
    {
      'id': 2,
      'attributes': {
        'title': "DiFunk",
        'subtitle': "NFTs on NFTs on NFTs",
        'desc': "Actually decentralized. Actually built properly. All mediums of NFTs. The easiest minter in the world. The easiest P2P NFT transfers and escrow mechanism. All actually decentralized. The bestest, the easiest the mostest, betterest NFT platform there ever is, has been and will be.",
        'action': "https://www.bazaar.farm/"
      },
    },
    {
      'id': 3,
      'attributes': {
        'title': "The Quantum Initiative",
        'subtitle': "Quantum physics not quantum computers",
        'desc': "Forging our independent path towards Quantum Supremacy.",
        'action': "https://www.bazaar.farm/"
      },
    },
    {
      'id': 4,
      'attributes': {
        'title': "0_o: TheYouuProject",
        'subtitle': "Take your life, your health and well being to the next level",
        'desc': "Headspace but for research backed protocols proposed by geniuses such as Dr. Andrew Huberman, Dr. Rhonda Patrick, Dr David Sinclair. Bite sized, simplified and developed with the ultimate user friendliness in mind. Try it out, and tell us your life han't improved",
        'action': "https://www.bazaar.farm/"
      }
    },
    {
        'id': 5,
        'attributes': {
          'title': "BudOverflow",
          'subtitle': "The Craft of Cannabis, and soon psychedelics",
          'desc': "We never know how what we are smoking is going to make us feel. Until now. The #1 most trusted platform for you to learn about what you are consuming, how it will make you feel, and whether it is any good at all. Give your feedback and earn tokens!",
          'action': "https://www.bazaar.farm/"
        }
    },
    {
      'id': 6,
      'attributes': {
        'title': "Hacking 101",
        'subtitle': "From N00b to Omnipotent Cyber-Overlord",
        'desc': "Take your hacking skills to the next level with this comprehensive course. From beginner to god tier, you'll learn the ins and outs of computer systems, security, and ethical hacking. Gain hands-on experience with the tools and techniques used by the pros, and become an omnipotent cyber-overlord in no time!",
        'action': "https://www.bazaar.farm/"
      }
    },
    {
      'id': 7,
      'attributes': {
        'title': "0_o: Pets",
        'subtitle': "Biohacking but for your pets",
        'desc': "Are you tired of relying on witch doctors and voodoo magic to keep your furry friend healthy? Look no further! Our platform uses actual science to help you optimize your pet's health. With our cutting-edge algorithms and advanced data analysis, you'll be able to give your pet the best care possible – no sacrifices to the pet health gods required.",
        'action': "https://www.bazaar.farm/"
      }
    },
    {
      'id': 8,
      'attributes': {
        'title': "LetsSpar",
        'subtitle': "Find someone to spar with any time any day",
        'desc': "Are you tired of punching and kicking the air (and maybe a few unsuspecting bystanders)? Look no further! Our platform connects you with other boxing and kickboxing enthusiasts who are looking for sparring partners. So why wait? Sign up today and start pummeling your way to victory (or at least a good sweat). Just remember to bring your own gloves – we're not responsible for any lost teeth or black eyes.",
        'action': "https://www.bazaar.farm/"
      }
    },
    {
      'id': 9,
      'attributes': {
        'title': "FindMeAFarmersMarket",
        'subtitle': "Just find me a farmers market closest to me",
        'desc': "No explanation needed here.",
        'action': "https://www.bazaar.farm/"
      }
    },
    {
      'id': 10,
      'attributes': {
        'title': "PetNFT",
        'subtitle': "Turn your pet into an NFT",
        'desc': "Are you tired of your pet being just another mundane, non-fungible animal? Well, fear not! Our platform turns your beloved companion into a one-of-a-kind, highly-coveted NFT. Imagine your pet's face on trading cards, t-shirts, and even coffee mugs. The possibilities are endless! So why wait? Sign up today and start cashing in on your pet's fame (or at least their cuteness).",
        'action': "https://www.bazaar.farm/"
      }
    },
  ]}

  return { props: {overViewData}}
}

const Home = ({overViewData}) => {
  const [visible, setVisible] = useState();

  const clickHandler = () => {
    setVisible(!visible);
  }


  return (
    <div className="relative">
      {visible && <div className={'fixed right-3 bottom-4 h-auto w-80 sm:w-1/3 z-40 bg-white  items-center place-content-center animate-fadeIn'}><div className="p-10"><Chat /></div></div>}
      { visible 
        ? <div onClick={clickHandler} className="fixed bottom-5 right-5 z-50 hover:text-white font-extrabold hover:bg-black rounded-full p-4 opacity-75 cursor-pointer hover:opacity-100 bg-yellow-300 text-black">
        X
          </div>
        : <div onClick={clickHandler} className="fixed bottom-5 right-5 z-30 text-white font-extrabold bg-black rounded-full p-4 opacity-75 cursor-pointer hover:opacity-100 hover:bg-yellow-300 hover:text-black">
        Want to chat?
        </div>
      }
      
      <header className="relative flex items-center justify-center h-screen sm:mb-12 overflow-hidden">
        <div className="absolute sm:left-10 top-10 z-30 text-white text-4xl font-bold">
            BitOverflow
        </div>
        <div className="grid grid-cols-1">
          <div className="relative z-30 text-white text-6xl sm:text-9xl font-extrabold">
              Built
          </div>
          <div className="relative z-30 text-white text-6xl sm:text-9xl font-extrabold">
              Different.
          </div>
        </div>
        
        <video autoPlay loop muted playsInline className="absolute z-10 w-auto min-w-full min-h-full max-w-none" >
          <source src="/videos/background2-block-0.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <link rel="icon" href="/favicon.ico" />
      </header>

      <main className="flex flex-col items-center justify-center sm:px-20 text-center">
        <div className="relative mt-6 sm:p-16 text-xl sm:text-6xl text-left">
            <div className="text-black font-extrabold mt-2">
              BitOverflow is the future.
            </div>
            <div className="text-black mt-2">
              <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-pink-400 to-red-600">EVERYTHING</span> <span className="underline"> hand-crafted</span>
            </div>
            <div className="text-black mt-2">
              <span className="font-extrabold">EVERYTHING</span> <span className="text-transparent bg-clip-text bg-gradient-to-br from-nft-purple to-nft-cotton font-extrabold">in-house </span>
            </div>
            <div className="mt-2 font-extrabold text-3xl sm:text-8xl text-transparent bg-clip-text bg-gradient-to-br from-pink-400 to-red-600">
             Built Different.
            </div>
        </div>
        <div className="w-full sm:w-5/6 my-14 pb-8 sm:p-8 text-sm sm:text-lg font-bold bg-gradient-to-br from-nft-sky to-nft-aqua">
            <div className="font-bold mt-2 text-xl sm:text-4xl text-white p-4">
                Our Focus Areas
            </div>
            <div className="flex place-content-center cursor-pointer sm:font-extrabold ">
              <div className="rounded-full py-2 sm:py-2 px-3 sm:px-5 m-2 bg-white">
                <div className="text-black  hover:bg-gradient-to-br hover:to-nft-sky hover:from-nft-aqua hover:text-transparent hover:bg-clip-text">Sustainability</div>
              </div>
              <div className="rounded-full py-2 sm:py-2 px-3 sm:px-5 m-2 bg-white">
              <div className="text-black  hover:bg-gradient-to-br hover:to-nft-sky hover:from-nft-aqua hover:text-transparent hover:bg-clip-text">Decentralization</div>
              </div>
            </div>
            <div className="flex place-content-center cursor-pointer sm:font-extrabold">
              <div className="rounded-full py-2 sm:py-2 px-3 sm:px-5 m-2 bg-white">
                <div className="text-black  hover:bg-gradient-to-br hover:to-nft-sky hover:from-nft-aqua hover:text-transparent hover:bg-clip-text">Blockchain</div>
              </div>
              <div className="rounded-full py-2 sm:py-2 px-3 sm:px-5 m-2 bg-white">
                <div className="text-black  hover:bg-gradient-to-br hover:to-nft-sky hover:from-nft-aqua hover:text-transparent hover:bg-clip-text">AI</div>
              </div>
              <div className="rounded-full py-2 sm:py-2 px-3 sm:px-5 m-2 bg-white">
                <div className="text-black  hover:bg-gradient-to-br hover:to-nft-sky hover:from-nft-aqua hover:text-transparent hover:bg-clip-text">Health</div>
              </div>        
              <div className="rounded-full py-2 sm:py-2 px-3 sm:px-5 m-2 bg-white">
                <div className="text-black  hover:bg-gradient-to-br hover:to-nft-sky hover:from-nft-aqua hover:text-transparent hover:bg-clip-text">Crypto</div>
              </div>
            </div>
            <div className="flex place-content-center cursor-pointer sm:font-extrabold">
              <div className="rounded-full py-2 sm:py-2 px-3 sm:px-5 m-2 bg-white">
                <div className="text-black  hover:bg-gradient-to-br hover:to-nft-sky hover:from-nft-aqua hover:text-transparent hover:bg-clip-text">NFTs</div>
              </div>
              <div className="rounded-full py-2 sm:py-2 px-3 sm:px-5 m-2 bg-white">
                <div className="text-black  hover:bg-gradient-to-br hover:to-nft-sky hover:from-nft-aqua hover:text-transparent hover:bg-clip-text">VR/AR</div>
              </div>
              <div className="rounded-full py-2 sm:py-2 px-3 sm:px-5 m-2 bg-white">
                <div className="text-black  hover:bg-gradient-to-br hover:to-nft-sky hover:from-nft-aqua hover:text-transparent hover:bg-clip-text">Physics</div>
              </div>
            </div>   
        </div>

        <div className="flex relative mt-6 text-4xl sm:text-8xl">
            <div className="text-black font-extrabold mt-2">
              WORK.
            </div>
        </div>
        <OverView data={overViewData.data}/>
        {/* <More data={moreData.data}/> */}
      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t">

      </footer>
    </div>
  )
}

export default Home;
