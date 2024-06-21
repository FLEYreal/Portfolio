import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin("./src/shared/libs/next-intl");

/** @type {import('next').NextConfig} */
const nextConfig = {};

export default withNextIntl(nextConfig);