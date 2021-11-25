export interface Cover {
  [key: string]: any;
  original: string;
  preview?: string;
  name: string;
}
export type ReleaseType = "ep" | "album" | "single";

export interface Song {
  [key: string]: any;
  date: string;
  cover: string;
  is_remix: boolean;
  title: string;
  type: ReleaseType;
  link: string;
  artists: string[];
}
