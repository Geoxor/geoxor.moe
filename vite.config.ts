import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import WindiCSS from "vite-plugin-windicss";
import Icons from "unplugin-icons/vite";
import IconsResolver from "unplugin-icons/resolver";
import Components from "unplugin-vue-components/vite";
import { FileSystemIconLoader } from "unplugin-icons/loaders";
import path from "path";
import Markdown from "vite-plugin-md";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "~/": `${path.resolve(__dirname, "src")}/`,
    },
  },
  plugins: [
    Markdown(),
    Components({
      resolvers: [
        IconsResolver({
          customCollections: ["fluency"],
        }),
      ],
    }),
    WindiCSS(),
    Icons({
      customCollections: {
        fluency: FileSystemIconLoader("./public/icons/svg"),
      },
    }),
    vue({
      include: [/\.vue$/, /\.md$/],
    }),
    // VitePWA({
    //   registerType: "autoUpdate",
    //   includeAssets: ["favicon.svg", "favicon.ico", "robots.txt", "apple-touch-icon.png"],
    //   manifest: {
    //     name: "Geoxor.moe",
    //     short_name: "Geoxor",
    //     start_url: "./",
    //     display: "standalone",
    //     description: "Geoxor",
    //     theme_color: "#9448ff",
    //     icons: [
    //       {
    //         src: "icons/pwa-192x192.png",
    //         sizes: "192x192",
    //         type: "image/png",
    //       },
    //       {
    //         src: "icons/pwa-512x512.png",
    //         sizes: "512x512",
    //         type: "image/png",
    //       },
    //       {
    //         src: "icons/pwa-512x512.png",
    //         sizes: "512x512",
    //         type: "image/png",
    //         purpose: "any maskable",
    //       },
    //     ],
    //   },
    // }),
  ],
});
