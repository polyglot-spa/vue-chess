<template>
   <chess-board id="chessboard" class="" v-pre></chess-board>
</template>

<script>
import * as chessBoard from "chessboard-element";
import Chess from "chess.js";

export default {
  name: "chess-board-wrapper",
  components: {
    chessBoard
  },
  methods: {
    quickStartGame() {
      const board = this.$el;
      const game = new Chess();

      board.start();
      board.setAttribute("draggable-pieces", "");

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

</style>