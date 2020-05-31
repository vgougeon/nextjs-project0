import BackHeader from "../components/layout/backheader"

function LoginPage(data) {
    return (
    <>
    <BackHeader img={"https://images.igdb.com/igdb/image/upload/t_original/bktrfgfwqohj8xnlq7pk.jpg"} />
    <div className="container">
        { data.error }
    </div>
    </>
    )
}

export default LoginPage