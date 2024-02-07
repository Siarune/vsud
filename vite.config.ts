import { defineConfig } from "@solidjs/start/config";
import UnoCSS from "unocss/vite";

export default defineConfig({
  start: {
    ssr: true
  },
  plugins: [UnoCSS()],
});
