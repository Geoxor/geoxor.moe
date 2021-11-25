import * as mm from "music-metadata/lib/core";
import util from "util";
import fs from "fs";
import { ICommonTagsResult } from "music-metadata/lib/type";

const SONG_PATH = "./public/songs";

async function writeJson(filename: string, data: ICommonTagsResult) {
  const jsonPath =
    filename
      .substring(filename.lastIndexOf(" - ") + 3, filename.lastIndexOf("."))
      .replace(/\s/g, "_")
      .toLowerCase() + ".json";

  fs.writeFileSync(
    `./src/assets/songs/${jsonPath}`,
    JSON.stringify(
      {
        artists: data.artists,
        title: data.title,
        is_remix: data.title?.toLowerCase().includes("remix") ? true : false,
        type: "Single",
        date: data.date,
        link: `/public/songs/${filename}`,
      },
      null,
      2
    )
  );

  console.log(`Generated JSON ${jsonPath} for ${filename}`);
}

async function main() {
  console.log("Generating release templates\n");

  const songs = fs.readdirSync(SONG_PATH);

  for (let song of songs) {
    const buffer = fs.readFileSync(`${SONG_PATH}/${song}`);
    const metadata = await mm.parseBuffer(buffer);
    writeJson(song, metadata.common);
  }

  process.exit(0);
}

main();
