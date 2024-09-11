document.querySelector("#grandparent")
    .addEventListener('click', () => {
        console.log('Grandparent Clicked!');
}, true); // Capturing (trickling)

document.querySelector("#parent")
    .addEventListener('click', () => {
        console.log('Parent Clicked!');
}, false); // bubbling

document.querySelector("#child")
    .addEventListener('click', (e) => {
        console.log('Child Clicked!');
        e.stopPropagation();
}, true);