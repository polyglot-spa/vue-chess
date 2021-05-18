<template>
  <vue-chess-header></vue-chess-header>
  <div id="vue-chess" class="container-fluid mt-1">
    <chess-board id="chessboard" v-pre>
    </chess-board>
  </div>
</template>

<script>
import "chessboard-element";
import VueChessHeader from "./components/vue-chess-header";

export default {
  name: 'App',
  components: {
    VueChessHeader,
  },
}
</script>

<style>
#vue-chess {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
