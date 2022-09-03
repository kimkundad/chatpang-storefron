const path = require('path')

let id = ''
if (typeof window !== 'undefined') {
 id = localStorage.getItem('userId')
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  async redirects(){
    return[
      {
        source:'/pages',
        destination:`/login/?fb=${id}`,
        permanent:true
      },
      // {
      //   source:'/login/:fb',
      //   destination:'/user/info/pagemanagement/:fb',
      //   permanent:true
      // }
    ]
  }
}

module.exports = nextConfig
