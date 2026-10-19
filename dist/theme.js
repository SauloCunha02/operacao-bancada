/* Apply the saved theme before the first paint, including offline pages. */
(()=>{
  let theme='light';
  try{if(localStorage.getItem('amc-theme-v1')==='dark')theme='dark';}catch{}
  document.documentElement.dataset.theme=theme;
  document.documentElement.style.colorScheme=theme;
})();
