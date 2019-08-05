const SafariSmoothScroll = () => {
    const clientBrowser = window.clientInformation.vendor;
    const isApple = clientBrowser.match(/apple/gi);

    //add event listeners to the nav #about, #contact, #projects
    if (isApple) {
        console.log('initiate smooth scroll override');
        let scrollFrom = 0;
        let scrollTo;
        let whichElement = '';

        const navList = document.getElementById('nav-list');
        navList.addEventListener('click', e => {
            e.preventDefault();
            e.stopPropagation();
            whichElement = e.target.innerText ? document.getElementById(e.target.innerText) : '';
            if (whichElement) {
                scrollTo = whichElement.offsetTop;

                let scroll = setInterval(() => {
                    window.scrollTo(0, scrollFrom);
                    scrollFrom += 50;
                    if (scrollFrom >= scrollTo) {
                        clearInterval(scroll);
                        scrollFrom = 0;
                        whichElement = '';
                        scrollTo = 0;
                    }
                }, 16);
            }
        });
    }








}
export default SafariSmoothScroll;