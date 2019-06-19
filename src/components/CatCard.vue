<template>
  <div class="cat-card-box">
    <img :src="cat.url" class="cat-card" />
    <span>{{ name }}</span>
  </div>
</template>
<script>
export default {
  props: ["cat"],
  computed: {
    name() {
      const { breeds } = this.cat;
      if (breeds != undefined) {
        const n = breeds.length;
        return breeds[n - 1].name;
      } else {
        return "";
      }
    }
  }
};
</script>
<style scoped>
.cat-card-box {
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  margin: 1rem;
}
.cat-card-box img {
  box-shadow: 1px 1px 6px 3px rgba(0, 0, 0, 0.2);
  max-width: 400px;
  max-height: 250px;
}
.cat-card-box span {
  background: linear-gradient(
    to right,
    #f79533 0%,
    #f37055 15%,
    #ef4e7b 30%,
    #a166ab 44%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 1.5rem;
  margin: 1rem;
}
</style>
