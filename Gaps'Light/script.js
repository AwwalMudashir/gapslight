const bar = document.querySelector('.bar');
const popup = document.getElementById('popup');
const overlay = document.getElementById('overlay');

let display = false;

// function drop(){
//   const drop = document.querySelector('.drop');
//   if(display !=true){
//     drop.style.display = 'block';
//     display = true
//   }else{
//     drop.style.display = 'none';
//     display = false
//   }
// }

const global = {
  currentPage: window.location.pathname,
  search: {
      term: '',
      type: '',
      page: 1,
      totalPages: 1,
      totalResults: 0,
  }
};

function init(){
  console.log("helo")
  console.log(global.currentPage)
  switch(global.currentPage){
    case '/':
    case '/index.html':
      function drop(){
        popup.style.display = 'grid';
        overlay.style.display = 'block';
      }
      function closeDropDown(){
        popup.style.display = 'none';
        overlay.style.display = 'none';
      } 
    break;
    case '/about.html':

      // change();
      break;
  }
}

init();

const body = document.body;

function drop(){
  document.getElementById('popup').style.display = 'block';
  document.getElementById('overlay').style.display = 'block';
  document.body.classList.add('no-scroll');

}
function closeDropDown(){
  document.getElementById('popup').style.display = 'none';
  document.getElementById('overlay').style.display = 'none';
  document.body.classList.remove('no-scroll');
} 

