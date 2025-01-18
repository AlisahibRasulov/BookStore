import { defineConfig } from "vite";

export default defineConfig({
  server: {
    port: 3000,
    host: "0.0.0.0",
  },

  resolve: {
    alias: {
      "@": "/src",
    },
  },

  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./src/styles/variables.scss";`,
      },
    },
  },

  plugins: [
    {
      name: "html-transform",
      transformIndexHtml(html: string) {
        return html.replace(
          /<title>(.*?)<\/title>/,
          `<title>Yeni Başlık</title>`
        );
      },
    },
  ],
});
