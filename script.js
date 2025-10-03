document.getElementById('year').textContent = new Date().getFullYear();

// Filters
const buttons=[...document.querySelectorAll('.filter')];
const items=[...document.querySelectorAll('.masonry .item')];
buttons.forEach(btn=>btn.addEventListener('click',()=>{
  buttons.forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  const cat=btn.dataset.filter;
  items.forEach(it=>{
    it.style.display=(cat==='all'||it.classList.contains(cat))?'inline-block':'none';
  });
}));

// Lightbox
const lb=document.getElementById('lightbox');
const lbImg=document.getElementById('lb-img');
const lbVideo=document.getElementById('lb-video');
const closeBtn=document.querySelector('.lightbox-close');
function openImage(src){lbImg.src=src; lbImg.style.display='block'; lbVideo.style.display='none'; lb.classList.add('show');}
function openVideo(url){lbVideo.src=url+(url.includes('?')?'&':'?')+'autoplay=1'; lbVideo.style.display='block'; lbImg.style.display='none'; lb.classList.add('show');}
function closeLB(){lb.classList.remove('show'); lbImg.src=''; lbVideo.src='';}
[...document.querySelectorAll('.masonry .item')].forEach(a=>{
  a.addEventListener('click',(e)=>{e.preventDefault(); a.dataset.type==='video'?openVideo(a.href):openImage(a.href);});
});
closeBtn.addEventListener('click',closeLB);
lb.addEventListener('click',(e)=>{if(e.target===lb) closeLB();});
document.addEventListener('keydown',(e)=>{if(e.key==='Escape') closeLB();});
