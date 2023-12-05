import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dns from "dns";
import svgr from "vite-plugin-svgr";


dns.setDefaultResultOrder("verbatim");

export default defineConfig({
  resolve: {
    extensions: [".ts", ".tsx", ".sсss"],
    alias: {
      src: "/src",
    },
  },
  server: {
    port: 3030,
    open: true,
  },
  plugins: [
    svgr(),
    react({
      babel: {
        presets: [],
        plugins: [
          [
            "@emotion",
            {
              sourceMap: true,
              autoLabel: "dev-only",
              labelFormat: "[local]",
              cssPropOptimization: true,
            },
          ],
        ],
        babelrc: true,
        configFile: false,
      },
    }),
  ],
});
