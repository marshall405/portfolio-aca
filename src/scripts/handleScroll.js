export const handleScroll = () => {
    const msLogo = document.querySelector('#logo');
    window.addEventListener('scroll', e => {
        if (window.scrollY > 1000) {
            msLogo.innerHTML = '&uarr;';
            msLogo.classList.add('toTop');
        } else {
            msLogo.innerText = 'M S';
            msLogo.classList.add('brand');
            msLogo.classList.remove('toTop');
        }
    });
}