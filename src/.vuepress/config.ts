import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/Vue/",

  lang: "zh-CN",
  title: "deepformat的博客",
  description: "deepformat的博客",

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
