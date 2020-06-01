import Section from '../components/layout/section';

const axios = require('axios');
function ProfilePage(data) {
    return (
    <Section>
    <div className="container max mt-4">
        <article className="w-full">
            <h2 className="p-3 m-0 soft-line">Profil</h2>
        </article>
    </div>
    </Section>
    )
}

export async function getServerSideProps(ctx) {
    const data = await axios({
        method: 'post',
        url: 'http://127.0.0.1/api/me',
        headers: { 'Cookie': ctx.req.headers.cookie }
    })
    return { props: { name: "test" }}
}

export default ProfilePage