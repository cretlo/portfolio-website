import '../node_modules/bootstrap/dist/js/bootstrap.js';
import './styles.css';
import jsTypeText from 'js-type-text';


jsTypeText.start({
    text: "Web Designer - Freelancer - Graphic Desinger",
    speed: 110,
    cursor: false
}, (result: string) => {
    let element = document.querySelector(".masthead-subheading");
    if (!element) return;
    if (element?.classList.contains("invisible")) element.classList.remove("invisible")
    element.innerHTML = result;
});



