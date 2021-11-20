<template>
<a
  :href="link"
  :style="`--box-background-gradient: linear-gradient(to right bottom, ${color[0]}, ${color[0]}00);
           --box-background-gradient-dark: linear-gradient(to right bottom, ${color[1]||color[0]}, ${color[1]||color[0]}00);`"
>
	<div class="box is-gradient clickable"><h1>{{title}}</h1>
	    <p style="margin-top: 0.5rem; margin-bottom: 0.5rem;">
        {{comment}}
      </p>
	</div>
</a>
</template>

<script>
export default {
  name: "ColorfulCard",

  props: {
    title: {
      type: String,
      required: true
    },
    comment: {
      type: String,
      required: true
    },
    link: {
      type: String
    },
    color: {
      type: Array,
      required: true
    },
  },
}
</script>

<style scoped>
.box {
  background-color: #292d38;
  border-radius: 6px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, .1), 0 3px 6px rgba(0, 0, 0, .066);
  display: block;
  padding: 1.5rem 2rem;
  margin-bottom: 1.5rem;
}
.box .button,
.button.is-box-button {
  border: none;
  text-transform: uppercase;
  font-weight: 700;
  transition: .2s cubic-bezier(.215, .61, .355, 1);
  background-color: #3f424e;
}

.box {
  background: radial-gradient(circle farthest-corner at 0 0, transparent, #fafafa 100%), var(--box-background-gradient, linear-gradient(to right bottom, #acb6e5, #fff));
}
body.darkmode .box {
  background: radial-gradient(circle farthest-corner at 0 0, transparent, #292d38 100%), var(--box-background-gradient-dark, linear-gradient(to right bottom, #acb6e5, #fff));
}

a {
  color: #2c3e50;
}
a:hover {
  text-decoration: none !important;;
}
body.darkmode a {
  color: #FFF;
}
</style>