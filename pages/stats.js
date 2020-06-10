function Stats(data) {
    return <div>Bonjour, { data.name + " " + data.lastName }</div>
}

export async function getServerSideProps() {
    // Fetch data from external API
    // const res = await fetch(`https://njak.fr/api/getGames`, { method: 'POST'})
    // const data = await res.json()
    // console.log(data)
    let data = { name: "Vincent", lastName:"GOUGEON"}
    // Pass data to the page via props
    return { props: data }
}

export default Stats