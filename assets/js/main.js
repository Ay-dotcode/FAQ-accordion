const sections = document.querySelectorAll('section');
let expanded = false;

sections.forEach(section => {
    const div = section.querySelector('div');
    div.addEventListener('click', () => {
        const paragraph = section.querySelector('p');
        const img = section.querySelector('img');
        if (!expanded) {
            expanded = true;
            paragraph.style.display = 'block';
            img.src = '/assets/images/icon-minus.svg';
        } else {
            expanded = false;
            paragraph.style.display = 'none';
            img.src = '/assets/images/icon-plus.svg';
        }
    });
});