const idShare = document.getElementById('id-share');
const link = document.querySelector('.button');

idShare.addEventListener('click', () => {
    idShare.classList.toggle('active')
    link.classList.toggle('active')
})