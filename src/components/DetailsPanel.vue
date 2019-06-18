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
    <div>{{ cat.description }}</div>

    <div>
      <span>Origin :</span>
      {{ cat.origin }}
    </div>
    <div>
      <span>Life Span :</span>
      {{ cat.life_span }}
    </div>
    <div class="level-box">
      <span>Energy Level :</span>
      <Stars :max="5" :level="cat.energy_level"></Stars>
    </div>
    <div class="level-box">
      <span>Adaptability :</span>
      <Stars :max="5" :level="cat.adaptability"></Stars>
    </div>
    <div class="level-box">
      <span>Dog Friendly :</span>
      <Stars :max="5" :level="cat.dog_friendly"></Stars>
    </div>
    <div class="level-box">
      <span>Social Needs :</span>
      <Stars :max="5" :level="cat.social_needs"></Stars>
    </div>
  </div>
</template>
<script>
import "@ui5/webcomponents/dist/Badge";

import Stars from "./Stars";
export default {
  name: "detailspanel",
  components: { Stars },
  props: ["cat"],
  computed: {
    temperament() {
      return this.cat.temperament.split(",");
    }
  }
};
</script>
<style scoped>
.details-box {
  max-width: 700px;
}
.level-box {
  display: flex;
}
</style>
