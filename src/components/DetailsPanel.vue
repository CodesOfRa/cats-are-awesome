<template>
  <div class="details-box">
    <h3>{{ cat.name }}</h3>
    <!-- BADGE -->
    <ui5-badge
      v-for="(i, key) in temperament"
      :key="'badge' + key"
      :color-scheme="key + 1"
      >{{ i }}</ui5-badge
    >
    <div class="details-box-description">{{ cat.description }}</div>
    <ui5-link :href="cat.wikipedia_url" target="_blank">Read more ...</ui5-link>
    <div>
      <span>Origin</span>
      {{ cat.origin }}
    </div>
    <div>
      <span>Life Span</span>
      {{ cat.life_span }} years
    </div>
    <div class="level-box">
      <span>Energy Level</span>
      <Stars :max="5" :level="cat.energy_level"></Stars>
    </div>
    <div class="level-box">
      <span>Adaptability</span>
      <Stars :max="5" :level="cat.adaptability"></Stars>
    </div>
    <div class="level-box">
      <span>Dog Friendly</span>
      <Stars :max="5" :level="cat.dog_friendly"></Stars>
    </div>
    <div class="level-box">
      <span>Social Needs</span>
      <Stars :max="5" :level="cat.social_needs"></Stars>
    </div>
  </div>
</template>
<script>
import "@ui5/webcomponents/dist/Badge";
import "@ui5/webcomponents/dist/Link";

import Stars from "./Stars";
export default {
  name: "detailspanel",
  components: { Stars },
  props: ["cat"],
  computed: {
    temperament() {
      return this.cat.temperament ? this.cat.temperament.split(",") : "";
    }
  }
};
</script>
<style scoped>
.details-box {
  max-width: 700px;
  padding: 1rem;
}
.details-box div,
h3 {
  font-family: "72-Regular";
}
.details-box div {
  color: #6a6d70;
}
.details-box span {
  color: black;
  width: 110px;
  padding-right: 0.5rem;
}
.details-box > div:last-child {
  padding-bottom: 1rem;
}

.details-box-description {
  padding: 0.8rem 0rem;
  color: #6a6d70;
}

.level-box {
  display: flex;
  color: #6a6d70;
}

.level-box > span {
  max-width: 200px;
}
</style>
