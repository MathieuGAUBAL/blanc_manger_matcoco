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
  numero4: 0
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
      STORE.points1 = action.points1;
      points1 = action.points1;
      console.log(points1);
      break;

    case GET_POINTS2.type:
      STORE.points2 = action.points2;
      points2 = action.points2;
      console.log(points2);
      break;

    case GET_POINTS3.type:
      STORE.points3 = action.points3;
      points3 = action.points3;
      console.log(points3);
      break;

    case GET_POINTS4.type:
      STORE.points4 = action.points4;
      points4 = action.points4;
      console.log(points4);
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

    default:
      break;
  }

  return {
    player1: player1,
    player2: player2,
    player3: player3,
    player4: player4,

    points1: points1,
    points2: points2,
    points3: points3,
    points4: points4,

    numero1: numero1,
    numero2: numero2,
    numero3: numero3,
    numero4: numero4
  };
};

export default rootReducer;
