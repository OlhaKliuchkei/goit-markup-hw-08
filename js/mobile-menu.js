(() => {
    const menuBtnRef = document.querySelector('[data-menu-button]');
    const mobileMenuRef = document.querySelector('[data-menu]');
    const body = document.querySelector('#body')
    const logo = document.querySelector('#logo')
    const logoColor = document.querySelector('#logo-color')

    menuBtnRef.addEventListener('click', () => {

        menuBtnRef.classList.toggle('is-open');
        mobileMenuRef.classList.toggle('is-open');
        body.classList.toggle('is-scroll')
        logo.classList.toggle('logo-hide')
        logoColor.classList.toggle('logo-hide')
      
    });

})();