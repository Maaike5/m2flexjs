let canvas = document.getElementById("canvas");
let g = canvas.getContext("2d");

const gamestate_start=0;
const gamestate_ingame=1;
const gamestate_gameover=2;

const gamestate_start=0;
const gamestate_roll=1;
const gamestate_end=0;

let boardPositionSize= 50;
let pawnPositions= [];
let boardPositions= [];
let playeramountButtons= [];