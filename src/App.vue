<template>
  <advanced-config-modal v-if="showConfigModal" @closeAdvancedConfigModal="closeAdvancedConfigModal" @advancedConfigStartGame="advancedConfigStartGame"></advanced-config-modal>
  <vue-chess-header @quickStartGame="quickStartGame" @showAdvancedConfigModal="showAdvancedConfigModal"></vue-chess-header>
  <div id="chessBoardBackground">
    <chessboard-wrapper id="vueChessBoard" ref="vueChessBoard"></chessboard-wrapper>
  </div>
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
      this.$refs.vueChessBoard.quickStartGame();
    },
    showAdvancedConfigModal() {
      this.showConfigModal = true;
    },
    closeAdvancedConfigModal() {
      this.showConfigModal = false;
    },
    advancedConfigStartGame(event) {
      this.$refs.vueChessBoard.advancedConfigStartGame(event.color, event.fen, event.selfPlay);
    }
  },
  mounted() {
    let emitter;
    let getWindowEmitterMaxTriers = null;

    const attachEmitter = () => {
      return new Promise((resolve, reject) => {
        waitForEmitterOnWindow(resolve, reject);
      })
    }

    const waitForEmitterOnWindow = (resolve, reject) => {
      if (!getWindowEmitterMaxTriers) {
        getWindowEmitterMaxTriers = 10;
      }
      if (!window.emitter) {
        if (getWindowEmitterMaxTriers > 0) {
          setTimeout(waitForEmitterOnWindow.bind(this, resolve, reject), 300);
        }
      } else {
        resolve();
      }
    }

    attachEmitter().then(() => {
      emitter = window.emitter;
      emitter.emit('hello', "Vue MFE");
    });
  }
}
</script>

<style>
#chessBoardBackground {
  background-image: url("./assets/board-background.png");
}
#vueChessBoard {
  max-width: 900px;
  margin: auto;}
</style>
