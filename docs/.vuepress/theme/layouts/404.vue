<template>
  <div class="theme-container">
    <div class="theme-default-content">
      <h1>404</h1>
      <blockquote id="fofmsg"></blockquote>
      <RouterLink id="fofbtn" to="/"> Take me home. </RouterLink>
    </div>
    <script></script>
  </div>
</template>

<script>

export default {
  methods: {},
  data() {
    return {
      lang: '',
      path: '',
      existEngVer: false
    }
  },
  methods: {
    async toEngVer() {
      if (this.lang == 'en') return
      console.log(this.lang, this.path)
      await fetch(`/en/${this.path}`).then((response)=>{
        if (response.ok) {
          this.existEngVer = true
        } else {
          this.existEngVer = false
        }
      })
      if (this.existEngVer) {
        window.location.href = (`/en/${this.path}?fromLang=${this.lang}`)
      }
    }
  },
  mounted() {
    this.lang = /\/(.*?)\/(.*)/.exec(window.location.pathname)[1]
    this.path = /\/(.*?)\/(.*)/.exec(window.location.pathname)[2]
    const supportLang = {
      zh: "zh",
      "zh-CN": "zh",
      en: "en",
    };
    const multiMsgs = {
      en: [
        `There's nothing here.`,
        `How did we get here?`,
        `That's a Four-Oh-Four.`,
        `Looks like we've got some broken links.`,
      ],
      zh: [
        `什么都没有.`,
        `我们是怎么来到这的?`,
        `这是一个 4 0 4.`,
        `看起来是咕了.`,
        `就是咕了(理直气壮)`
      ],
    };
    const multiBTN = {
      en: "Take me home.",
      zh: "返回主页",
    };
    const homes = {
      en: "/",
      zh: "/zh/",
    };
    function auto404Lang() {
      const msgs =
        multiMsgs[supportLang[navigator.language]] || multiMsgs["en"];
      document.querySelector("#fofmsg").innerText =
        msgs[Math.floor(Math.random() * msgs.length)];
      document.querySelector("#fofbtn").innerText =
        multiBTN[supportLang[navigator.language]] || multiBTN["en"];
    }
    auto404Lang();
    this.toEngVer()
  },
};
</script>
