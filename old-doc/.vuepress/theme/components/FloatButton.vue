<template>
  <div class="btn-box">
    <v-btn
      id="btn-top" 
      style="margin-top: 1rem"
      elevation="1"
      :color="dark ? '#cec3ff' : '#7b69c8'"
      fab
      @click="backToTop"
    >
      <v-icon
        :color="dark ? '#000' : '#fff'"
      >
        mdi-chevron-up
      </v-icon>
    </v-btn>
    <v-btn
      id="btn-dark"
      style="margin-top: 1rem"
      elevation="1"
      :color="dark ? '#cec3ff' : '#7b69c8'"
      fab
      @click="manualSwitchDark"
    >
      <v-icon
        :color="dark ? '#000' : '#fff'"
      >
        {{ dark ? 'mdi-white-balance-sunny' : 'mdi-weather-night'}}
      </v-icon>
    </v-btn>
  </div>
</template>


<script>
export default {
  name: 'FloatButton',
  computed: {},
  data() {
    return {
      lockDark: false,
      dark: false
    }
  },
  methods: {
    updateDark() {
      // Dark mode: localStorage: dark
      let darkConfig = localStorage.darkmode || 0
      let sysConfig = 0
      if (darkConfig === 0) {
        if (window.matchMedia('(prefers-color-scheme)').media === 'not all') return;
        sysConfig = window.matchMedia('(prefers-color-scheme: dark)').matches ? 2 : 1
        darkConfig = sysConfig
      }

      if (darkConfig == 1) {
        document.body.classList.remove('darkmode');
        document.querySelector('html').classList.remove('darkmode')
        this.dark = false
      } else {
        document.body.classList.add('darkmode');
        document.querySelector('html').classList.add('darkmode')
        this.dark = true
      }
      if (darkConfig == sysConfig) darkConfig = 0
    },
    manualSwitchDark() {
      localStorage.darkmode = this.dark ? 1 : 2
      this.updateDark()
    },
    backToTop() {
      window.scroll({top: 0, left: 0, behavior: 'smooth' });
    }
  },
  beforeMount() {
    this.updateDark()
  },
  mounted (){
    this.$nextTick(function(){
      window.onscroll = function() {
        let pageOffset = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
        if (pageOffset >= 60) {
          document.querySelector("#btn-top").style.visibility = "";
          document.querySelector("#btn-top").style.opacity = "1";
        } else {
          document.querySelector("#btn-top").style.visibility = "hidden";
          document.querySelector("#btn-top").style.opacity = "0";
        }
      }
    })
  }
}
</script>


<style lang="stylus">
$button-size = 45px
$icon-size = 24px
.btn-box
  user-select: none
  display: grid
  position: fixed;
  right: 30px
  bottom: 30px;
  z-index: 233;
  .btn-float
    display: flex;
    justify-content: center;
    align-items: center;
    border-width: 2px;
    border-style: solid;
    border-color: $accentColor;
    background-color: $accentColor;
    color: #f8f9fa;
    height: $button-size;
    width: $button-size;
    min-width: $button-size;
    border-radius: 50%;
    text-align: center;
    font-size: $icon-size;
    transition: background-color 0.5s, color 0.5s, visibility 0.3s, opacity 0.3s;
    margin: 5px 0;
    outline: none;
    
    svg
      fill: $backgroundColor;
    &:visited 
      svg
        fill: $accentColor;
      color: $backgroundColor;
      border-color: $accentColor;
    &:hover 
      svg
        fill: $accentColor;
      background-color: $backgroundColor;
      color: $accentColor;
      border-color: $accentColor;

  
@media (max-width: $MQMobileNarrow) 
  .btn-box 
    right: 15px;
    bottom: 15px;
    .btn-float
      margin: 3px


body.darkmode 
  .btn-float
    border-color: $accentDarkColor;
    background-color: $accentDarkColor;
    color: $backgroundDarkColor;
    svg
      fill: $backgroundDarkColor;
    &:visited
      svg
        fill: $accentDarkColor
      color: $backgroundDarkColor;
      border-color: $accentDarkColor;
    &:hover 
      svg
        fill: $accentDarkColor
      background-color: $backgroundDarkColor;
      color: $accentDarkColor;
      border-color: $accentDarkColor;
  .btn-float-ios
    border-style: none!important;
    background-color: transparent!important;
    color: $accentDarkColor!important;
    svg
      fill: $accentDarkColor!important;
    &:hover
      color: $accentDarkColor!important;
    &:visited 
      color: $accentDarkColor!important;

</style>
