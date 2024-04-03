var day=document.querySelector(".day");
var date=document.querySelector(".date");
var month=document.querySelector(".month");
var year=document.querySelector(".year");
var hour=document.querySelector(".hour");
var min=document.querySelector(".min");
var sec=document.querySelector(".sec");

const months= ["January","February","March","April","May","June","July",
"August","September","October","November","December"];
const weeks=['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

// console.log(todayDate);
// console.log(todayDate.getDate());
// console.log(todayDate.getDay());
// console.log(todayDate.getMonth()+1);
// console.log(todayDate.getFullYear());
// console.log(todayDate.getHours());
// console.log(todayDate.getMinutes());
// console.log(todayDate.getSeconds());


function setDate()
{
const todayDate=new Date();
day.textContent=weeks[todayDate.getDay()];
date.textContent=todayDate.getDate().toString().padStart(2,'0');
month.textContent=months[todayDate.getMonth()];
year.textContent=todayDate.getFullYear();
hour.textContent=todayDate.getHours().toString().padStart(2,'0');
min.textContent=todayDate.getMinutes().toString().padStart(2,'0');
sec.textContent=todayDate.getSeconds().toString().padStart(2,'0');}


setInterval(setDate,1000);