import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "node:path";

// Base relativa: funciona en GitHub Pages bajo /<repo>/ sin acoplar el nombre del repo.
// El enrutado usa HashRouter, así que no hace falta 404.html.
export default defineConfig({
  base: "./",
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  build: {
    target: "es2020",
    outDir: "dist",
    emptyOutDir: true,
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          leaflet: ["leaflet", "react-leaflet"],
        },
      },
    },
  },
});
