<template>
  <div class="buttons-box">
    <ui5-button icon="sap-icon://thumb-up" @click="onLike">Like</ui5-button>
    <ui5-button icon="sap-icon://thumb-down" type="Negative" @click="onUnLike"
      >Not really</ui5-button
    >
  </div>
</template>
<script>
import "@ui5/webcomponents/dist/Button";
export default {
  methods: {
    onLike() {
      this.$emit("like");
    },
    onUnLike() {
      this.$emit("unlike");
    }
  }
};
</script>
<style scoped>
.buttons-box {
  margin: 1rem;
  width: 400px;
  display: flex;
  justify-content: space-between;
}
</style>
