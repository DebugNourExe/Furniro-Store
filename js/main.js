// this is the main.js file
// the mobile btn 
const btnMobile = document.getElementById('btn-mobile');
const listMobile = document.getElementById('list-mobile');
const iconMobile = document.getElementById('icon-mobile');
const linksMobile = document.querySelectorAll('.links-mobile');
btnMobile.addEventListener('click', () => {
    listMobile.classList.toggle('active');
    iconMobile.classList.toggle('fa-bars');
    iconMobile.classList.toggle('fa-xmark');
});
linksMobile.forEach(link => {
    link.addEventListener('click', () => {
        listMobile.classList.remove('active');
        iconMobile.classList.remove('fa-xmark');
        iconMobile.classList.add('fa-bars');
    });
});
// the room next btn
const track = document.getElementById('roomsTrack');
const nextBtn = document.getElementById('roomsNext');
const dots = document.querySelectorAll('#roomsDots .dot');
const slideWidth = 270;
const gap = 20;
const step = slideWidth + gap;
let sliding = false;
function updateDots() {
    const firstIndex = track.firstElementChild.getAttribute('data-index');
    dots.forEach(dot => {
      dot.classList.toggle('active', dot.getAttribute('data-index') === firstIndex);
    });
}
nextBtn.addEventListener('click', () => {
    if (sliding) return;
    sliding = true;
 
    track.style.transition = 'transform 0.45s ease';
    track.style.transform = `translateX(-${step}px)`;
});
 track.addEventListener('transitionend', () => {
    track.appendChild(track.firstElementChild);
    track.style.transition = 'none';
    track.style.transform = 'translateX(0)';
    sliding = false;
    updateDots();
});
dots.forEach(dot => {
    dot.addEventListener('click', () => {
      const targetIndex = dot.getAttribute('data-index');
      let current = track.firstElementChild.getAttribute('data-index');
      let guard = 0;
      while (current !== targetIndex && guard < 10) {
        track.appendChild(track.firstElementChild);
        current = track.firstElementChild.getAttribute('data-index');
        guard++;
      }
      track.style.transition = 'none';
      track.style.transform = 'translateX(0)';
      updateDots();
    });
});

