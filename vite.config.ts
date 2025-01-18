import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    port: 8080, 
    host: '0.0.0.0',      
    strictPort: true,       
    https: false, 
    proxy: {
      '/api': 'http://localhost:4000',
    },
  },


  resolve: {
    alias: {
      '@': '/src', 
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
      name: 'html-transform',
      transformIndexHtml(html: string) {
        return html.replace(/<title>(.*?)<\/title>/, `<title>Yeni Başlık</title>`); 
      },
    },
  ],
});
