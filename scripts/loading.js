setTimeout(() => {
    window.location.href = "html/kezdolap.html";
}, 4000);


window.addEventListener('beforeunload', () => {
  document.body.classList.remove('animate-in'); 
  document.body.classList.add('animate-out'); 
}); 
