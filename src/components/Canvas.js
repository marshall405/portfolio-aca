import React from 'react';


// color: rgb(25, 75, 141);
export class Canvas extends React.Component {

    componentDidMount() {
        this.renderCanvas();
    }
    renderCanvas() {
        const canvas = document.getElementById('canvas');
        const ctx = canvas.getContext('2d');
        // const width = window.innerWidth;
        const height = window.innerHeight;
        let counter = 0;
        ctx.globalAlpha = .4;
        ctx.fillStyle = 'rgba(25, 75, 141, .8)';
        ctx.strokeStyle = 'rgba(255,255,0,1)';

        canvas.width = window.innerWidth
        canvas.height = window.innerHeight


        window.addEventListener('resize', () => {
            canvas.width = window.innerWidth
            canvas.height = window.innerHeight

        })
        const Snake = {
            body: [],
            direction: 'up',
            X: 25,
            draw: function () {
                this.body.forEach(sec => {
                    let { x, y, w, h } = sec;
                    ctx.fillRect(x, y, w, h);
                    ctx.strokeRect(x, y, w, h);
                });
            },
            move: function () {

                switch (this.direction) {
                    case 'right':
                        let x = (this.body[this.body.length - 1].x) + this.X;
                        if (x >= canvas.width - 5) {
                            this.changeDirection();
                        } else {
                            const tail = this.body.shift();
                            tail.x = x;
                            tail.y = (this.body[this.body.length - 1].y);
                            this.body.push(tail);
                        }
                        break;
                    case 'left':
                        let lx = (this.body[this.body.length - 1].x) - this.X;
                        if (lx <= -10) {
                            this.changeDirection();
                        } else {
                            const tail = this.body.shift();
                            tail.x = lx;
                            tail.y = (this.body[this.body.length - 1].y);
                            this.body.push(tail);
                        }
                        break;
                    case 'up':
                        let y = (this.body[this.body.length - 1].y) - this.X;
                        if (y <= 0) {
                            this.changeDirection();
                        } else {
                            const tail = this.body.shift();
                            tail.y = y;
                            tail.x = (this.body[this.body.length - 1].x);
                            this.body.push(tail);
                        }
                        break;
                    case 'down':
                        let dy = (this.body[this.body.length - 1].y) + this.X;
                        if (dy >= canvas.height) {
                            this.changeDirection();
                        }
                        else {
                            const tail = this.body.shift();
                            tail.y = dy;
                            tail.x = (this.body[this.body.length - 1].x);
                            this.body.push(tail);
                        }
                        break;
                    default:
                        break;
                }

            },
            changeDirection: function () {
                if (this.direction === 'left' || this.direction === 'right') {
                    const random = Math.random();
                    if (random < .5) {
                        this.direction = 'up';
                    } else {
                        this.direction = 'down';
                    }
                } else if (this.direction === 'up' || this.direction === 'down') {
                    const random = Math.random();
                    if (random < .5) {
                        this.direction = 'left';
                    } else {
                        this.direction = 'right';
                    }
                } else {
                    // nothing
                }
            },

        }

        function createSnake() {
            for (let i = 0; i < 10; i++) {
                Snake.body.push(Square(i));
            }
        }

        function Square(i) {
            let x = function () {
                return i * 25;
            }
            return {
                w: 25,
                h: 25,
                x: x(),
                y: height / 2,
            }
        }

        createSnake();
        Snake.move();
        function draw() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.globalAlpha = .4;
            ctx.fillStyle = 'rgba(25, 75, 141, .8)';
            ctx.strokeStyle = 'rgba(255,255,0,1)';
            Snake.draw();
            Snake.move();

            counter++;
            if (counter > 10) {
                Snake.changeDirection();
                counter = 0;
            }


        }
        setInterval(draw, 50);

    }
    render() {
        return <canvas style={{ backgroundColor: this.props.color }} id='canvas' ></canvas >
    }
}