import { defineConfig, loadEnv } from "vite";
import { createVuePlugin } from "vite-plugin-vue2";
import eslint from "vite-plugin-eslint";
import dns from "dns";

dns.setDefaultResultOrder("verbatim");


export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, process.cwd(), "")
    return {
        plugins: [eslint(), createVuePlugin()],
        server: {
            port: env.VITE_APP_PORT,
            host: env.VITE_APP_HOST
        },
        preview: {
            port: 8080
        }
    };
});
