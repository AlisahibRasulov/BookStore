import { defineConfig } from 'vite';

export default defineConfig({      
  server: {
    port: 3000, // Change to any available port
    host: '0.0.0.0', 
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
