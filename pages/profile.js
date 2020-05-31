import BackHeader from "../components/layout/backheader"
const axios = require('axios');
function ProfilePage(data) {
    return (
    <>
    <BackHeader img={"https://images.igdb.com/igdb/image/upload/t_original/bktrfgfwqohj8xnlq7pk.jpg"} />
    <div className="container">
        { data.error }
    </div>
    </>
    )
}

export async function getServerSideProps() {
    // Fetch data from external API
    axios.defaults.withCredentials = true;
    let data = await axios.post('http://127.0.0.1/api/me')
    // const data = { name: "Vince"}
    console.log(data)
    // const res = await fetch(`http://127.0.0.1/api/me`, { method: 'POST'})
    // const data = await res.json()
    console.log("Bonjour.")
    // Pass data to the page via props
    return { props: { name: "test" }}
}

export default ProfilePage