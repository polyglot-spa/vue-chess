<template>
  <header class="container-fluid" id="vue-secondary-header">
    <div class="row p-2">
      <div class="col-3">
        <img class="w-100" alt="Vue logo" src="./../assets/logo.png">
      </div>
      <div class="col-6 d-grid gap-2">
        <button type="button" class="btn btn-light w-100 btn-sm" @click="quickStartGame">Quick Start</button>
        <button type="button" class="btn btn-light w-100 btn-sm">Advanced Config</button>
      </div>
      <div class="col-3">
        <img class="w-100" alt="Chess logo" src="./../assets/Centaur.png">
      </div>
    </div>
  </header>
</template>

<script>
import Chess from "chess.js";
export default {
  name: "vue-chess-header",
  methods: {
    quickStartGame() {
      const board = document.querySelector('chess-board');
      board.setAttribute("position", "start");
      board.setAttribute("draggable-pieces", "");
      const game = new Chess();

      board.addEventListener('drag-start', (e) => {
        // eslint-disable-next-line no-unused-vars
        const {source, piece, position, orientation} = e.detail;

        // do not pick up pieces if the game is over
        if (game.game_over()) {
          e.preventDefault();
          return;
        }

        // only pick up pieces for White
        if (piece.search(/^b/) !== -1) {
          e.preventDefault();
          return;
        }
      });

      function makeRandomMove () {
        let possibleMoves = game.moves();

        // game over
        if (possibleMoves.length === 0) {
          return;
        }

        const randomIdx = Math.floor(Math.random() * possibleMoves.length);
        game.move(possibleMoves[randomIdx]);
        board.setPosition(game.fen());
      }

      board.addEventListener('drop', (e) => {
        const {source, target, setAction} = e.detail;

        // see if the move is legal
        const move = game.move({
          from: source,
          to: target,
          promotion: 'q' // NOTE: always promote to a queen for example simplicity
        });

        // illegal move
        if (move === null) {
          setAction('snapback');
          return;
        }

        // make random legal move for black
        window.setTimeout(makeRandomMove, 250);
      });

// update the board position after the piece snap
// for castling, en passant, pawn promotion
      board.addEventListener('snap-end', () => {
        board.setPosition(game.fen());
      });
    }
  }
}
</script>

<style scoped>
#vue-secondary-header {
  background-image: url("./../assets/board-background.png");
}
</style>