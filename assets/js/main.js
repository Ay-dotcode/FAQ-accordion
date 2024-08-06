const sections = document.querySelectorAll('section');

sections.forEach(section => {
    section.addEventListener('click', () => {
        const paragraph = section.querySelector('p');
        const img = section.querySelector('img');

        paragraph.style.display = 'block';
        img.src = '/assets/images/icon-minus.svg'
    });
});