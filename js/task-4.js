
const form = document.querySelector('.login-form');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const data = {};
    for (const elm of event.currentTarget.elements) {
        if (elm.type == 'submit') {
            continue;
         }
        const val = elm.value.trim();
        if (val.length == 0) {
            window.alert('All form fields must be filled in');
            return;
        }
        Object.defineProperty(data, elm.type, { value: val });
    }
    event.currentTarget.reset();
    console.log(data);
 })