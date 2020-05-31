import BackHeader from "../components/layout/backheader"

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
    const res = await fetch(`http://localhost:3001/me`, { method: 'POST'})
    const data = await res.json()
    console.log("Bonjour.")
    // Pass data to the page via props
    return { props: data }
}

export default ProfilePage