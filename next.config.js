/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    basePath: '/travel-app',
    assetPrefix: '/travel-app/', // assetPrefix requires the trailing slash
    distDir: 'out',
    images: {
        unoptimized: true
    }
}

module.exports = nextConfig
