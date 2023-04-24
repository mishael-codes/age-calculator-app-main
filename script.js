let btn = document.getElementById('arrow-icon');
btn.addEventListener('click', ()=>{
  let userDay = document.getElementById('day').value;
  let userMonth = document.getElementById('month').value;
  let userYear = document.getElementById('year').value;

  let date = new Date()
  let currentDate = date.getDate()
  let currentMonth = 1 + date.getMonth()
  let currentYear = date.getFullYear()

  
})
