import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                about: resolve(__dirname, 'about.html'),
                services: resolve(__dirname, 'services.html'),
                products: resolve(__dirname, 'products.html'),
                contact: resolve(__dirname, 'contact.html'),
                'admin-login': resolve(__dirname, 'admin-login.html'),
                'admin-dashboard': resolve(__dirname, 'admin-dashboard.html'),
            },
        },
    },
});
