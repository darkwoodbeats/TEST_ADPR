// Mobile Button Interaction
const toggleBtn = document.getElementById('mobile-btn');
const naviList = document.getElementById('navi-list');

console.log(toggleBtn);
console.log(naviList);

toggleBtn.addEventListener('click', () => { naviList.classList.toggle("active"); });