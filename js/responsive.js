const mobileMenu = document.getElementById('mobile-menu-toggle');
const mobileMenuList = document.getElementById('mobile-menu-list');
let isMobileMenuOpen = false;

mobileMenu.addEventListener('click', (e) => {
    mobileMenuList.classList.toggle('active');
    const Caret = document.getElementById('caret-down');
    Caret.classList.toggle('fa-caret-up');
    isMobileMenuOpen = !isMobileMenuOpen;
    console.log(isMobileMenuOpen);
})
mobileMenuList.addEventListener('click', (e) => {
        if (e.target != e.currentTarget) {
            mobileMenuList.classList.remove('active');
            isMobileMenuOpen = false;
        }

    })
    // window.addEventListener('click', (e) => {
    //     if (!isMobileMenuOpen) {

//     }
// })