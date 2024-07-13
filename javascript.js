/* Responsive navbar */
const menuBar = document.getElementsByClassName("menu-bar")[0];
const navLinks = document.getElementsByClassName("nav-links")[0];
const resume = document.getElementsByClassName("resume")[0];

menuBar.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    resume.classList.toggle('active');
})

/* Click to view more projects */
const viewMoreBtn = document.getElementsByClassName("proj-more-btn")[0];
const hiddenProjs = document.getElementsByClassName("proj-hidden");

viewMoreBtn.addEventListener('click', () => {
    if (viewMoreBtn.innerText === 'View More') {
        for (let i = 0; i < hiddenProjs.length; i++) {
            const proj = hiddenProjs.item(i);
            proj.style.display = 'flex';
        }
        viewMoreBtn.innerText = 'View Less';
    } else {
        for (let i = 0; i < hiddenProjs.length; i++) {
            const proj = hiddenProjs.item(i);
            proj.style.display = 'none';
        }
        viewMoreBtn.innerText = 'View More';
    }
})
