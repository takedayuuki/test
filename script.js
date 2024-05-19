const navLinks = document.querySelectorAll('nav ul li');

let activeLink = null;

navLinks.forEach(link => {
    link.addEventListener('mouseover', () => {
        if (activeLink === null || !activeLink.classList.contains('clicked')) {
            activateLink(link);
        }
    });

    link.addEventListener('click', (event) => {
        event.preventDefault();
        activateLink(link);
        link.classList.add('clicked');
    });
});

function activateLink(targetLink) {
    if (activeLink !== null) {
        activeLink.classList.remove('active');
    }
    targetLink.classList.add('active');
    activeLink = targetLink;
}
