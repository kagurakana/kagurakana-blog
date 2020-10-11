import marked from "marked";
import markedCmt from "marked";
import hljs from "highlight.js";
import { filterXSS } from 'xss'
import htmlCmtRestore from '@/utils/htmlRestore'
import OwOdata from '../components/common/comment/OwO/OwO'
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
    },
    compiledCommentMarkdownList() {
      if (!this.commentLists) {
        // cmtlist 不存在
        return
      }
      let tempArr = this.commentLists
      tempArr.forEach(cmt => {
        cmt.comment = markedCmt(cmt.comment)
      })
      return tempArr
    },
    compiledCommentInput() {
      if (!this.comment) {
        return
      }
      return markedCmt(filterXSS(this.replaceStamp()))
    }
  },
  mounted() {
    const renderer = new marked.Renderer()
    const rendererCmt = new markedCmt.Renderer()
    marked.setOptions({
      renderer: rendererCmt,
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
    markedCmt.setOptions({
      renderer: renderer,
      gfm: true,
      tables: true,
      breaks: true,
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
    replaceStamp() {
      let replacedComment = this.comment;
      for (const key in OwOdata) {
        if (OwOdata[key].type === "bigImg") {
          OwOdata[key].iconList.forEach(stamp => {
            console.log(replacedComment.replace(stamp.code, `![${stamp.text}](${stamp.icon}#60)`))
            replacedComment = replacedComment.replace(stamp.code, `![${stamp.text}](${stamp.icon}#60)`)
          })
        }
      }
      console.log(replacedComment)
      return replacedComment
    }
  },
}