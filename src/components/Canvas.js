import React from 'react';


const canvasStyle = {
    zIndex: '-1',
    backgroundColor: 'white',
    position: 'fixed',
    top: '0px',
    left: '0px',
    width: '100vw',
    height: '100vh'
}

// color: rgb(25, 75, 141);
export class Canvas extends React.Component {
    componentDidMount() {
        this.renderCanvas();
    }

    renderCanvas() {
        const canvas = document.getElementById('canvas');
        const ctx = canvas.getContext('2d');

        // used for colors RGB
        let r = 25;
        let g = 75;
        let b = 141;


        const width = 150; //150
        const height = 150; //150

        let x = 0;
        let y = 0;
        let dx = 150;//150
        let dy = 10; //10

        let startDY = false;
        let drawRAF; // used as requestAnimationFrame ID

        function draw() {
            ctx.fillStyle = `rgb(${r}, ${g}, ${b})`;
            ctx.fillRect(x, y, width, height);
            if (x + width > canvas.width || x < 0) {
                dx = -dx;
                startDY = true;
            }

            // increment fillRect 
            x += dx;
            if (startDY) {
                y += dy;
            }


            // increment color scheme
            r += 3;
            g += 2;
            b -= 3;

            drawRAF = requestAnimationFrame(draw);
        }
        drawRAF = requestAnimationFrame(draw);

        setTimeout(() => {
            console.log('stop draw animation');
            cancelAnimationFrame(drawRAF);
        }, 5000); //stop draw animation after 5 seconds

    }
    render() {
        return <canvas style={canvasStyle} id='canvas' width='1000px' height='1000px'></canvas>
    }
}