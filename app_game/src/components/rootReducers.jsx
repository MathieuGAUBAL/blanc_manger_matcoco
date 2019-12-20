import { GET_PLAYER1 } from "./ActionTypes";
import { GET_PLAYER2 } from "./ActionTypes";
import { GET_PLAYER3 } from "./ActionTypes";
import { GET_PLAYER4 } from "./ActionTypes";

import { GET_POINTS1 } from "./ActionTypes";
import { GET_POINTS2 } from "./ActionTypes";
import { GET_POINTS3 } from "./ActionTypes";
import { GET_POINTS4 } from "./ActionTypes";

import { GET_NUMERO1 } from "./ActionTypes";
import { GET_NUMERO2 } from "./ActionTypes";
import { GET_NUMERO3 } from "./ActionTypes";
import { GET_NUMERO4 } from "./ActionTypes";

import { GET_PLAYERCARD1 } from "./ActionTypes";
import { GET_PLAYERCARD2 } from "./ActionTypes";
import { GET_PLAYERCARD3 } from "./ActionTypes";
import { GET_PLAYERCARD4 } from "./ActionTypes";

import { GET_WINNERNAME1 } from "./ActionTypes";
import { GET_WINNERNAME2 } from "./ActionTypes";
import { GET_WINNERNAME3 } from "./ActionTypes";
import { GET_WINNERNAME4 } from "./ActionTypes";

import { GET_WINNERIMAGE1 } from "./ActionTypes";
import { GET_WINNERIMAGE2 } from "./ActionTypes";
import { GET_WINNERIMAGE3 } from "./ActionTypes";
import { GET_WINNERIMAGE4 } from "./ActionTypes";

import { GET_GAMECARD } from "./ActionTypes";

import { GET_RESETPOINTS } from "./ActionTypes";

const STORE = {
  player1: "",
  player2: "",
  player3: "",
  player4: "",

  points1: 0,
  points2: 0,
  points3: 0,
  points4: 0,

  numero1: 0,
  numero2: 0,
  numero3: 0,
  numero4: 0,

  playercard1: "",
  playercard2: "",
  playercard3: "",
  playercard4: "",

  gamecard: "",

  winnername1: "",
  winnername2: "",
  winnername3: "",
  winnername4: "",

  winnerimage1: false,
  winnerimage2: false,
  winnerimage3: false,
  winnerimage4: false
};

const rootReducer = (state, action) => {
  let player1 = STORE.player1;
  let player2 = STORE.player2;
  let player3 = STORE.player3;
  let player4 = STORE.player4;

  let points1 = STORE.points1;
  let points2 = STORE.points2;
  let points3 = STORE.points3;
  let points4 = STORE.points4;

  let numero1 = STORE.numero1;
  let numero2 = STORE.numero2;
  let numero3 = STORE.numero3;
  let numero4 = STORE.numero4;

  let playercard1 = STORE.playercard1;
  let playercard2 = STORE.playercard2;
  let playercard3 = STORE.playercard3;
  let playercard4 = STORE.playercard4;

  let gamecard = STORE.gamecard;

  let winnername1 = STORE.winnername1;
  let winnername2 = STORE.winnername2;
  let winnername3 = STORE.winnername3;
  let winnername4 = STORE.winnername4;

  let winnerimage1 = STORE.winnerimage1;
  let winnerimage2 = STORE.winnerimage2;
  let winnerimage3 = STORE.winnerimage3;
  let winnerimage4 = STORE.winnerimage4;

  switch (action.type) {
    //player
    case GET_PLAYER1.type:
      STORE.player1 = action.player1;
      player1 = action.player1;
      console.log(player1);
      break;

    case GET_PLAYER2.type:
      STORE.player2 = action.player2;
      player2 = action.player2;
      console.log(player2);
      break;

    case GET_PLAYER3.type:
      STORE.player3 = action.player3;
      player3 = action.player3;
      console.log(player3);
      break;

    case GET_PLAYER4.type:
      STORE.player4 = action.player4;
      player4 = action.player4;
      console.log(player4);
      break;

    //points

    case GET_POINTS1.type:
      STORE.points1 += 1;

      break;

    case GET_POINTS2.type:
      STORE.points2 += 1;
      break;

    case GET_POINTS3.type:
      STORE.points3 += 1;
      break;

    case GET_POINTS4.type:
      STORE.points4 += 1;
      break;

    case GET_NUMERO1.type:
      STORE.numero1 = action.numero1;
      numero1 = action.numero1;
      console.log(numero1);
      break;

    case GET_NUMERO2.type:
      STORE.numero2 = action.numero2;
      numero2 = action.numero2;
      console.log(numero2);
      break;

    case GET_NUMERO3.type:
      STORE.numero3 = action.numero3;
      numero3 = action.numero3;
      console.log(numero3);
      break;

    case GET_NUMERO4.type:
      STORE.numero4 = action.numero4;
      numero4 = action.numero4;
      console.log(numero4);
      break;

    case GET_PLAYERCARD1.type:
      STORE.playercard1 = action.playercard1;
      playercard1 = action.playercard1;
      console.log(playercard1);
      break;

    case GET_PLAYERCARD2.type:
      STORE.playercard2 = action.playercard2;
      playercard2 = action.playercard2;
      console.log(playercard2);
      break;

    case GET_PLAYERCARD3.type:
      STORE.playercard3 = action.playercard3;
      playercard3 = action.playercard3;
      console.log(playercard3);
      break;

    case GET_PLAYERCARD4.type:
      STORE.playercard4 = action.playercard4;
      playercard4 = action.playercard4;
      console.log(playercard4);
      break;

    case GET_GAMECARD.type:
      STORE.gamecard = action.gamecard;
      gamecard = action.gamecard;
      console.log(gamecard);
      break;

    case GET_WINNERNAME1.type:
      STORE.winnername1 = action.winnername1;
      winnername1 = action.winnername1;
      console.log(winnername1);
      break;

    case GET_WINNERNAME2.type:
      STORE.winnername2 = action.winnername2;
      winnername2 = action.winnername2;
      console.log(winnername2);
      break;

    case GET_WINNERNAME3.type:
      STORE.winnername3 = action.winnername3;
      winnername3 = action.winnername3;
      console.log(winnername3);
      break;

    case GET_WINNERNAME4.type:
      STORE.winnername4 = action.winnername4;
      winnername4 = action.winnername4;
      console.log(winnername4);
      break;

    case GET_WINNERIMAGE1.type:
      STORE.winnerimage1 = action.winnerimage1;
      winnerimage1 = action.winnerimage1;
      console.log(winnerimage1);
      break;

    case GET_WINNERIMAGE2.type:
      STORE.winnerimage2 = action.winnerimage2;
      winnerimage2 = action.winnerimage2;
      console.log(winnerimage2);
      break;

    case GET_WINNERIMAGE3.type:
      STORE.winnerimage3 = action.winnerimage3;
      winnerimage3 = action.winnerimage3;
      console.log(winnerimage3);
      break;

    case GET_WINNERIMAGE4.type:
      STORE.winnerimage4 = action.winnerimage4;
      winnerimage4 = action.winnerimage4;
      console.log(winnerimage4);
      break;

    case GET_RESETPOINTS.type:
      STORE.points1 = 0;
      STORE.points2 = 0;
      STORE.points3 = 0;
      STORE.points4 = 0;

      break;
    default:
      break;
  }

  console.log("Score player 1 : ", STORE.points1);
  console.log("Score player 2 : ", STORE.points2);
  console.log("Score player 3 : ", STORE.points3);
  console.log("Score player 4 : ", STORE.points4);

  return {
    player1: player1,
    player2: player2,
    player3: player3,
    player4: player4,

    points1: STORE.points1,
    points2: STORE.points2,
    points3: STORE.points3,
    points4: STORE.points4,

    numero1: numero1,
    numero2: numero2,
    numero3: numero3,
    numero4: numero4,

    playercard1: playercard1,
    playercard2: playercard2,
    playercard3: playercard3,
    playercard4: playercard4,

    gamecard: gamecard,

    winnername1: winnername1,
    winnername2: winnername2,
    winnername3: winnername3,
    winnername4: winnername4,

    winnerimage1: winnerimage1,
    winnerimage2: winnerimage2,
    winnerimage3: winnerimage3,
    winnerimage4: winnerimage4
  };
};

export default rootReducer;
