const checkbox = document.getElementById('checkbox');
const body = document.getElementsByClassName('body');

checkbox.addEventListener('change', function(){
   document.body.classList.toggle('dark');
});