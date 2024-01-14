const fetch = require('node-fetch');
const dotenv = require('dotenv');

exports.handler = async function (event, context) {
    try {
        const response = await fetch(dotenv.parse().REACT_APP_ITCH , {
            headers: {
                'content-type': 'application/json',
                'Connection': 'keep-alive',
                "X-Itch-Media-Type": "itch.v1",
                "X-XSS-Protection": "1; mode=block",
                "Cache-Control": "no-store",
                "Server": "lapis",
                "X-Content-Type-Options": "nosniff",
            }
        });
        const data = await response.json();

        return {
            statusCode: 200,
            body: JSON.stringify(data)
        };
    } catch (error) {
        console.error(error);
        return {
            statusCode: 500,
            body: JSON.stringify({ message: "An error occurred" })
        };
    }
}