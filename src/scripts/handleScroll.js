export const handleScroll = () => {
    const msLogo = document.querySelector('#logo');
    window.addEventListener('scroll', e => {
        if (window.scrollY > 1000) {
            msLogo.innerText = 'back to top';
        } else {
            msLogo.innerText = 'M S';
        }
    });
}