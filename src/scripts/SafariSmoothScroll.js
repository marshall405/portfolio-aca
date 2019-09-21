export const SafariSmoothScroll = () => {

    const clientBrowser = window.clientInformation.vendor;
    const isApple = clientBrowser.match(/apple/gi);


    if (isApple) {
        let scrollFrom = 0;
        let scrollTo;
        let whichElement = '';
        let increment = 50;
        let goUp = false;
        //add event listeners to the nav #about, #contact, #projects
        const navList = document.getElementById('nav-list');
        navList.addEventListener('click', addScroll);

        // add event listener to MS logo to scroll back to top
        const logo = document.getElementById('logo');
        logo.addEventListener('click', addScroll);


        function addScroll(e) {
            scrollFrom = window.scrollY;
            e.preventDefault();
            // e.stopPropagation();
            whichElement = e.target;
            switch (whichElement.innerText) {
                case 'about':
                    whichElement = document.getElementById('about');
                    break;
                case 'contact':
                    whichElement = document.getElementById('contact');
                    break;
                case 'projects':
                    whichElement = document.getElementById('projects');
                    break;
                default:
                    break;
            }
            if (whichElement) {
                scrollTo = whichElement.offsetTop;
                if (scrollFrom > scrollTo) {
                    increment = -increment;
                    goUp = true;
                }
                let scroll = setInterval(() => {
                    window.scrollTo(0, scrollFrom);
                    scrollFrom += increment;
                    if (goUp) {
                        if (scrollFrom <= scrollTo) {
                            clearInterval(scroll);
                            clearSettings();
                        }
                    } else if (scrollFrom >= scrollTo) {
                        clearInterval(scroll);
                        clearSettings();

                    }
                }, 16);
            }
        }
        function clearSettings() {
            scrollFrom = 0;
            whichElement = '';
            scrollTo = 0;
            increment = 50;
            goUp = false;
        }
    }
}
