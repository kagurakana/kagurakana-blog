import marked from "marked";
import hljs from "highlight.js";
import htmlRestore from '@/utils/htmlRestore'
import('highlight.js/styles/solarized-light.css');
// import('highlight.js/styles/darcula.css');

export default {
  data() {
    return {
      content: "",
    }
  },
  computed: {
    compiledMarkdown() {
      // this.articleDetail.context数据 和post中的实时markdown解析
      if (this.blog && this.blog.content) {
        return marked(this.blog.content)
      } else {
        return marked(this.content)
      }
    }
  },
  mounted() {
    const renderer = new marked.Renderer()
    marked.setOptions({
      renderer: renderer,
      gfm: true,
      tables: true,
      breaks: false,
      pedantic: false,
      sanitize: false,
      smartLists: true,
      smartypants: false,
      highlight: function (code) {
        return hljs.highlightAuto(code).value;
      }
    });
    hljs.initHighlightingOnLoad();
  },

}