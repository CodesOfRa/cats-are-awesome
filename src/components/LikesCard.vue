<template>
  <div>
    <div class="cards-box">
      <!-- LIKE -->

      <ui5-card
        avatar="sap-icon://thumb-up"
        heading="I really like these cats"
        subtitle="Here is a list of them"
        :status="like.length + ` 😻`"
        class="medium"
        v-show="like.length !== 0"
        style="width:50%"
      >
        <div class="card-content">
          <ui5-list separators="None" class="card-content-child">
            <ui5-li
              v-for="i in like"
              :key="i.id"
              :image="i.url"
              :description="i.breeds[0].temperament"
              @click="onSelectCat(i)"
              >{{ i.breeds[0].name }}</ui5-li
            >
          </ui5-list>
        </div>
      </ui5-card>
      <!-- UNLIKE -->
      <ui5-card
        avatar="sap-icon://thumb-down"
        heading="I don't like these ones"
        subtitle="Here is a list of them"
        :status="unlike.length + ` 😾`"
        class="medium"
        v-show="unlike.length !== 0"
        style="width:50%"
      >
        <div class="card-content">
          <ui5-list separators="None" class="card-content-child">
            <ui5-li
              v-for="i in unlike"
              :key="i.id"
              :image="i.url"
              :description="i.breeds[0].temperament"
              @click="onSelectCat(i)"
              >{{ i.breeds[0].name }}</ui5-li
            >
          </ui5-list>
        </div>
      </ui5-card>
    </div>

    <DetailsPanel v-show="openDetails" :cat="selectedCat"></DetailsPanel>
  </div>
</template>
<script>
import "@ui5/webcomponents/dist/Card";

import DetailsPanel from "./DetailsPanel";
export default {
  components: { DetailsPanel },
  props: ["like", "unlike"],
  data() {
    return { openDetails: false, selectedCat: {} };
  },
  methods: {
    onSelectCat(cat) {
      this.openDetails = true;
      const { breeds } = cat;

      if (breeds != undefined) {
        this.selectedCat = breeds[breeds.length - 1];
      }
    }
  }
};
</script>
<style scoped>
.cards-box {
  display: flex;
  justify-content: space-between;
  max-width: 700px;
}
.cards-box ui5-card {
  margin: 1rem;
}
</style>
