<template>
  <div class="btn-box">
    <div id="btn-top" class="btn-top btn-float" title="Go to top" style="visibility: hidden" @click="backToTop()">
      <svg xmlns="http://www.w3.org/2000/svg" xmlns:ooo="http://xml.openoffice.org/svg/export" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:presentation="http://sun.com/xmlns/staroffice/presentation" xmlns:smil="http://www.w3.org/2001/SMIL20/" xmlns:anim="urn:oasis:names:tc:opendocument:xmlns:animation:1.0" version="1.2" width="18px" height="18px" viewBox="0 0 494 494" preserveAspectRatio="xMidYMid" fill-rule="evenodd" stroke-width="28.222" stroke-linejoin="round" icons4menu="https://niebert.github.io/img/icons-svg/carat-uu.svg" xml:space="preserve"><defs class="ClipPathGroup"><clipPath id="presentation_clip_path" clipPathUnits="userSpaceOnUse"><rect x="0" y="0" width="494" height="494"/></clipPath><clipPath id="presentation_clip_path_shrink" clipPathUnits="userSpaceOnUse"><rect x="0" y="0" width="494" height="494"/></clipPath></defs><defs class="TextShapeIndex"><g ooo:slide="id1" ooo:id-list="id3 id4"/></defs><defs class="EmbeddedBulletChars"><g id="bullet-char-template-57356" transform="scale(0.00048828125,-0.00048828125)"><path style="fill:currentColor;" d="M 580,1141 L 1163,571 580,0 -4,571 580,1141 Z"/></g><g id="bullet-char-template-57354" transform="scale(0.00048828125,-0.00048828125)"><path style="fill:currentColor;" d="M 8,1128 L 1137,1128 1137,0 8,0 8,1128 Z"/></g><g id="bullet-char-template-10146" transform="scale(0.00048828125,-0.00048828125)"><path style="fill:currentColor;" d="M 174,0 L 602,739 174,1481 1456,739 174,0 Z M 1358,739 L 309,1346 659,739 1358,739 Z"/></g><g id="bullet-char-template-10132" transform="scale(0.00048828125,-0.00048828125)"><path style="fill:currentColor;" d="M 2015,739 L 1276,0 717,0 1260,543 174,543 174,936 1260,936 717,1481 1274,1481 2015,739 Z"/></g><g id="bullet-char-template-10007" transform="scale(0.00048828125,-0.00048828125)"><path style="fill:currentColor;" d="M 0,-2 C -7,14 -16,27 -25,37 L 356,567 C 262,823 215,952 215,954 215,979 228,992 255,992 264,992 276,990 289,987 310,991 331,999 354,1012 L 381,999 492,748 772,1049 836,1024 860,1049 C 881,1039 901,1025 922,1006 886,937 835,863 770,784 769,783 710,716 594,584 L 774,223 C 774,196 753,168 711,139 L 727,119 C 717,90 699,76 672,76 641,76 570,178 457,381 L 164,-76 C 142,-110 111,-127 72,-127 30,-127 9,-110 8,-76 1,-67 -2,-52 -2,-32 -2,-23 -1,-13 0,-2 Z"/></g><g id="bullet-char-template-10004" transform="scale(0.00048828125,-0.00048828125)"><path style="fill:currentColor;" d="M 285,-33 C 182,-33 111,30 74,156 52,228 41,333 41,471 41,549 55,616 82,672 116,743 169,778 240,778 293,778 328,747 346,684 L 369,508 C 377,444 397,411 428,410 L 1163,1116 C 1174,1127 1196,1133 1229,1133 1271,1133 1292,1118 1292,1087 L 1292,965 C 1292,929 1282,901 1262,881 L 442,47 C 390,-6 338,-33 285,-33 Z"/></g><g id="bullet-char-template-9679" transform="scale(0.00048828125,-0.00048828125)"><path style="fill:currentColor;" d="M 813,0 C 632,0 489,54 383,161 276,268 223,411 223,592 223,773 276,916 383,1023 489,1130 632,1184 813,1184 992,1184 1136,1130 1245,1023 1353,916 1407,772 1407,592 1407,412 1353,268 1245,161 1136,54 992,0 813,0 Z"/></g><g id="bullet-char-template-8226" transform="scale(0.00048828125,-0.00048828125)"><path style="fill:currentColor;" d="M 346,457 C 273,457 209,483 155,535 101,586 74,649 74,723 74,796 101,859 155,911 209,963 273,989 346,989 419,989 480,963 531,910 582,859 608,796 608,723 608,648 583,586 532,535 482,483 420,457 346,457 Z"/></g><g id="bullet-char-template-8211" transform="scale(0.00048828125,-0.00048828125)"><path style="fill:currentColor;" d="M -4,459 L 1135,459 1135,606 -4,606 -4,459 Z"/></g><g id="bullet-char-template-61548" transform="scale(0.00048828125,-0.00048828125)"><path style="fill:currentColor;" d="M 173,740 C 173,903 231,1043 346,1159 462,1274 601,1332 765,1332 928,1332 1067,1274 1183,1159 1299,1043 1357,903 1357,740 1357,577 1299,437 1183,322 1067,206 928,148 765,148 601,148 462,206 346,322 231,437 173,577 173,740 Z"/></g></defs><defs class="TextEmbeddedBitmaps"/><g><g id="id2" class="Master_Slide"><g id="bg-id2" class="Background"/><g id="bo-id2" class="BackgroundObjects"/></g></g><g class="SlideGroup"><g><g id="container-id1"><g id="id1" class="Slide" clip-path="url(#presentation_clip_path)"><g class="Page"><g class="com.sun.star.drawing.PolyPolygonShape"><g id="id3"><rect class="BoundingBox" stroke="none" fill="none" x="10" y="27" width="478" height="271"/><path style="fill:currentColor;" stroke="none" d="M 415,296 L 248,151 82,296 11,234 248,27 486,233 415,296 Z"/></g></g><g class="com.sun.star.drawing.PolyPolygonShape"><g id="id4"><rect class="BoundingBox" stroke="none" fill="none" x="14" y="203" width="477" height="271"/><path style="fill:currentColor;" stroke="none" d="M 418,472 L 252,327 85,472 14,410 251,203 489,410 418,472 Z"/></g></g></g></g></g></g></g></svg>
    </div>
    <div id="btn-dark" class="btn-dark btn-float" title="Dark Mode" @click="manualSwitchDark()">
      <svg t="1611852107008" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2299" width="18px" height="18px"><path d="M611.370667 167.082667a445.013333 445.013333 0 0 1-38.4 161.834666 477.781333 477.781333 0 0 1-244.736 244.394667 445.141333 445.141333 0 0 1-161.109334 38.058667 85.077333 85.077333 0 0 0-65.066666 135.722666A462.08 462.08 0 1 0 747.093333 102.058667a85.077333 85.077333 0 0 0-135.722666 65.024z" p-id="2300"></path></svg>
    </div>
  </div>
</template>


<script>
export default {
  name: 'FloatButton',
  computed: {},
  data() {
    return {
      lockDark: false
    }
  },
  methods: {
    // darkModeSetup() {
    //   // Dark Mode
    //   // localStorage.getItem("darkState") !== null? autocheck : contiune
    //   // localStorage.getItem("darkState") === true? usedarkmode : notuse
    //   const hasNativePrefersColorScheme = window.matchMedia('(prefers-color-scheme)').media !== 'not all';
    //   let darkCookie = ((localStorage.getItem("useDark") !== null)? parseInt(localStorage.getItem("useDark")): 0);

    // },
    updateDark() {
      // Dark Mode
      // localStorage.getItem("darkState") !== null? autocheck : contiune
      // localStorage.getItem("darkState") === true? usedarkmode : notuse
      const hasNativePrefersColorScheme = window.matchMedia('(prefers-color-scheme)').media !== 'not all'
      let darkState = (localStorage.getItem("darkState") === null ? 0 : parseInt(localStorage.getItem("darkState")))
      let systemDark = hasNativePrefersColorScheme && window.matchMedia('(prefers-color-scheme: dark)').matches
      // 0:auto, 1:light, 2: dark
      if ((darkState === 0 && systemDark) || darkState === 2) {
        // use dark mode
        document.body.classList.add('darkmode');
        document.querySelector("html").classList.add('darkmode');
      } else {
        document.body.classList.remove('darkmode');
        document.querySelector("html").classList.remove('darkmode');
      }
    },
    manualSwitchDark() {
      const hasNativePrefersColorScheme = window.matchMedia('(prefers-color-scheme)').media !== 'not all'
      let oldDarkState = (localStorage.getItem("darkState") === null ? 0 : parseInt(localStorage.getItem("darkState")))
      let systemDark = (hasNativePrefersColorScheme && window.matchMedia('(prefers-color-scheme: dark)').matches) ? 2 : 1
      let newState = (oldDarkState === 1) ? 2 : 1
      if (systemDark === newState) {
        newState = 0
      }
      localStorage.setItem("darkState", newState)
      this.updateDark()
      // console.log({
      //   newState, systemDark, oldDarkState
      // })
    },
    backToTop() {
      window.scroll({top: 0, left: 0, behavior: 'smooth' });
      // window.location.replace(window.location.pathname+"#")
    }
  },
  beforeMount() {
    // this.darkModeSetup()
    this.updateDark()
  },
  mounted (){
    this.$nextTick(function(){
      window.onscroll = function() {
        let pageOffset = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
        if (pageOffset >= 60) {
          document.querySelector(".btn-top").style.visibility = "";
          document.querySelector(".btn-top").style.opacity = "1";
        } else {
          document.querySelector(".btn-top").style.visibility = "hidden";
          document.querySelector(".btn-top").style.opacity = "0";
        }
      }
    })
    // window.addEventListener('storage', (e) => {
    //   this.updateDark()
    // })
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
