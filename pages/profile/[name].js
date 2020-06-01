import BackHeader from "../../components/layout/bodyImage"
import { useRouter } from 'next/router'
const axios = require('axios');
function ProfilePage(data) {
    const router = useRouter()
    const { name } = router.query
    return (
    <>
    <BackHeader img={"https://images.igdb.com/igdb/image/upload/t_original/bktrfgfwqohj8xnlq7pk.jpg"} />
    <div className="container">
        { data.data }
    </div>
    </>
    )
}

export async function getServerSideProps(ctx, ) {
    let res = await axios({
        method: 'get',
        url: 'http://127.0.0.1/api/users/' + ctx.query.name,
        headers: { 'Cookie': ctx.req.headers.cookie }
    })
    return { props:  res.data }
}

export default ProfilePage