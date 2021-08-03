<template>
<div>
  <p v-if="err" v-text="'Failed: '+levelid" style="opacity: 0.3"/>
  <div class="cytoid-level-card"
    v-else-if="leveldata"
  >
    <div class="background-dim" />
    <div
      class="background"
      :style="'background-image: url('+leveldata.cover.thumbnail+')'"
    />
    <a class="link" :href="'https://cytoid.io/levels/'+leveldata.uid" target="_blank" />
    <div class="index">
      <div class="difficulty-box" v-if="leveldata">
        <ctd-diff
          v-for="diff in leveldata.charts"
          :key="diff.id"
          :type="diff.type"
          :name="diff.name"
          :diff="diff.difficulty"
        />
      </div>
      <div class="info-box">
        <p class="artist" v-text="leveldata.metadata.artist.name" />
        <h1 class="title" v-text="leveldata.title" />
        <div class="owner-box" v-if="leveldata.owner">
          <div class="owner" v-if="leveldata.owner">
            <a :href="'https://cytoid.io/profile/'+leveldata.owner.uid" target="_blank" />
            <img :src="leveldata.owner.avatar.small" class="no-zoom">
            <span v-text="leveldata.owner.name || leveldata.owner.uid" />
          </div>
        </div>
      </div>
    </div>
  </div>
  <p v-else v-text="'Loading: ' + levelid" style="height: 10rem" />
</div>
</template>

<script>
import axios from 'axios'; 
import CtdDiff from './CtdDiff.vue';
export default {
  name: "CytoidLevelCard",

  components: {CtdDiff},

  props: {
    levelid: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      leveldata: null,
      io: null,
      err: null
    }
  },
  methods: {
    inview() {
      var observer = new IntersectionObserver(
        changes => {
          // console.log(this.levelid,changes[0].intersectionRatio)
          if (this.levelid,changes[0].intersectionRatio > 0) {
          this.loadcard()
          observer.disconnect()
          }
        },
      );
      observer.observe(this.$el)
    },
    loaddata(data) {
      this.leveldata = data
      if (this.leveldata.state !== "PUBLIC") {
        this.err = "no PUBLIC"
      }
    },
    loadcard() {
      if (this.levelid){
        axios
          .get('https://services.cytoid.io/levels/'+this.levelid)
          .then(response => (this.loaddata(response.data)))
          .catch(error => {
            console.log(error)
            this.err = error
          });
      }
    },
  },
  mounted() {
    this.$nextTick(function(){
      this.inview()
    })
  }
};
</script>

<style lang="stylus">
.cytoid-level-card
  margin 1rem 0.5rem
  border-radius 0.5rem
  position: relative
  .background, .link, .background-dim
    content: "";
    position: absolute;
    left:0;
    top:0;
    width:100%;
    height:100%;
    border-radius 0.5rem
    z-index -1
  .background-dim
    opacity 1
    background #333
    z-index -2
  .background
    opacity 0.6
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  .link
    display inline
    z-index 0

  .index
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: calc(100% - 1rem);
    padding: 0.5rem 0.75rem;
    .difficulty-box
      text-align: end;
    .info-box
      color white
      margin 0.5rem 0.2rem
      h1, h2, h3, h4, h5, p
        margin 0.1rem 0
      .artist
        font-size 1rem
      .title
        font-size 1.5rem
        
      .owner-box
        min-height: 32px;
        .owner
          position: absolute;
          display: inline-block;
          box-sizing: border-box;
          height: 32px;
          margin: 2px 0;
          color: inherit;
          white-space: nowrap;
          background-color: #33333388;
          border-radius: 16px;
          cursor: pointer;
          user-select: none;
          will-change: box-shadow;
          img
            position: relative;
            display: inline-block;
            width: 32px;
            height: 32px;
            margin-right: -4px;
            overflow: hidden;
            color: #fff;
            font-size: 18px;
            line-height: 32px;
            text-align: center;
            vertical-align: middle;
            background-color: #333;
            border-radius: 50%;
          span 
            display: inline-block;
            height: 32px;
            padding-right: 12px;
            padding-left: 6px;
            font-size: 14px;
            line-height: 32px;
            vertical-align: middle;
            font-weight 500
          a
            content: "";
            position: absolute;
            left:0;
            top:0;
            width:100%;
            height:100%;
            border-radius 50%

</style>
