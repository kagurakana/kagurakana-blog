<template>
  <div class="toc static"></div>
</template>

<script>
import _ from "lodash";
import isScrollTop from "@/utils/isScrollTop";
export default {
  name: "BlogToc",
  mounted() {
    this.configToc();
  },
  data() {
    return {
      blogHeading: null,
      toc: null,
      debouncedMoveToc: _.throttle(this.moveToc, 100, { leading: true }),
    };
  },
  methods: {
    configToc() {
      let toc = (this.toc = document.querySelector(".toc"));
      let blogEl = document.querySelector(".context");
      // 获取h1~h5
      let BlogElList = [...blogEl.children];

      BlogElList = BlogElList.filter((item) => {
        return /^H[1|2|3|4|5|6]/.test(item.nodeName.toUpperCase());
      });
      this.blogHeading = BlogElList;
      // 添加TOC、监听滚动
      BlogElList.forEach((el) => {
        console.log(
          el.nodeName.match(/^H(\d)/g, (match, $1) => {
            console.log(match, $1);
          })
        );
        // 初始化toc
        el.nodeName.toUpperCase().replace(/^H(\d)/, (match, $1) => {
          console.log($1);
          let p = document.createElement("p");
          p.textContent = el.id;
          p.classList.add(`toc-h${$1}`);
          toc.appendChild(p);
        });
      });

      window.addEventListener("scroll", () => {
        this.debouncedMoveToc(toc);
        this.switchColor();
      });
    },
    moveToc(toc) {
      if (window.scrollY > 400) {
        toc.classList.add("fixed");
        toc.classList.remove("static");
        toc.style.top = `${window.scrollY - 290}px`;
      } else {
        toc.classList.add("static");
        toc.classList.remove("fixed");
        toc.style.top = "80px";
      }
    },
    switchColor() {
      let needChangeList = [];
      this.blogHeading.forEach((el, idx) => {
        if (isScrollTop(el)) {
          needChangeList[idx] = 1;
          let needChangeIdx = needChangeList.lastIndexOf(1);
          console.log(needChangeIdx, needChangeList);
          this.toc.children.forEach((tocEl, tocIdx) => {
            tocIdx === needChangeIdx
              ? tocEl.classList.add("toc-active")
              : tocEl.classList.remove("toc-active");
          });
        }
      });
    },
  },
};
</script>

<style lang='scss' scoped>
::v-deep .toc-active {
  color: #1565C0;
  padding-left: 35px;
}
</style>