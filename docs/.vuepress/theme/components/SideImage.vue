<template>
</template>

<script>

export default {
  name: 'SideImage',
  computed: {},
  methods: {
    
  },
  mounted (){
    function updateSideImg(){ // Moved to Page.vue
      const floatIMG = document.querySelectorAll(".side-img")
      // console.log(floatIMG.length)
      for (let img = 0; img < floatIMG.length; img++ ) {
        // console.log(floatIMG[img])
        let oldImg = floatIMG[img]
        let src = oldImg.src;
        let info = oldImg.alt;

        let newItemIMG = document.createElement("img");
        newItemIMG.src = src;
        newItemIMG.setAttribute('data-orgain',src);
        newItemIMG.className = 'img-side medium-zoom-image';
        newItemIMG.alt = info;

        let newItemP = document.createElement("p");
        newItemP.innerHTML = info;

        let newItem = document.createElement("div");
        newItem.className = "img-side";

        newItem.appendChild(newItemIMG);
        newItem.appendChild(newItemP);
        // console.log(newItem)

        oldImg.before(newItem)
        floatIMG[img].style.display = "none"
        floatIMG[img].className = ''
      }
    }
    // updateSideImg()
  },
  updated () {
  }
}





</script>


<style lang="stylus">
div.img-side{
  display: block;
  object-fit: contain;
  background-color: #6e6e6e1d;
  border-radius: 6px
}
div.img-side img.img-side, img.side-img{
  display: block;
  float: right;
  clear: right;
  object-fit: contain;
  border-radius: 6px 6px 0 0

}

@media screen and (min-width: (($MQMobile + $MQNarrow)/2)) {
div.img-side{
  width: 300px;
  /* height: 200px; */
  margin: 0 0 0.6em 0;
  margin-left: 1.4em;
  float: right;
  clear: right;
}
div.img-side img.img-side, img.side-img{
  width: 300px;
  display: block;
  float: right;
  clear: right;
  object-fit: contain;
}
}

@media screen and (max-width: (($MQMobile + $MQNarrow)/2))
  br
    display none

h1, h2, h3, h4, h5 
  clear both

div.img-side p{
  margin: 0;
  text-align: center
}

</style>
