---
ascii: true
font: true
layout: body
permalink: K7jvHziDzwX9
title: Hire Matt! A good web developer.
description: Hello, my name is Matthieu I'm a Web Developer living and working in London. Interested in tech, data, AI, music and art. Don't hesitate to drop me a line.
stylesheets:
    - file: neiges.css
      media: all
    - file: main.css
      media: all
tags: ["web developer", "hire", "london", "data science", "data visualisation"]
---

<header>
    <div id="header_anim">
        <h1>Hire Matt!</h1>
    </div>
    <p>
        Hi!<br>
        I&apos;m a freelance web developer and I love working with great people
        on Data, AI, Music, Art, Education and Tech in general.
        Drop me a line at: <strong>matthieubosquet@gmail.com</strong>
        <br>I'll get back to you as soon as possible.
    </p>
</header>

<article id="cv">
    <h2>More about me</h2>
    <h3>What is important for me?</h3>
    <ul>
        <li>User experience</li>
        <li>Content</li>
    </ul>
    <p>
        That's it. Performance, optimization, technologies used are all part of the way. I want to reach my audience and have people that enjoy using what I build.
    </p>
    <h3>What have I learned?</h3>
    <ul>
        <li><strong>Programming is fun!</strong> I started with html, css and javascript 13 years ago and I'm still amazed by possibilities.</li>
        <li><strong>Front end development.</strong> Ergonomics appeals to the craftsman inside me. Building user experience requires logic and creativity. It is an awesome problem to tackle.</li>
        <li><strong>Software development.</strong> Python &amp; SQLite are my favourite tools for handling back-end, but I have worked with php &amp; postgres and tried c, ruby, redis, mysql &amp; others. I am not afraid of learning.</li>
        <li><strong>Linux server administration.</strong> Including high-traffic e-commerce website and back-office for a 200+ employees company.</li>
        <li><strong>Be creative.</strong> I went through one year of art school and am decent at sketching; Do photography since I was eight; Music lover, play guitar and piano; Listen to many podcasts (among others this american life &amp; 99% invisible); Was reporter for the European Year of Volunteering in Estonia; Feature at the associative radio back home. I'm not going to be your creative director, but we'll understand each other and work well together.</li>
        <li><strong>Team work.</strong> I write code for readability, document it, test it. I communicate and follow guide lines. I use git-scm and have worked with other revision control tools.</li>
    </ul>
    <h3>What have I done?</h3>
    <p>
    I have a keen interest in <strong>e-learning</strong> and my most significant work experiences were with a big French publisher and a London digital agency specialized in learning.
    </p>
    <h3>What do I want to do?</h3>
    <p>
    I want to work with <strong>web components</strong>. I have no doubt it is the future of web development. And if your project has to do with learning (publishing, podcasts, journalism, education, science, ...), there is a good chance I will be interested. Please don't hesitate to get in touch! I'll call or write you back as soon as possible.
    </p>
</article>

<footer>
    <h2>Get in touch</h2>
    <p>
        You think I can help with your project? Write me an email. I will get back to you. <strong>matthieubosquet@gmail.com</strong>
    </p>
    <p><abbr title="nota bene">n.b.</abbr> <a href="http://www.neig.es" title="Matthieu Bosquet's personal website">neig.es</a> is hosted on <a href="https://github.com/matthieubosquet" title="Matthieu Bosquet's Github account">Github</a>.</p>
</footer>

<script type="text/javascript">
(function(){

var entities = 29;
var header_anim = document.querySelector('#header_anim');
var canvas = document.createElement('canvas');
var ctx = canvas.getContext('2d');
var width = header_anim.clientWidth;
var height = header_anim.clientHeight;
var i = 0;
var active = false;
var score = 0;
var shots = 10;
var game_ended = false;
canvas.style.position = 'absolute';
canvas.style.top = canvas.style.left = 0;

function onResize() {
    width = header_anim.clientWidth;
    height = header_anim.clientHeight;
    canvas.width = width;
    canvas.height = height;

    var wasActive = active;
    active = width > 530;

    if (!wasActive && active)
        requestAnimFrame(draw);
    else
        requestAnimFrame(drawCells);
}

function updateScore() {
    ctx.fillStyle = 'white';
    ctx.font = '16px Arial, sans-serif';
    ctx.Align = 'right';
    ctx.textBaseLine = 'top';
    ctx.fillText('Shots: ' + shots, width-120, height-40);
    ctx.fillText('Score: ' + score, width-120, height-20);
    if ( game_ended && bang.active == false ) {
        ctx.strokeStyle = 'white';
        ctx.lineWidth = '2';
        ctx.strokeRect(width-240, height-55, 100, 40);
        ctx.fillText('Restart', width-215, height-30);
    }
}

var bang = function () {
    this.x = 0;
    this.y = 0;
    this.s = 0;
    this.e = 0;
    this.max = 0;
    this.o = 0;
    this.fading = false;
    this.active = false;
}

function onClick(event){
    bang.y = event.clientY - header_anim.getBoundingClientRect().top;

    if (game_ended) {
        if ( bang.active == false ) {
            if ( event.clientX > width-240 && event.clientX < width-140 && bang.y > height-55 && bang.y < height-15 ) {
                score = 0;
                shots = 10;
                game_ended = false;
            }
        }
        return;
    }

    bang.x = event.clientX;
    bang.s = 1;
    bang.e = (Math.random()*0.08 + 0.05);
    bang.max = 160 * (Math.random()*3 + 0.2);
    bang.o = 0.1;
    bang.fading = false;
    if (!game_ended)
        bang.active = true;
    if ( shots > 0 )
        shots = shots - 1;
    if ( shots === 0 )
        game_ended = true;
}

var Cell = function () {
    this.x = 0;
    this.y = 0;
    this.vy = 0;
    this.vx = 0;
    this.r = 0;
    this.g = 0;
    this.b = 0;
    this.a = 0;
    this.s = 0;

    this.reset();
}

Cell.prototype.reset = function() {
    this.x = Math.random() * width;
    this.y = Math.random() * height;
    this.vx = Math.random();
    this.vy = Math.random();
    this.r = Math.floor( Math.random() * 255 );
    this.g = Math.floor( Math.random() * 255 );
    this.b = Math.floor( Math.random() * 255 );
    this.a = Math.random().toFixed(1);
    this.s = Math.random() * 17;
    if ( this.a < 0.2 )
        this.a = this.a + 0.2
    if ( this.r < 128 && this.g < 128 && this.b < 128 )
        this.r = this.r + 110
}

var cells = [], cell;
for (i = 0; i < entities; i++){
    cell = new Cell();
    cell.reset();
    cells.push(cell);
}

function drawCells() {

    var time = new Date().getTime() * 0.0008;

    for (i = 0; i < entities; i++) {
        cell = cells[i];
        cell.x = Math.sin( time ) * Math.cos( time * cell.vx ) * ( (width-96)/2 ) + width*cell.vy;
        cell.y = Math.cos( time * cell.vy ) * 96 + ( 256 * cell.vy );

        ctx.fillStyle = 'rgba('+cell.r+','+cell.g+','+cell.b+','+cell.a+')';
        ctx.beginPath();
        ctx.arc( cell.x, cell.y, cell.s, 0, Math.PI * 2, false );
        ctx.closePath();
        ctx.fill();

        if (bang.active) {
            if ( cell.x > (bang.x-bang.s) && cell.x < (bang.x+bang.s) && cell.y > (bang.y-bang.s) && cell.y < (bang.y+bang.s) ) {
                cell.reset();
                score = score+1;
            }
        }

    }

}

function draw() {

    ctx.clearRect( 0, 0, width, height );

    if (!active)
        return;

    if ( bang.active ) {
        if ( bang.fading ) {
            bang.s = bang.s - Math.cos(bang.s * bang.e);
            bang.o = bang.o - 0.14 * bang.e;
        }
        else {
            bang.s = bang.s + bang.s * bang.e;
            bang.o = bang.o + 0.14 * bang.e;
            if ( bang.s > bang.max )
                bang.fading = true;
        }
        ctx.fillStyle = 'rgba(255, 255, 255, '+bang.o+')';
        ctx.beginPath();
        ctx.arc( bang.x, bang.y, bang.s, 0, Math.PI * 2, false );
        ctx.closePath();
        ctx.fill();
        if ( bang.o < 0 ) {
            bang.active = false;
        }
    }

    drawCells();

    updateScore();

    requestAnimFrame(draw);
}

window.requestAnimFrame = (function(){
    return window.requestAnimationFrame       ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame    ||
            function( callback ){
                window.setTimeout( callback, 1000 / 60);
            };
})();

onResize();
window.addEventListener('resize', onResize, false);
canvas.addEventListener('click', onClick, false);

header_anim.appendChild(canvas);

})();
</script>