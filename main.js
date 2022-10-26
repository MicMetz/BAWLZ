// setup canvas

import {Ball} from "./ball.js";
import {vars} from "./_vars.js";
import * as util from "./utilities.js";

// function to generate random number


function init() {
    const canvas = document.querySelector('canvas');
    vars.width = canvas.width = window.innerWidth;
    vars.height = canvas.height = window.innerHeight;
    vars.ctx = window.ctx = canvas.getContext('2d');

    while (vars.balls.length < 25) {
        const size = util.random(10, 20);
        const ball = new Ball(util.random(0 + size, vars.width - size), util.random(0 + size, vars.height - size), util.random(-7, 7), util.random(-7, 7), util.randomRGB(), size, vars.ctx);

        vars.balls.push(ball);
    }

}


function loop() {
    vars.ctx.fillStyle = "rgba(0, 0, 0, 0.25)";
    vars.ctx.fillRect(0, 0, vars.width, vars.height);

    for (const ball of vars.balls) {
        ball.draw();
        ball.update();
        ball.collisionDetect();
    }

    requestAnimationFrame(loop);
}


init();
loop();
