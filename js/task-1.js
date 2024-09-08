const elList = document.querySelector('#categories');

const cats = elList.querySelectorAll('.item')
console.log(`Number of categories: ${cats.length}`);

for (const cat of cats) {
    const h2 = cat.querySelector('h2');
    console.log(`Category: ${h2.textContent}`);
    const els = cat.querySelectorAll('li');
    console.log(`Elements: ${els.length}`)
 }


