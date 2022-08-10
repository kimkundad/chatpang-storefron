const path = require('path')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  // async redirects(){
  //   return[
  //     {
  //       source:'/register/:fb',
  //       destination:'/user/register/:fb',
  //       permanent:true
  //     },
  //     {
  //       source:'/login/:fb',
  //       destination:'/user/info/pagemanagement/:fb',
  //       permanent:true
  //     }
  //   ]
  // }
}

module.exports = nextConfig
