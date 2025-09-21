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

var sidemenu = document.getElementById("side-menu");
function openmenu() {
  sidemenu.style.right = "0";
}
function closemenu() {
  sidemenu.style.right = "-200px";
}

if ("serviceWorker" in navigator) {
  window.addEventListener("load", function () {
    navigator.serviceWorker
      .register("/serviceWorker.js")
      .then((res) => {
        console.log("service worker registered");
        Notification.requestPermission().then(res => {
          if (Notification.permission == "granted") {
            console.log("Granted permission");
            return;
          }
          console.log(res);
        });
      })
      .catch((err) => console.log("service worker not registered", err));
  });
  navigator.serviceWorker.ready.then((swReg)=>{
   
    var options = {
      body :'🌍As an experienced web developer, I am passionate about creating robust and user-friendly web applications.',
      icon : 'images/WhatsApp Image 2024-11-11 at 1.01.06 AM.jpeg',
    };
    swReg.showNotification('MY portfolio Website' , options)
  })
}


function seemore(){
  setTimeout(() => {
    window.location.href = "explore projects/index.html"
  });
}






document.addEventListener('scroll' , ()=>{

  let nav = document.getElementById("nav");
  let logo = document.querySelector(".logo");
let jlva = document.querySelector(".teenlines");

  if (window.scrollY > 85) {
    nav.classList.add("navjs");
     logo.style.height = "50px";
     jlva.classList.add("jlva");
  }else{
    nav.classList.remove("navjs")
      logo.style.height = "80px"
      jlva.classList.remove("jlva")
  }
})


let contactform = ()=>{
  if(true){
      Swal.fire({
          title: "Contact Page Not Working",
          text: "Please Contact On Whatsapp And Others Social Media Platforms!",
          icon: "info"
        });
  }
  }