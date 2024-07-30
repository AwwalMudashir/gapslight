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

var person = "akeem";


function change(){
  if(person == "akeem"){
   document.getElementById("person-icon").textContent = "Click To Meet Mr. Hakeem Garba";
   person = "eze"
   document.getElementById("content-image").src = "images/Eze.png"
   document.getElementById("content-text").innerHTML = `<b id="content-text-name">Ulohomuno Eze Afieroho</b><br>
          <span id="content-text-degree">MBA, PMP.PRINCE2,COREN, PhD</span><br><br> Eze is an infrastructure and major projects expert. He works with real estate, infrastructure and capital-intensive industries, government and non-governmental organisations to unlock opportunities and improved performance by optimizing the delivery of major projects and the use of infrastructure assets. This is guided by his over 15 years of work experience that spans, project management, policy, strategy and operations, financial modelling, and commercial expertise applied across the infrastructure value chain including structuring public private partnerships.`
 
   document.getElementById("content-image").classList.add("anim");
   document.getElementById("content-text").classList.add("anim2");
 
   document.getElementById("content-image").addEventListener("animationend", function() {
     document.getElementById("content-image").classList.remove("anim");
     }, { once: true });
   document.getElementById("content-text").addEventListener("animationend", function() {
     document.getElementById("content-text").classList.remove("anim2");
     }, { once: true });
  }else{
   document.getElementById("person-icon").textContent = "Click To Meet Mr. Eze Afieroho";
   person = "akeem"
   document.getElementById("content-image").src = "images/Engr. Hakeem Garba.jpg"
   document.getElementById("content-text").innerHTML = `   <b id="content-text-name">Garba A. Akeem. </b><br>
          <span id="content-text-degree">MBA, MSC, ITILV4, SolarWind, PEXIP, COREN</span><br><br> Akeem Garba is a globally recognized expert in transforming organizations into high-performing, efficient, and effective entities. With over 15 years of experience, he specializes in real estate, infrastructure, and capital-intensive industries. Akeem collaborates with both government and non-governmental organizations, leveraging his extensive expertise in project management, policy, strategy, operations, financial modeling, and public-private partnership structuring. His disciplined approach consistently delivers innovative solutions, driving sustainable growth and success for clients locally and internationally. Akeem excels in optimizing major project delivery and infrastructure asset utilization, unlocking opportunities, and enhancing performance.`

   document.getElementById("content-image").classList.add("anim");
   document.getElementById("content-text").classList.add("anim2");

   document.getElementById("content-image").addEventListener("animationend", function() {
    document.getElementById("content-image").classList.remove("anim");
    }, { once: true });
  document.getElementById("content-text").addEventListener("animationend", function() {
    document.getElementById("content-text").classList.remove("anim2");
    }, { once: true });
  }


}