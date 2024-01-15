import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";
import path from "path";
import svgLoader from "vite-svg-loader";
import Markdown from "vite-plugin-md";
export default defineConfig({
  base: "./",
  plugins: [
    vue({
      include: [/\.vue$/, /\.md$/],
    }),
    svgLoader(),
    Markdown(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    lib: {
      entry: resolve(__dirname, "src/lib/main.ts"),
      name: "woniu-ui",
      fileName: (format) => `woniu-ui.${format}.js`,
    },
    rollupOptions: {
      external: ["vue", "vite-plugin-md", "vite-svg-loader"],
      output: {
        globals: {
          vue: "Vue",
          "vite-plugin-md": "vitePluginMd",
          "vite-svg-loader": "viteSvgLoader",
        },
      },
    },
  },
});
