document.addEventListener('DOMContentLoaded', () => {

    const container = document.getElementsByClassName("container")[0];
    const btn = document.getElementsByClassName("btn")[0];

    /*
    const colors = ["#555", "#000", "#222"];

    let currentIndex = 0;

    function changeColor(){
        container.style.backgroundColor = colors[currentIndex];
        currentIndex = (currentIndex + 1) % colors.length;
    }
    */

    function randomColor(){
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);

        return `rgb(${r}, ${g}, ${b})`;
    }

    function changeColor(){
        container.style.backgroundColor = randomColor();
        container.style.transition = "0.2s"
    }

    /* btn.onclick = changeColor; */

    // Using an event listener
    btn.addEventListener("click", changeColor);

    // JavaScript to display the range of years in the copyright notice
    const copyrightYearElement = document.getElementById('copyright-year');
    const startYear = 2024;
    const currentYear = new Date().getFullYear();
    const yearRange = (startYear === currentYear) ? currentYear : `${startYear} - ${currentYear}`;
    copyrightYearElement.textContent = yearRange;

});