import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import WindiCSS from "vite-plugin-windicss";
import Icons from "unplugin-icons/vite";
import IconsResolver from "unplugin-icons/resolver";
import Components from "unplugin-vue-components/vite";
import { FileSystemIconLoader } from "unplugin-icons/loaders";
import path from "path";
import Markdown from "vite-plugin-md";

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
  ],
});
