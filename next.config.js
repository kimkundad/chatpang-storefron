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
  //       source:'/pages',
  //       destination:`/login/?fb=`,
  //       permanent:true
  //     },
      // {
      //   source:'/login/:fb',
      //   destination:'/user/info/pagemanagement/:fb',
      //   permanent:true
      // }
    // ]
  // }
}

module.exports = nextConfig
