const https = require('https');
const axios = require('axios').default;

async function getStatus(url: String): Promise<[Number, String]> {
    const agent = new https.Agent({
        rejectUnauthorized: false
    });

    let regex = /[\d]{3}$/gm;
    try {
        const response = await axios.get(url, { httpsAgent:agent, timeout: 2000 });
        return [response.status, response.statusText];
    }
    catch (err: any)
    {
        let matchArray = regex.exec(err.message);
        let status = matchArray?.[0] || -1;
        return [+status, err.message];
    }
}

export {
    getStatus
};