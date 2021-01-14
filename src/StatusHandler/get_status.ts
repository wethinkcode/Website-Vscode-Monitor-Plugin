import * as https from 'https'
import * as axios from 'axios'

async function getStatus(url: string): Promise<[number, string]> {
    const agent = new https.Agent({
        rejectUnauthorized: false
    });

    const regex = /[\d]{3}$/gm;
    try {
        const response = await axios.default.get(url, { httpsAgent:agent, timeout: 2000 });
        return [response.status, response.statusText];
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    catch (err: any)
    {
        console.log(typeof(err));
        const matchArray = regex.exec(err.message);
        const status = matchArray?.[0] || -1;
        return [+status, err.message];
    }
}

export {
    getStatus
};