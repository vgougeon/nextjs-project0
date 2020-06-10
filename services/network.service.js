import Axios from "axios";

class Network {
    constructor() {
    }

    async get(url, ctx = false) {
        const result = await Axios({
            method: 'get',
            url: 'http://127.0.0.1:3001/' + url,
            headers: { 'Cookie': this.cookies(ctx) }
        })
        return result.data.data
    }

    async post(url, body, ctx = false) {
        const settings = {
            method: 'POST',
            url: 'http://127.0.0.1:3001/' + url,
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            }
        }
        console.log(settings)
        const result = await Axios(settings);
        console.log(result)
        return result.data.data
    }

    cookies(ctx) {
        if(ctx && ctx.req && ctx.req.headers && ctx.req.headers.cookies) return ctx.req.headers.cookies
        else return ''
    }
}

const network = new Network();
export default network;