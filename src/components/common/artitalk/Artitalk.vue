<template>
  <div id="artitalk_main" />
</template>

<script>
export default {
  name: "Artitalk",
  mounted() {
    function addScript(url) {
      var s = document.createElement("script");
      s.id = "at";
      url.indexOf("appId") == -1 ? (s.src = url) : (s.innerHTML = url);
      document.head.appendChild(s);
    }
    addScript(`
      new Artitalk({
          appId: '4eilpCPoH48XBBW0rXHNMpyj-MdYXbMMI',
          appKey: 'BlK9yvuuHdw1IQtVXQt6YLzx',
          shuoPla: '',
          bgImg: 'https://cdn.jsdelivr.net/gh/drew233/cdn/20200409110727.webp',
          atEmoji: {
              huaji: 'https://cdn.jsdelivr.net/gh/moezx/cdn@3.1.9/img/Sakura/images/smilies/icon_huaji.gif',
              baiyan: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/baiyan.png',
              bishi: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/bishi.png',
              bizui: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/bizui.png',
              chan: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/chan.png'          
          },
      })
    `);
  },
  destroyed() {
    document
      .querySelectorAll("#at")
      .forEach((element) => element.parentNode.removeChild(element));
    delete window.AV;
  },
};
</script>

<style lang='scss'>
@import "~assets/css/blog.scss";
#artitalk_main {
  margin: 40px auto;
  .cbp_tmlabel img {
    max-width: 100%;
  }
  #shuoshuo-modal {
    center p {
      margin: 5px !important;
    }
  }
  .power {
    padding: 15px !important;
    #pubShuo,
    #switchUser,
    #uploadSource {
      margin: 15px;
    }
  }
  @include blog;
  code {
    color: #000;
    line-height: 18px;
  }
  img {
    box-shadow: none;
  }
}
#shuoshuo_input {
  padding: 15px;
}
</style>