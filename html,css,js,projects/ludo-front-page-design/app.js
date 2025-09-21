var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
  for (const tablink of tablinks) {
    tablink.classList.remove("active-link");
  }
  for (const tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}
let l2logo = document.querySelector(".l2");
var sidemenu = document.getElementById("side-menu");
function openmenu() {
  sidemenu.style.left = "0";
  l2logo.style.display = "block";
  sidemenu.style.position='fixed';
}
function closemenu() {
  sidemenu.style.left = "-250px";
  l2logo.style.display = "none";
  sidemenu.style.position='fixed';

}
let closeClick = ()=>{
  sidemenu.style.left = "-250px";
}





