<template>
  <div>
    <div class="hljs" ref="hlDiv" v-html="code"></div>
  </div>
</template>

<script>
  import marked from 'marked'
  import hljs from "highlight.js";
  // import javascript from 'highlight.js/lib/languages/javascript';
  import 'highlight.js/styles/monokai-sublime.css';

  export default {
    name: "Test",
    data(){
      return {
        code:'```javascript\nfunction(){\n\tconsole.log(123)\n}\n```'
      }
    },
    mounted(){
      marked.setOptions({
          renderer: new marked.Renderer(),
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
        }
      );
      this.code = marked(this.code)
    },
  }
</script>
