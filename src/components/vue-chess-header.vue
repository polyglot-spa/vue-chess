<template>
  <header class="container-fluid" id="vue-secondary-header">
    <div class="row p-2">
      <div class="col-3">
        <img class="w-100" alt="Vue logo" src="./../assets/logo.png">
      </div>
      <div class="col-6 d-grid gap-2">
        <button id="quickStartBtn" type="button" class="btn btn-light w-100 btn-sm" @click="quickStartGame" v-bind:disabled="isQuickStartBtnDisabled">Quick Start</button>
        <button id="advancedConfigBtn" type="button" class="btn btn-light w-100 btn-sm" @click="showAdvancedConfigModal" v-bind:disabled="isAdvancedConfigBtnDisabled">Advanced Config</button>
      </div>
      <div class="col-3">
        <img class="w-100" alt="Chess logo" src="./../assets/Centaur.png">
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "vue-chess-header",
  data() {
    return {
      isQuickStartBtnDisabled: false,
      isAdvancedConfigBtnDisabled: false
    }
},
  mounted() {
  },
  methods: {
    disableButtons() {
      this.isQuickStartBtnDisabled = true;
      this.isAdvancedConfigBtnDisabled = true;
    },
    quickStartGame() {
      this.disableButtons();
      this.$emit('quickStartGame');
    },
    showAdvancedConfigModal() {
      this.disableButtons();
      this.$emit('showAdvancedConfigModal');
    }
  }
}
</script>

<style scoped>
#vue-secondary-header {
  background-image: url("./../assets/board-background.png");
}
</style>
