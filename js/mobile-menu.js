(() => {
    const menuBtnRef = document.querySelector('[data-menu-button]');
    const mobileMenuRef = document.querySelector('[data-menu]');
    // const logo = document.querySelector('.logo')
    

    menuBtnRef.addEventListener('click', () => {

        menuBtnRef.classList.toggle('is-open');
        mobileMenuRef.classList.toggle('is-open');
        // logo.classList.toggle('is-open');
           
    });
})();