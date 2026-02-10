/** @type {import('next-i18next').UserConfig} */
const nextI18NextConfig = {
  i18n: {
    defaultLocale: 'es',
    locales: ['en', 'es'],
  },
  ns: ['common'],
  defaultNS: 'common',
  localePath: './public/locales',
   serializeConfig: false, 
};

export default nextI18NextConfig;
