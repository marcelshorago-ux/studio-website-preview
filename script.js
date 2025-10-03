document.getElementById('year').textContent = new Date().getFullYear();
const items = document.querySelectorAll('.portfolio .item');
const lb = document.getElementById('lightbox');
const lbImg = document.getElementById('lb-img');
const lbVideo = document.getElementById('lb-video');
const closeBtn = document.querySelector('.lightbox-close');

function closeLB(){lb.classList.remove('show'); lbImg.src=''; lbVideo.src='';}
items.forEach(a=>{
  a.addEventListener('click',e=>{
    e.preventDefault();
    if(a.classList.contains('video')){
      lbVideo.src = a.href + '?autoplay=1';
      lbVideo.style.display='block';
      lbImg.style.display='none';
    } else {
      lbImg.src=a.href;
      lbImg.style.display='block';
      lbVideo.style.display='none';
    }
    lb.classList.add('show');
  });
});
closeBtn.addEventListener('click',closeLB);
lb.addEventListener('click',e=>{if(e.target===lb) closeLB();});
