import {defineRouting} from 'next-intl/routing';
 
export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ['en', 'tr'],
 
  // Used when no locale matches
  defaultLocale: 'en',
  pathnames : {
    "/homepage": {
        en: "/home",
        tr: "/ana-sayfa",
    },
    "/trade" : {
        en: "/dashboard",
        tr: "/trade"
    }
  }
});