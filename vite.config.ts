import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import WindiCSS from "vite-plugin-windicss";
import Icons from "unplugin-icons/vite";
import IconsResolver from "unplugin-icons/resolver";
import Components from "unplugin-vue-components/vite";
import { FileSystemIconLoader } from "unplugin-icons/loaders";
import ViteFonts from "vite-plugin-fonts";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "~/": `${path.resolve(__dirname, "src")}/`,
    },
  },
  plugins: [
    Components({
      resolvers: [
        IconsResolver({
          customCollections: ["fluency"],
        }),
      ],
    }),
    WindiCSS(),
    ViteFonts({
      google: {
        families: ["Roboto"],
      },
    }),
    Icons({
      customCollections: {
        fluency: FileSystemIconLoader("./public/icons/svg"),
      },
    }),
    vue(),
  ],
});
