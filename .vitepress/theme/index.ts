// https://vitepress.dev/guide/custom-theme
import Theme from "vitepress/theme";
import { h } from "vue";
import BHLayout from "./BHLayout.vue";
import "./style.css";

export default {
  extends: Theme,
  Layout: () => {
    return h(BHLayout, null, {});
  },
  enhanceApp({ app, router, siteData }) {
    // ...
  },
};
