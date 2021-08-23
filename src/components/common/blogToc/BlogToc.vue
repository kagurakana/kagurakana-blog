<template>
  <div v-if="!isMobile" class="toc static"></div>
</template>

<script>
import _ from "lodash";
import { isScrollTop, isVisiable } from "@/utils/isScrollTop";
import { mapGetters } from "vuex";
// import { getProcessor } from "bytemd";
export default {
  name: "BlogToc",

  props: ["markdownText"],
  computed: {
    ...mapGetters(["isMobile"]),
  },
  data() {
    return {
      blogHeading: null,
      toc: null,
      debouncedMoveToc: _.throttle(() => {
        this.moveToc(this.toc);
      }, 300),
    };
  },
  mounted() {
    !this.isMobile && this.configToc();
    // let hast;
    // getProcessor({
    //   plugins: [
    //     {
    //       rehype: (p) =>
    //         p.use(() => (tree) => {
    //           hast = tree;
    //         }),
    //     },
    //   ],
    // }).processSync(this.markdownText);
    // console.log(hast);
  },
  methods: {
    configToc() {
      let toc = (this.toc = document.querySelector(".toc"));
      let blogEl = document.querySelector(".markdown-viewer");
      // 获取h1~h5
      let BlogElList = [...blogEl.children];

      BlogElList = BlogElList.filter((item) => {
        return /^H[1|2|3|4|5|6]/.test(item.nodeName.toUpperCase());
      });
      this.blogHeading = BlogElList;
      // 添加TOC、监听滚动
      BlogElList.forEach((el) => {
        // 初始化toc
        el.nodeName.toUpperCase().replace(/^H(\d)/, (match, $1) => {
          // 为正文标题添加id
          el.id = el.innerText;
          let p = document.createElement("p");
          p.textContent = el.id;
          p.classList.add(`toc-h${$1}`);
          p.setAttribute("data-anchor", el.id);
          p.addEventListener("click", (e) => {
            this.$vuetify.goTo(`#${e.target.getAttribute("data-anchor")}`, {
              duration: 250,
              offset: 79,
            });
          });
          toc.appendChild(p);
        });
      });

      window.addEventListener("scroll", () => {
        this.switchColor();
        this.debouncedMoveToc();
      });
    },
    moveToc(toc) {
      let activeToc = document.querySelector(".toc-active");
      if (!isVisiable(activeToc)) {
        activeToc &&
          toc.scrollTo({
            top: activeToc.offsetTop,
            behavior: "smooth",
          });
      }
    },
    switchColor() {
      let needChangeList = [];
      this.blogHeading.forEach((el, idx) => {
        if (isScrollTop(el, 80)) {
          needChangeList[idx] = 1;
          let needChangeIdx = needChangeList.lastIndexOf(1);
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
::-webkit-scrollbar {
  width: 3px;
  height: 10px;
  background-color: rgb(243, 243, 243);
  transition: width 0.2s;
}
::v-deep.toc {
  width: 240px;
  padding-left: 10px;
  border-left: 2px solid #123;
  max-height: calc(100vh - 120px);
  overflow-y: auto;
  &:hover {
    &::-webkit-scrollbar {
      width: 10px;
      transition: width 0.2s;
    }
  }
  p {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    transition: padding, 0.5s ease;
  }
  .toc-h1 {
    font-weight: bold;
    &::before {
      content: "◾ ";
    }
  }
  .toc-h2 {
    padding-left: 20px;
    &::before {
      content: "◽ ";
    }
  }
  .toc-h3 {
    padding-left: 30px;
    // font-size: 0.95em;
    &::before {
      content: "▫ ";
    }
  }

  .toc-active {
    color: #1565c0;
    padding-left: 35px;
    transition: padding, 0.5s ease;
  }

  p {
    cursor: pointer;
  }
}
</style>