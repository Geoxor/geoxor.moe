import * as mm from "music-metadata/lib/core";
import fs from "fs";
import { ICommonTagsResult } from "music-metadata/lib/type";

const SONG_PATH = "./temp";

async function writeMusicJson(data: ICommonTagsResult, date: string, filename: string) {
  const destinationPath =
    filename
      .substring(filename.lastIndexOf(" - ") + 3, filename.lastIndexOf("."))
      .replace(/\s/g, "_")
      .toLowerCase() + ".json";

  return writeJson(`./src/assets/songs/${destinationPath}`, {
    artists: data.artists,
    title: data.title,
    cover: data.album,
    is_remix: data.title?.toLowerCase().includes("remix") ? true : false,
    type: "Single",
    date,
    link: "FILL",
  });
}

async function writeJson(dest: string, data: object) {
  return fs.promises.writeFile(dest, JSON.stringify(data, null, 2));
}

async function main() {
  console.log("Generating release templates\n");

  await Promise.all(
    fs.readdirSync(SONG_PATH).map(async (song) => {
      const buffer = fs.readFileSync(`${SONG_PATH}/${song}`);
      const metadata = await mm.parseBuffer(buffer);
      const promise = writeMusicJson(
        metadata.common,
        metadata.native["ID3v2.3"].find((meta) => meta.id === "TYER")?.value,
        song
      );
      console.log(`Generated JSON for ${song}`);
      return promise;
    })
  );

  process.exit(0);
}

main();
