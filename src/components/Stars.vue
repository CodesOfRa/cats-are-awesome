<template>
  <div class="stars-box">
    <div v-for="(i, key) in values" :key="'id_' + key">
      <ui5-icon
        v-if="i === 1"
        src="sap-icon://favorite"
        style="color:#FFC900"
      ></ui5-icon>
      <ui5-icon
        v-else
        src="sap-icon://unfavorite"
        style="color:#FFC900"
      ></ui5-icon>
    </div>
  </div>
</template>
<script>
import "@ui5/webcomponents/dist/Icon";
export default {
  name: "star",
  props: ["max", "level"],
  mounted() {},
  computed: {
    values() {
      var value = Array(this.max).fill(1);
      value.fill(0, this.level);
      return value;
    }
  }
};
</script>
<style>
.stars-box {
  display: flex;
}
</style>
