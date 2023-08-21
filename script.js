// toggle class active

const navbar = document.querySelector('.navbar');
// Menu diklik
document.querySelector('.menu').onclick = () => {
    navbar.classList.toggle('active');
};

//klik diluar menu untuk menutup sidebar

const menu = document.querySelector('.menu');
document.addEventListener('click', function(e){
    if(!menu.contains(e.target) && !navbar.contains(e.target)){
        navbar.classList.remove('active');
        }
    }
)
