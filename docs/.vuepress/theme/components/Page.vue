<template>
  <main class="page">
    <slot name="top" />

    <div class="page-tip tip-top" v-if="fromLanguage">
      <p>
        <strong>⚠</strong><strong>{{ fromLanguage }}</strong>
      </p>
    </div>

    <Content id="main" class="theme-default-content preload" />
    <PageEdit />
    <div class="page-tip" v-if="isnotFinish">
      <p>
        <strong>⚠</strong><strong>{{ notFinishMsg }}</strong>
      </p>
    </div>
    <PageNav v-bind="{ sidebarItems }" />
    <SideImage />

    <slot name="bottom" />
    <div v-if="footer" class="page-footer">
      <div v-html="footer" class="inner"></div>
    </div>
  </main>
</template>

<script>
import PageEdit from "@theme/components/PageEdit.vue";
import PageNav from "@theme/components/PageNav.vue";
import SideImage from "@theme/components/SideImage.vue";

export default {
  components: { PageEdit, PageNav, SideImage },
  props: ["sidebarItems"],
  data: function(){
    return {
      fromLanguage: null
    }
  },
  computed: {
    footer() {
      if (typeof this.$themeLocaleConfig.footer === "string") {
        return this.$themeLocaleConfig.footer;
      }
      if (typeof this.$site.themeConfig.footer === "string") {
        return this.$site.themeConfig.footer;
      }
      return "";
    },
    notFinishMsg() {
      const notFinishMsg = this.$themeLocaleConfig.notFinish;
      return notFinishMsg;
    },
    isnotFinish() {
      return !(this.$page.frontmatter.finish || false);
    },
  },
  methods: {
    updateSideImg() {
      const floatIMG = document.querySelectorAll(".preload .side-img");
      document.getElementById("main").classList.remove("preload");
      // console.log(floatIMG.length)
      const length = floatIMG.length;
      for (let img = 0; img < length; img++) {
        // console.log(floatIMG[img])
        let oldImg = floatIMG[img];
        let src = oldImg.src;
        let info = oldImg.alt;

        let newItemIMG = document.createElement("img");
        newItemIMG.src = src;
        newItemIMG.setAttribute("data-orgain", src);
        newItemIMG.className = "img-side medium-zoom-image";
        newItemIMG.alt = info;

        let newItemP = document.createElement("p");
        newItemP.innerHTML = info;

        let newItem = document.createElement("div");
        // newItem.className = "img-side";
        newItem.className = oldImg.className;
        newItem.classList.replace("side-img", "img-side");

        newItem.appendChild(newItemIMG);
        newItem.appendChild(newItemP);
        // console.log(newItem)

        oldImg.before(newItem);
        floatIMG[img].style.display = "none";
        floatIMG[img].className = "";
      }
    },
    getFromLang() {
      this.fromLanguage = (() => {
        let query = window.location.search.substring(1);
        let vars = query.split("&");
        for (let i=0;i<vars.length;i++) {
          let pair = vars[i].split("=");
          if(pair[0] == 'fromLang'){return pair[1];}
        }
        return null;
      })()
    }
  },
  updated() {
    this.$nextTick(function () {
      this.updateSideImg();
    });
    // this.getFromLang()
  },
  mounted() {
    this.$nextTick(function () {
      this.updateSideImg();
    });
    this.getFromLang()
    // this.updateSideImg()
  },
};
</script>

<style lang="stylus">
@require '../styles/wrapper.styl';
@require '../styles/article.styl';

#main > * {
  // margin-top: 1rem;
  margin-bottom: 1rem;
}

.page {
  padding-top $navbarHeight
  padding-bottom: 2rem;
  display: block;
}

.page-footer {
  @extend $wrapper;
  padding-top: 0;
  padding-bottom: 0;

  .inner {
    display: grid;
    margin-top: 0;
    padding-top: 1rem;
    opacity: 1;
    border-top: 1px solid $borderColor;
  }
}

.tip-top {
  margin-top $navbarHeight!important
}

.page-tip {
  max-width: 720px;
  margin: 0 auto;
  padding: 0.1rem 1.5rem;
  border-left-width: 0.5rem;
  border-left-style: solid;
  background-color: rgba(255, 229, 100, 0.3);
  border-color: darken(#ffe564, 35%);
  color: darken(#ffe564, 70%);

  .custom-block-title {
    color: darken(#ffe564, 50%);
  }

  a {
    color: $textColor;
  }

  strong {
    margin: 0 0.5rem;
  }
}

body.darkmode {
  .page-footer {
    .inner {
      border-top: 1px solid $borderDarkColor;
    }
  }

  .page-tip  {
    background-color: $indexBGDarkColor;
    border-color: darken($customBlocksWarnDarkColor, 35%);
    color: darken($customBlocksWarnDarkColor, 50%);

    strong {
      color: darken($customBlocksWarnDarkColor, 50%);
    }
  }
}
</style>
