<template>
  <div class="auto-lang-boxes">
    <p>
      这篇文章暂不支持您的语言. 若您有兴趣, 可联系参与翻译.
    </p>
    <div>
      <strong>
        或者...
      </strong>
      <h2>
        这篇文章现提供以下语言版本
      </h2>

    </div>
  </div>
</template>

<script>

const supportLang= {
    'zh': "zh",
    "zh-CN": "zh",
    'en' : 'en'
}

const messages = {
  "zh": {
    "messageNoPage": "这篇文章暂不支持您的语言. 若您有兴趣, 可联系我们参与翻译.",
    "messageOr": "或者...",
    "messageOffer": "这篇文章现提供以下语言版本",
    "messageExist": "",
    "langName": "中文简体"
  }
}

const existLang = ["zh","en"]

export default {
    name: 'PageAutoLang',
    components: {},
    computed: {},
    methods: {
        
    },
    computed: {
      exists() {
        var result = []
        const link = window.location.pathname
        // for (lang in existLang) {
        //   const langName = messages[lang]["langName"]

        // }
        const routes = this.$router.options.routes
        console.log(routes.some(route => route.path === link))
        return []
      }
    }
}

</script>
