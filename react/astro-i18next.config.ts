import type { AstroI18nextConfig } from "astro-i18next";

const config: AstroI18nextConfig = {
  defaultLocale: "en",
  locales: ["en", "fr"],
  i18nextServer: {
    debug: true,
  },
  i18nextClient: {
    debug: true,
    detection: {
      order: ['querystring', 'path'],
      caches: [],
    }
  },
};

export default config;
