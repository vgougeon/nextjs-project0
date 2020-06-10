import App from 'next/app';
import {wrapper} from '../redux/store';

import Head from 'next/head'
import Layout from '../components/layout/layout';

import '../styles/master.scss';
import 'tailwindcss/utilities.css';
import { AnimatePresence } from 'framer-motion';

const moment = require("moment");
moment.locale("fr");
class MyApp extends App {

    static async getInitialProps({Component, ctx}) {
        const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};
        console.log("c'est parti")
        if(ctx.req){
            const res = await fetch(`http://127.0.0.1:3001/me`, {
                method: 'POST',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json',
                    Cookie: ctx.req.headers.cookie
                },
            })

            const data = await res.json()
            console.log(data)
            if(data.success)
                ctx.store.dispatch({type: 'SET_AUTH', user: data.data})
        }
        return {pageProps: pageProps};
    }

    render() {
        const {Component, pageProps, router} = this.props;
        return (
            <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link href="shttps://cdnjs.cloudflare.com/ajax/libs/tailwindcss/1.4.6/tailwind.min.css" rel="stylesheet" />
            </Head>
            <Layout />
            <AnimatePresence exitBeforeEnter>
            <Component {...pageProps} key={router.route}/>
            </AnimatePresence>
            </>
        )
    }
}

export default wrapper.withRedux(MyApp);