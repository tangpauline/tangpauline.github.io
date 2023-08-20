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
const hiddenProj1 = document.getElementById("proj-hid-1");
const hiddenProj2 = document.getElementById("proj-hid-2");
const hiddenProj3 = document.getElementById("proj-hid-3");
const hiddenProj4 = document.getElementById("proj-hid-4");

viewMoreBtn.addEventListener('click', () => {
    if (viewMoreBtn.innerText === 'View More') {
        hiddenProj1.style.display = 'flex';
        hiddenProj2.style.display = 'flex';
        hiddenProj3.style.display = 'flex';
        hiddenProj4.style.display = 'flex';
        viewMoreBtn.innerText = 'View Less';
    } else {
        hiddenProj1.style.display = 'none';
        hiddenProj2.style.display = 'none';
        hiddenProj3.style.display = 'none';
        hiddenProj4.style.display = 'none';
        viewMoreBtn.innerText = 'View More';
    }
})
