const https = require('https');
const axios = require('axios').default;

// var fetchStream = require("fetch").FetchStream;
// var url = require('url');

async function getStatus(url: String) {
    const agent = new https.Agent({
        rejectUnauthorized: false
    });

    let regex = /(\d\d\d)/gm;
    try {
        const response = await axios.get(url, { httpsAgent:agent });
        return response.status;
    }
    catch (err: any)
    {
        let matchArray = regex.exec(err.message);
        let status = matchArray?.[0] || -1;
        return status;
    }
}

export {
    getStatus
};