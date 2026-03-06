/** @type {import('next').NextConfig} */
import nextI18NextConfig from './next-i18next.config.js';

const nextConfig = {
  /* config options here */
  reactCompiler: true,
  reactStrictMode: true,
  i18n: nextI18NextConfig.i18n,
  sassOptions: {
    silenceDeprecations: ['legacy-js-api', 'import', 'global-builtin', 'color-functions'],
  },
};

export default nextConfig;
