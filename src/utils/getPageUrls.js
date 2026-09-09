export const pageURLS = {
   "en": {
      'home': '/en',
      'about': '/en/about',
      'products': '/en/products',
      'in-stock': '/en/in-stock',
      'configurator': '/en/configurator',
      'privacyPolicy': '/en/privacy-policy',
      'legalNotice': '/en/legal-notice',
      'warranty': '/en/warranty',
      'cookiePolicy': '/en/cookie-policy',
      'prime': '/en/prime',
      'core': '/en/core',
      'aero': '/en/aero',
      'pinnacle': '/en/pinnacle',
      'apex': '/en/apex',
      'horizon220':'/en/horizon220',
      'horizon270':'/en/horizon270'
   },
   'es': {
      'home': '/es',
      'about': '/es/sobre-nosotros',
      'products': '/es/productos',
      'in-stock': '/es/en-stock',
      'configurator': '/es/configurador',
      'privacyPolicy': '/es/politica-de-privacidad',
      'legalNotice': '/es/aviso-legal',
      'warranty': '/es/garantia',
      'cookiePolicy': '/es/politica-de-cookies',
      'prime': '/es/prime',
      'core': '/es/core',
      'aero': '/es/aero',
      'pinnacle': '/es/pinnacle',
      'apex': '/es/apex',
      'horizon220':'/es/horizon220',
      'horizon270':'/es/horizon270'
   },
   'pt': {
    'home': '/pt',
      'about': '/pt/sobre',
      'products': '/pt/produtos',
      'in-stock': '/pt/em-stock',
      'configurator': '/pt/configurador',
      'privacyPolicy': '/pt/politica-de-privacidade',
      'legalNotice': '/pt/aviso-legal',
      'warranty': '/pt/garantia',
      'cookiePolicy': '/pt/politica-de-cookies',
      'prime': '/pt/prime',
      'core': '/pt/core',
      'aero': '/pt/aero',
      'pinnacle': '/pt/pinnacle',
      'apex': '/pt/apex',
      'horizon220':'/pt/horizon220',
      'horizon270':'/pt/horizon270'
   }
}

// Helper to get all URLs for sitemap
export const getAllPageUrls = (siteUrl = 'https://bbqpodspain.com') => {
   return Object.values(pageURLS).flatMap(localeObj =>
      Object.values(localeObj).map(path => siteUrl + path)
   );
}




    export const  pageURLSES = {

        "en": {
           'home': '/en',
           'sobre-nosotros': '/en/about',
           'productos': '/en/products',
           'en-stock': '/en/in-stock',
           'configurador': '/en/configurator',
           'politica-de-privacidad':'/en/privacy-policy',
           'aviso-legal' : '/en/legal-notice',
           'garantia': '/en/warranty',
           'politica-de-cookies': '/en/cookie-policy',
           'prime': '/en/prime',
           'core': '/en/core',
           'aero': '/en/aero',
           'pinnacle': '/en/pinnacle',
           'apex':'/en/apex',  
           
           
           
        },
        'es':{
           'home': '/es',
           'sobre-nosotros': '/es/sobre-nosotros',
           'productos': '/es/productos',
           'en-stock': '/es/en-stock',
           'configurador': '/es/configurador',
           'politica-de-privacidad':'/es/politica-de-privacidad',
           'aviso-legal' : '/es/aviso-legal',
           'garantia': '/es/garantia',
           'politica-de-cookies': '/es/politica-de-cookies',
           'prime': '/es/prime',
           'core': '/es/core',
           'aero': '/es/aero',
           'pinnacle': '/es/pinnacle',
           'apex':'/es/apex',      
        },
        'pt':{
           'home': '/pt',
            'about': '/pt/sobre',
            'products': '/pt/produtos',
            'in-stock': '/pt/em-stock',
            'configurator': '/pt/configurador',
            'privacyPolicy': '/pt/politica-de-privacidade',
            'legalNotice': '/pt/aviso-legal',
            'warranty': '/pt/garantia',
            'cookiePolicy': '/pt/politica-de-cookies',
           'prime': '/pt/prime',
           'core': '/pt/core',
           'aero': '/pt/aero',
           'pinnacle': '/pt/pinnacle',
           'apex':'/pt/apex',      
        }

    }

