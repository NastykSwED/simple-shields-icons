/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		domains: ['img.shields.io'],
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'img.shields.io',
				port: '',
				pathname: '/static/**',
			},
		],
	},
};

https: module.exports = nextConfig;
