const sections = document.querySelectorAll('section');

sections.forEach(section => {
    const div = section.querySelector('div');
    div.addEventListener('click', () => {
        const paragraph = section.querySelector('p');
        const img = section.querySelector('img');
        const isExpanded = paragraph.style.display === 'block';

        if (isExpanded) {
            paragraph.style.display = 'none';
            img.src = '/assets/images/icon-plus.svg';
        } else {
            paragraph.style.display = 'block';
            img.src = '/assets/images/icon-minus.svg';
        }
    });
});
