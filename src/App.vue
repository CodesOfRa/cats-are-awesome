<template>
  <div class="main-box">
    <!-- <Stars :max="5" :level="3"></Stars> -->
    <!-- <ui5-messagestrip type="Information" @click.prevent="handleClick">Information MessageStrip</ui5-messagestrip>
    <a @click.once="handleClick($event)">TEST</a>-->
    <ui5-shellbar :primary-title="title"></ui5-shellbar>
    <ButtonGroup
      @like="addLikeCat(cat)"
      @unlike="addUnlikeCat(cat)"
    ></ButtonGroup>
    <!-- TODO: make a component of this -->
    <CatCard :cat="cat"></CatCard>
    <LikesCard :like="like" :unlike="unlike"></LikesCard>
  </div>
</template>

<script>
import "@ui5/webcomponents/dist/ShellBar";
import "@ui5/webcomponents/dist/MessageStrip";

import ButtonGroup from "./components/GroupButtons";
import LikesCard from "./components/LikesCard";
import CatCard from "./components/CatCard";

import axios from "axios";

axios.defaults.headers.common["x-api-key"] = process.env.VUE_APP_API_KEY;
export default {
  name: "app",
  components: { ButtonGroup, CatCard, LikesCard },
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
    handleClick() {
      console.log("🌟");
    },
    addLikeCat(cat) {
      //add the cat to the liked list
      this.like.push(cat);
      //generate a new cat object
      this.newCat();
    },

    addUnlikeCat(cat) {
      //add the cat to the not so nice list :)
      this.unlike.push(cat);
      //generate a new cat object
      this.newCat();
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
@font-face {
  font-family: "72-Regular";
  src: url("assets/fonts/72-Regular.woff") format("woff"),
    url("assets/fonts/72-Regular.woff2") format("woff2"),
    url("https://openui5nightly.hana.ondemand.com/resources/sap/ui/core/themes/sap_belize/fonts/72-Regular.woff")
      format("woff"),
    url("https://openui5nightly.hana.ondemand.com/resources/sap/ui/core/themes/sap_belize/fonts/72-Regular.woff2")
      format("woff2"),
    local("72-Regular");
}
body {
  margin: 0;
}
.main-box {
  display: flex;
  flex-flow: column;
  align-items: CENTER;
}
</style>
