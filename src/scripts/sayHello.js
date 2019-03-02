window.onload = function() {
    const greetings = ['Hola!', 'Bonjour!', 'Hallo!', 'Ciao!', 'Namaste!', 'Konnichiwa!', 'Hello!'];
    let counter = 0;
    const h1 = this.document.getElementById('greeting');
    let shuffle = function() {
        fade(h1);
        if(counter >= greetings.length){
            counter = 0;
        }
        h1.innerHTML = greetings[counter];
        counter++;
    
    };
    function fade(ele) {
        let opc = 0;
        let fadeIn = function() {
            let fade = setInterval(function() {
                if(opc >= 1) {
                    clearInterval(fade);
                    fadeOut();
                }
                ele.style.opacity = opc;
                opc += .005;
            },5);
        }
        let fadeOut = function() {
            let fade = setInterval(function() {
                if(opc <= 0) {
                    clearInterval(fade);
                    shuffle();
                }
                ele.style.opacity = opc;
                opc -= .005;
            },5);
        }
        fadeIn();
    }
    // fade(h1);
}