import * as https from 'https'
import * as axios from 'axios'
import { getTimeOutValue } from '../functions/get_timeout_value';

async function getStatus(url: string): Promise<[number, string]> {
    const agent = new https.Agent({
        rejectUnauthorized: false
    });

    const regex = /[\d]{3}$/gm;
    try {
        const timeout = getTimeOutValue();
        const response = await axios.default.get(url, { httpsAgent:agent, timeout: timeout });
        return [response.status, response.statusText];
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    catch (err: any)
    {
        const matchArray = regex.exec(err.message);
        const status = matchArray?.[0] || -1;
        return [+status, err.message];
    }
}

export {
    getStatus
};
