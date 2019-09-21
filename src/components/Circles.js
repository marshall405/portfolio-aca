import React from 'react';
import utils from './utils'


export class Circles extends React.Component {
    componentDidMount() {
        this.renderCanvas();
    }
    renderCanvas() {

        const canvas = document.querySelector('canvas')
        const c = canvas.getContext('2d')

        canvas.width = window.innerWidth
        canvas.height = window.innerHeight

        const mouse = {
            x: window.innerWidth / 2,
            y: window.innerHeight / 2,
            down: false
        }

        // Event Listeners
        window.addEventListener('mousedown', event => {
            mouse.down = true;
        })
        window.addEventListener('mouseup', event => {
            mouse.down = false;
        })
        window.addEventListener('mousemove', event => {
            mouse.x = event.clientX
            mouse.y = event.clientY
        })

        window.addEventListener('resize', () => {
            canvas.width = window.innerWidth
            canvas.height = window.innerHeight

            init()
        })

        // Objects
        function Circle(x, y, radius, color, startAngle, endAngle, spin) {
            this.x = x
            this.y = y
            this.radius = radius
            this.color = color
            this.startAngle = startAngle
            this.endAngle = endAngle
            this.spin = spin
        }

        Circle.prototype.draw = function () {
            c.beginPath()
            c.arc(this.x, this.y, this.radius, this.startAngle, this.endAngle, false)
            c.strokeStyle = this.color
            c.stroke()
            c.closePath()
        }

        Circle.prototype.update = function () {
            if (mouse.down) {
                this.spin = -this.spin
            }
            this.startAngle += this.spin
            this.endAngle += this.spin
            this.draw()
        }

        // Implementation
        let circles

        function init() {
            circles = []
            let startAngle;
            let endAngle;
            let color;
            let radius = 50;
            let spin;
            for (let i = 0; i < 40; i++) {
                if (radius + canvas.width / 2 >= canvas.width) {
                    break;
                }
                startAngle = utils.randomIntFromRange(0, Math.PI);
                endAngle = utils.randomIntFromRange(startAngle, Math.PI * 2);
                radius += 10;
                color = `rgba(${utils.randomIntFromRange(0, 255, true)},${utils.randomIntFromRange(0, 255, true)},${utils.randomIntFromRange(0, 255, true)},.5)`;
                spin = utils.randomIntFromRange(-.05, .05)
                while (spin === 0) {
                    spin = utils.randomIntFromRange(-.05, .05)
                }
                circles.push(new Circle(canvas.width / 2, canvas.height / 2, radius, color, startAngle, endAngle, spin));
            }
        }



        // Animation Loop
        function animate() {
            requestAnimationFrame(animate)
            c.clearRect(0, 0, canvas.width, canvas.height)



            circles.forEach(circle => {
                circle.update()
            })
        }

        init()
        animate()
    }
    render() {
        return <canvas id="canvas" style={{ backgroundColor: this.props.color }}></canvas >
    }

}