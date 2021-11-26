const link = document.createElement("link");
link.type = "text/css";
link.rel = "stylesheet";
link.media = "screen,print";
link.href = `/themes/${localStorage.getItem("theme")}.css`;
document.getElementsByTagName("head")[0].appendChild(link);

export const switchTheme = (name: string) => {
  link.href = `/themes/${name}.css`;
};
