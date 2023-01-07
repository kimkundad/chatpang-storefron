const path = require('path');

require('dotenv').config({ path: `../.env.${process.env.NODE_ENV}` });

let id = ''
if (typeof window !== 'undefined') {
 id = localStorage.getItem('userId')
}

module.exports = {
    reactStrictMode: true,
    env: {
        ENV: process.env.ENV,
        BASE_API_PATH: process.env.BASE_API_PATH,
        API_VERSION: process.env.API_VERSION,
    },
    async redirects() {
        return [
            {
                source: '/pages',
                destination: `/login/?fb=${id}`,
                permanent: true,
            },
            {
                source: '/paymentsuccess',
                destination: `/user/payment/confirmorder`,
                permanent: false,
            },
        ];
    },
};
