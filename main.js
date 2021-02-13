const btn = document.querySelector('nav');
const btnContent = document.querySelector('.dropDown-menu');

console.log(btn)

btn.addEventListener('click', (e) => {
    btnContent.style.visibility = 'visible';
})

btn.addEventListener('mouseleave', (e) => {
    
    btnContent.style.visibility = 'hidden';
})