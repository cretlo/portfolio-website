import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react()],
    vite: {
        ssr: {
            // Error when building without this.
            // Issue: https://github.com/withastro/astro/issues/7629
            noExternal: ["react-icons"]
        }
    }
});
