/** @type {import('next').NextConfig} */
const nextConfig = {
    "reactStrictMode": true,
    "plugins": [
        [

            "styled-components",
            {
                "ssr": true,
                "displayName": true,
                "preprocess": false
            },
        ],
    ],
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'i.pravatar.cc',
            },
        ],
    },
};

export default nextConfig;
