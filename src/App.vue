<template>
  <advanced-config-modal v-if="showConfigModal" @closeAdvancedConfigModal="closeAdvancedConfigModal" @advancedConfigStartGame="advancedConfigStartGame"></advanced-config-modal>
  <vue-chess-header @quickStartGame="quickStartGame" @showAdvancedConfigModal="showAdvancedConfigModal"></vue-chess-header>
  <chessboard-wrapper id="chessboardWrapper" ref="chessboardWrapper"></chessboard-wrapper>
</template>

<script>
import ChessboardWrapper from "./components/chessboard-wrapper";
import VueChessHeader from "./components/vue-chess-header";
import AdvancedConfigModal from "./components/advanced-config-modal";

export default {
  name: 'App',
  components: {
    VueChessHeader,
    ChessboardWrapper,
    AdvancedConfigModal
  },
  data() {
    return {
      showConfigModal: false
    }
  },
  methods: {
    quickStartGame() {
      this.$refs.chessboardWrapper.quickStartGame();
    },
    showAdvancedConfigModal() {
      this.showConfigModal = true;
    },
    closeAdvancedConfigModal() {
      this.showConfigModal = false;
    },
    advancedConfigStartGame(event) {
      this.$refs.chessboardWrapper.advancedConfigStartGame(event.color, event.fen, event.selfPlay);
    }
  },
}
</script>

<style>
#chessboardWrapper {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 5px;
}
</style>
