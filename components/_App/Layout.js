import React from 'react'
import Head from "next/head"
import GoTop from './GoTop'

const Layout = ({ children }) => {
    return(
        <React.Fragment>
            <Head>
                <title>Metamania</title>
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                <meta name="description" content="metamania - Learn new things" />
                <meta name="og:title" property="og:title" content="metamania"></meta>
                <meta name="twitter:card" content="metamania - Learn new things"></meta>
                <link rel="canonical" href="https://metamania.co/"></link>
            </Head>

            {children}

            <GoTop scrollStepInPx="100" delayInMs="10.50" />
        </React.Fragment>
    );
}

export default Layout;