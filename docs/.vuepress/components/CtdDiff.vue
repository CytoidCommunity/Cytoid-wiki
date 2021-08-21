<template>
<div class="difficulty-badge">
  <div v-bind:class="[type, name?'has-name':'']">
    <span class="name" v-if="name" v-text="name"></span>
    <span class="difficulty" v-text="getDiffText"></span>
  </div>
</div>
</template>

<script> 
export default {
  name: "CtdDiff",

  components: { },

  props: {
    type: {
      type: String,
      required: true
    },
    diff: {
      type: [String, Number],
      default: 0
    },
    name: {
      type: String,
      required: false
    },
  },
  computed: {
    getDiffText() {
      if (this.diff == '' || this.diff <= 0) { return '?' } else if (this.diff >= 16) { return '15+' } else { return this.diff }
    }
  }
};
</script>

<style lang="stylus">
$diff-badge-size = 2.3rem
.difficulty-badge
  display: inline-block
  margin: 0.2rem;
  user-select: none;
  div
    display: flex;
    color: white;
    height: $diff-badge-size;
    max-height: $diff-badge-size;
    min-width: $diff-badge-size;
    width: fit-content;
    border-radius: $diff-badge-size;
    justify-content: center;
    align-items: center;
  .has-name
    .name
      margin: 0 0.25rem 0 1rem;
      flex: 1;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      max-width: 100px
    .difficulty
      margin: 0 1rem 0 0.25rem;
  .easy
    background: linear-gradient(to bottom right,#4ca2cd,#67b26f);
  .hard
    background: linear-gradient(to top left, #B06AB3, #4568DC);
  .extreme
    background: linear-gradient(to top left, #6f0000, #200122);
  .ex
    background: linear-gradient(to top left, #6f0000, #200122);
@media (max-width: (($MQMobileNarrow + $MQMobile)/2))
  .difficulty-badge .has-name
    .name
      display: none!important
    .difficulty
      margin: 0
</style>
