// vite.config.js
import { resolve } from "path"
import { defineConfig } from "vite"

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, "index.html"),
                about: resolve(__dirname, "pages/about.html"),
                about_uz: resolve(__dirname, "pages/about-uz.html"),
                contact: resolve(__dirname, "pages/contact.html"),
                contact_uz: resolve(__dirname, "pages/contact-uz.html"),
                index_uz: resolve(__dirname, "pages/index-uz.html"),
                product: resolve(__dirname, "pages/product.html"),
                product_uz: resolve(__dirname, "pages/product-uz.html"),
                products_uz: resolve(__dirname, "pages/products-uz.html"),
                products: resolve(__dirname, "pages/products.html"),
            },
        },
        target: "esnext",
    },
})
