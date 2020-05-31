import '../styles/master.scss';
import 'tailwindcss/utilities.css';
import Head from 'next/head'
import Layout from '../components/layout/layout';
function MyApp({ Component, pageProps, data }) {
    return <>
    <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link href="shttps://cdnjs.cloudflare.com/ajax/libs/tailwindcss/1.4.6/tailwind.min.css" rel="stylesheet" />
    </Head>
    <Layout />
    <section id="main">
    <Component {...pageProps} />
    </section>
    </>
}

export async function getServerSideProps() {
    // Fetch data from external API
    // const res = await fetch(`https://njak.fr/api/getGames`, { method: 'POST'})
    // const data = await res.json()
    // console.log(data)
    console.log("Bonjour.")
    let data = { name: "Vincent", lastName:"GOUGEON"}
    // Pass data to the page via props
    return { props: data }
}

export default MyApp