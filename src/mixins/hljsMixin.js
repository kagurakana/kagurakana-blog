import marked from "marked";
import hljs from "highlight.js";
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
      // this.articleDetail.context数据
      if(this.blog&&this.blog.content){
        return marked(this.htmlRestore(this.blog.content))
      }else{
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
  methods: {
    htmlRestore(str) {
      var s = "";
      if (str.length === 0) {
        return "";
      }
      s = str.replace(/&amp;/g, "&");
      s = s.replace(/&lt;/g, "<");
      s = s.replace(/&gt;/g, ">");
      s = s.replace(/&nbsp;/g, " ");
      s = s.replace(/&#39;/g, "'");
      s = s.replace(/&quot;/g, '"');
      return s;
    }
  },

}