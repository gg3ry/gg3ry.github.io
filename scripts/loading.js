function tovabb(){
  document.body.style.backgroundColor = '#306d85';
  document.querySelector('.center').style.display = 'none';
  document.querySelector('.sea').style.display = 'block',
  setTimeout(() => {
    window.location.href = "html/kezdolap.html";
  }, 4500);
}

window.addEventListener('beforeunload', () => {
  document.body.classList.remove('animate-in'); 
  document.body.classList.add('animate-out'); 
}); 
