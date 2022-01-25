import { useEffect } from 'react';
import { useRouter } from 'next/router';

import * as ga from '../lib/ga';

import '../styles/globals.css';


function App({ Component, pageProps }){
    const router = useRouter();

    useEffect(() => {
        const handleRouteChange = (url) => {
            ga.pageview(url)
        }
        //subscribe to router changes and log page views
        router.events.on('routeChangeComplete', handleRouteChange)

        //If the conponent is unmountedd, unsubscribe
        return () => {
            router.events.off('routeChangeComplete', handleRouteChange)
        }
    }, [router.events])

    return <Component {...pageProps} />
}

export default App;