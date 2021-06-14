const MovingObject = require("./moving_object.js");
const Asteroid = require("./asteroid.js");



document.addEventListener('DOMContentLoaded', () => {
    const canvasEl = document.getElementById('game-canvas');
    const ctx = canvasEl.getContext('2d');
    window.ctx = ctx;
});

window.MovingObject = MovingObject;
window.Asteroid = Asteroid;