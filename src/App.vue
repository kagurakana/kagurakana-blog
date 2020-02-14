<template>
  <div id="app">
    <div id="nav"></div>
     <div class="hljs" ref="hlDiv" v-html="code"></div>
  </div>
</template>

<script>
import marked from "marked";
import hljs from "highlight.js";
import 'highlight.js/styles/monokai-sublime.css';
import javascript from "highlight.js/lib/languages/javascript";
export default {
  name: "App",
  data() {
    return {
      code: 
       '```javascript\nfunction(){\n\tconsole.log(123)\n}\n```'
      
    };
  },
  mounted() {
    marked.setOptions({
      render: new marked.Renderer(),
      highlight: function(code) {
        return hljs.highlightAuto(code).value;
      },
      pedantic: false,
      gfm: true,
      tables: true,
      breaks: false,
      sanitize: false,
      smartLists: true,
      smartypants: false,
      xhtml: false
    });
     this.code = marked(this.code)
  }
};
</script>

<style lang="scss" scoped>
.test {
  width: 200px;
  height: 200px;
  margin: 45% auto;
  background-color: $base-lightgray-color;
}
</style>