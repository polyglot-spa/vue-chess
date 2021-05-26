<template>
  <vue-chess-header @quick-start-game="quickStartGame"></vue-chess-header>
  <chessboard-wrapper id="chessboardWrapper" ref="chessboardWrapper"></chessboard-wrapper>
</template>

<script>
import ChessboardWrapper from "./components/chessboard-wrapper"
import VueChessHeader from "./components/vue-chess-header";

export default {
  name: 'App',
  components: {
    VueChessHeader,
    ChessboardWrapper,
  },
  methods: {
    quickStartGame() {
      this.$refs.chessboardWrapper.quickStartGame()
    }
  },
  mounted() {
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
