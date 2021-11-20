import React from 'react'
import Head from "next/head"

const Layout = ({ children }) => {
    return(
        <React.Fragment>
            <Head>
                <title>WITH-NEXT-REDUX-SAGA-WRAPPER-REDUX-PERSIST</title>
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                <meta name="description" content="metamania - Learn new things" />
                <meta name="og:title" property="og:title" content="metamania"></meta>
                <meta name="twitter:card" content="metamania - Learn new things"></meta>
                <link rel="canonical" href="https://metamania.co/"></link>
            </Head>

            {children}

        </React.Fragment>
    );
}

export default Layout;