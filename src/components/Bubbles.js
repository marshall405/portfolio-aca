import React from 'react';
import utils from './utils'

export default class Bubbles extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    componentDidMount() {
        this.renderCanvas();
    }

    renderCanvas() {

        const canvas = document.querySelector('canvas')
        const c = canvas.getContext('2d')

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        let count = 20

        const mouse = {
            x: canvas.innerWidth / 2,
            y: canvas.innerHeight / 2
        }

        const colors = ['rgb(8, 59, 81)', 'rgb(0,0,0)', 'rgb(25, 75, 141)', 'rgb(255, 255, 0)']


        // Event Listeners
        canvas.addEventListener('mousemove', event => {
            mouse.x = event.offsetX
            mouse.y = event.offsetY
        })

        window.addEventListener('resize', () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        })


        // Objects
        function Circle(x, y, radius, color) {
            this.x = x
            this.y = y
            this.radius = radius
            this.color = color
            this.velocity = {
                x: utils.randomIntFromRange(-2.5, 2.5),
                y: utils.randomIntFromRange(-2.5, 2.5)
            }
            this.mass = 30
            this.opacity = 0
        }

        Circle.prototype.draw = function () {
            c.beginPath()
            c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
            c.save();
            c.globalAlpha = this.opacity;
            c.fillStyle = this.color
            c.fill()
            c.restore()
            c.strokeStyle = this.color
            c.stroke()
            c.closePath()
        }

        Circle.prototype.update = function (circles) {
            this.draw()
            wallDectection(this, circles)
            collisionDetection(this, circles)
            mouseDetection(this)
            this.x += this.velocity.x
            this.y += this.velocity.y
        }

        // Implementation
        let circles
        function init() {
            circles = []
            for (let i = 0; i < count; i++) {
                let r = 20
                let x = utils.randomIntFromRange(r, canvas.width - r)
                let y = utils.randomIntFromRange(r, canvas.height - r)
                if (i !== 0) {
                    for (let j = 0; j < circles.length; j++) {
                        if (utils.distance(x, y, circles[j].x, circles[j].y) - (r + circles[j].radius) < 0) {
                            x = utils.randomIntFromRange(r, canvas.width - r)
                            y = utils.randomIntFromRange(r, canvas.height - r)
                            j = -1
                        }
                    }
                }
                circles.push(new Circle(x, y, r, utils.randomColor(colors)))
            }
        }
        function wallDectection(circle, circles) {
            if (circle.x + circle.radius > canvas.width || circle.x - circle.radius < 0) {
                circle.velocity.x = -circle.velocity.x
            }
            if (circle.y + circle.radius > canvas.height || circle.y - circle.radius < 0) {
                circle.velocity.y = -circle.velocity.y
            }
        }
        function mouseDetection(circle) {
            let { x, y } = circle
            if (utils.distance(x, y, mouse.x, mouse.y) < 80 && circle.opacity < .2) {
                circle.opacity += .02
            } else if (circle.opacity > 0) {
                circle.opacity -= .02
                circle.opacity = Math.max(0, circle.opacity);
            }
        }
        function collisionDetection(circle, circles) {
            let { x, y, radius } = circle
            for (let i = 0; i < circles.length; i++) {
                if (circle === circles[i]) continue;
                let { x: x2, y: y2, radius: radius2 } = circles[i];
                if (utils.distance(x, y, x2, y2) - (radius + radius2) < 0) {
                    resolveCollision(circle, circles[i])
                }
            }
        }

        function rotate(velocity, angle) {
            const rotatedVelocities = {
                x: velocity.x * Math.cos(angle) - velocity.y * Math.sin(angle),
                y: velocity.x * Math.sin(angle) + velocity.y * Math.cos(angle)
            };

            return rotatedVelocities;
        }
        // resolve collision
        function resolveCollision(particle, otherParticle) {
            const xVelocityDiff = particle.velocity.x - otherParticle.velocity.x;
            const yVelocityDiff = particle.velocity.y - otherParticle.velocity.y;

            const xDist = otherParticle.x - particle.x;
            const yDist = otherParticle.y - particle.y;

            // Prevent accidental overlap of particles
            if (xVelocityDiff * xDist + yVelocityDiff * yDist >= 0) {

                // Grab angle between the two colliding particles
                const angle = -Math.atan2(otherParticle.y - particle.y, otherParticle.x - particle.x);

                // Store mass in var for better readability in collision equation
                const m1 = particle.mass;
                const m2 = otherParticle.mass;

                // Velocity before equation
                const u1 = rotate(particle.velocity, angle);
                const u2 = rotate(otherParticle.velocity, angle);

                // Velocity after 1d collision equation
                const v1 = { x: u1.x * (m1 - m2) / (m1 + m2) + u2.x * 2 * m2 / (m1 + m2), y: u1.y };
                const v2 = { x: u2.x * (m1 - m2) / (m1 + m2) + u1.x * 2 * m2 / (m1 + m2), y: u2.y };

                // Final velocity after rotating axis back to original location
                const vFinal1 = rotate(v1, -angle);
                const vFinal2 = rotate(v2, -angle);

                // Swap particle velocities for realistic bounce effect
                particle.velocity.x = vFinal1.x;
                particle.velocity.y = vFinal1.y;

                otherParticle.velocity.x = vFinal2.x;
                otherParticle.velocity.y = vFinal2.y;
            }
        }





        // Animation Loop
        function animate() {
            requestAnimationFrame(animate)
            c.clearRect(0, 0, canvas.width, canvas.height)

            circles.forEach(circle => {
                circle.update(circles)
            })
        }

        init()
        animate()
    }
    render() {
        return <canvas id="canvas"></canvas >
    }

}