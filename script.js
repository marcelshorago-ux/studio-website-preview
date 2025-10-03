document.getElementById('year').textContent = new Date().getFullYear();
const buttons=[...document.querySelectorAll('.filter')];
const items=[...document.querySelectorAll('.masonry .item')];
buttons.forEach(btn=>btn.addEventListener('click',()=>{
  buttons.forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  const cat=btn.dataset.filter;
  items.forEach(it=>{
    it.style.display = (cat==='all' || it.classList.contains(cat)) ? 'inline-block' : 'none';
  });
}));
