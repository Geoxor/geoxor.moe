import * as mm from "music-metadata/lib/core";
import util from "util";
import fs from "fs";
import { ICommonTagsResult } from "music-metadata/lib/type";

const SONG_PATH = "./public/songs";
const COVER_PATH = "./public/covers";

async function writeMusicJson(data: ICommonTagsResult, date: string, filename: string) {
  const destinationPath =
    filename
      .substring(filename.lastIndexOf(" - ") + 3, filename.lastIndexOf("."))
      .replace(/\s/g, "_")
      .toLowerCase() + ".json";

  writeJson(`./src/assets/songs/${destinationPath}`, {
    artists: data.artists,
    title: data.title,
    cover: data.album,
    is_remix: data.title?.toLowerCase().includes("remix") ? true : false,
    type: "Single",
    date,
    link: `/songs/${filename}`,
  });
  return console.log(`Generated JSON ${destinationPath} for ${filename}`);
}

async function writeJson(dest: string, data: object) {
  fs.writeFileSync(dest, JSON.stringify(data, null, 2));
}

async function main() {
  console.log("Generating release templates\n");

  const songs = fs.readdirSync(SONG_PATH);

  for (let song of songs) {
    const buffer = fs.readFileSync(`${SONG_PATH}/${song}`);
    const metadata = await mm.parseBuffer(buffer);
    writeMusicJson(metadata.common, metadata.native["ID3v2.3"].find((meta) => meta.id === "TYER")?.value, song);
  }

  process.exit(0);
}

main();
