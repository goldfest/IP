import { resolve } from "path";
// eslint-disable-next-line import/no-extraneous-dependencies
import { defineConfig } from "vite";

export default defineConfig({
    build: {
        sourcemap: true,
        emptyOutDir: true,
        rollupOptions: {
            input: {
                main: resolve(__dirname, "index.html"),
                page2: resolve(__dirname, "tv.html"),
                page3: resolve(__dirname, "film.html"),
                page4: resolve(__dirname, "serial.html"),
                page5: resolve(__dirname, "in.html"),
                page6: resolve(__dirname, "reg.html"),
                page7: resolve(__dirname, "profil.html"),
                page8: resolve(__dirname, "admin.html"),
            },
        },
    },
});
