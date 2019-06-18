<template>
  <div id="app">
    <ui5-shellbar :primary-title="title"></ui5-shellbar>
    <ButtonGroup
      @like="addLikeCat(cat)"
      @unlike="addUnlikeCat(cat)"
    ></ButtonGroup>
    <!-- TODO: make a component of this -->
    <div>
      <img :src="cat.url" class="cat-card" />
      <span>{{ cat.breeds[0].name }}</span>
    </div>
    <!-- TODO: make this a component -->
    <span>👍</span>
    <ui5-card
      avatar="sap-icon://group"
      heading="Team Space"
      subtitle="Direct Reports"
      status="3 of 10"
      class="medium"
    >
      <div class="card-content">
        <ui5-list
          separators="None"
          class="card-content-child"
          style="width: 100%"
        >
          <ui5-li
            v-for="i in like"
            :key="i.id"
            :image="i.url"
            :description="i.breeds[0].name"
            >{{ i.breeds[0].name }}</ui5-li
          >
        </ui5-list>
      </div>
    </ui5-card>
    <!-- TODO:make this a component -->
    <span>👎</span>
    <ui5-card
      avatar="sap-icon://group"
      heading="Team Space"
      subtitle="Direct Reports"
      status="3 of 10"
      class="medium"
    >
      <div class="card-content">
        <ui5-list
          separators="None"
          class="card-content-child"
          style="width: 100%"
        >
          <ui5-li
            v-for="i in unlike"
            :key="i.id"
            :image="i.url"
            :description="i.breeds[0].name"
            >{{ i.breeds[0].name }}</ui5-li
          >
        </ui5-list>
      </div>
    </ui5-card>
  </div>
</template>

<script>
import "@ui5/webcomponents/dist/ShellBar";
import ButtonGroup from "./components/GroupButtons";

import axios from "axios";

axios.defaults.headers.common["x-api-key"] = process.env.VUE_APP_API_KEY;
export default {
  name: "app",
  components: { ButtonGroup },
  data() {
    return {
      title: "Cats are fun",
      like: [],
      unlike: [],
      cat: {}, //current displayed cat
      breeds: []
    };
  },
  mounted() {
    // this.newCat();
    //get all breeds information at once;
    this.getBreeds();
  },
  methods: {
    newCat() {
      const id = this.breeds[this.generateBreedId()];
      axios
        .get(`https://api.thecatapi.com/v1/images/search?breed_ids=${id.id}`)
        .then(response => {
          const { data } = response;
          this.cat = data[data.length - 1];
        });
    },
    addLikeCat(cat) {
      const breed = this.returnBreed(cat);
      //add the cat to the liked list
      this.like.push({ ...cat, ...breed });
      //generate a new cat object
      this.newCat();
    },

    addUnlikeCat(cat) {
      const breed = this.returnBreed(cat);
      //add the cat to the not so nice list :)
      this.unlike.push({ ...cat, ...breed });
      //generate a new cat object
      this.newCat();
    },
    returnBreed(cat) {
      return this.breeds.find(data => {
        if (data.id === cat.id) {
          return data;
        }
      });
    },
    getBreeds() {
      var url = "https://api.thecatapi.com/v1/breeds";
      axios.get(url).then(response => {
        const { data } = response;
        this.breeds = data;
        this.newCat();
      });
    },
    generateBreedId() {
      const n = this.breeds.length;
      return parseInt(Math.random() * n);
    }
  }
};
</script>

<style lang="scss">
.cat-card {
  max-width: 400px;
}
</style>
