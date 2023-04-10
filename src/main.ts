import '../node_modules/bootstrap/dist/js/bootstrap.js';
import './main.scss';
import AOS from 'aos/dist/aos.js';
import 'aos/dist/aos.css';
//import './styles.css';
import jsTypeText from 'js-type-text';


AOS.init({
    offset: 250,
    duration: 700,
    delay: 0,
    easing: 'ease',
    once: false,
    mirror: false,
    anchorPlacement: 'top-bottom'
});


jsTypeText.start({
    text: "Web Designer - Freelancer - Graphic Designer",
    speed: 110,
    cursor: false
}, (result: string) => {
    let element = document.querySelector(".text-gen");
    if (!element) return;
    if (element?.classList.contains("invisible")) element.classList.remove("invisible")
    element.innerHTML = result;
});



