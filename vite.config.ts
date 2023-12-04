import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dns from "dns";

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
