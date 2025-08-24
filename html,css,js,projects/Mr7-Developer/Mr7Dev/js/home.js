const hamburger_menu = document.querySelector(".hamburger-menu");
const container = document.querySelector(".container");

hamburger_menu.addEventListener("click", () => {
  container.classList.toggle("active");
});
let menuToggle = document.querySelector(".menuToggle");
let menu1 = document.querySelector(".menu1");

menuToggle.onclick = function () {
  menu1.classList.toggle("active");
};
import { auth, onAuthStateChanged, signOut , doc , db , getDoc } from "./firebase.js";
let email = document.getElementById('email');
let name1 = document.getElementById('name');
let verify = document.getElementById('verify');
let UID = document.getElementById('UID');
let profile = document.getElementById('profile1');
onAuthStateChanged(auth , async (user) => {
  const docRef = doc(db, "UsersRegisterData", user.uid);
  const docSnap = await getDoc(docRef);
  console.log( 'doc' , docSnap.data());

  if (user && user.displayName) {
      email.innerHTML = `Email : ${user.email}`;
      name1.innerHTML = `Name : ${user.displayName}`;   
      verify.innerHTML = `Verify Email : ${user.emailVerified}`;   
      UID.innerHTML = `Unique ID : ${user.uid}`;   
      profile.innerHTML = `ID Create: ${user.reloadUserInfo.createdAt}`;
      let picImg = document.getElementById('picImg'); 
      picImg.src = user.photoURL;  // set the src attribute of the img element to the user's photo URL  // set the src attribute of the img element to the user's photo URL  // set the src attribute of the img element to the user's photo URL  // set the src attribute of the img element to the user's photo URL  // set the src attribute of the img element to the user's photo URL  // set the src attribute of the img
      let pic = user.photoURL;
      console.log(pic , picImg.src);
      picImg.classList.add('picImg1');
      let distance = user.reloadUserInfo.createdAt;
      let now = new Date().getTime()
      let result = Math.round(Math.floor(now - distance) / (1000 * 60 * 60 * 24));
    console.log(Math.ceil(Math.floor(now - distance) / (1000 * 60 * 60 * 24)));
 if (result >= 0) {
  profile.innerHTML = `ID Create: ${result} days ago`;   

 }
else if (result >= 30) {
  result = Math.ceil(Math.floor(now - distance) / (1000 * 60 * 60 * 24));
  result = result / 30
  console.log(result);
  profile.innerHTML = `ID Create: ${result} months ago`;   
  }
  else if (result === 365) {
    result = Math.ceil(Math.floor(now - distance) / (1000 * 60 * 60 * 24));
    result = result / 365
    console.log(result);
    profile.innerHTML = `ID Create: ${result} years ago`;   
    }
  
     
  }else{
    email.innerHTML = `Email : ${user.email}`;
    name1.innerHTML =   `Name : ${user.email.slice(0, user.email.indexOf('@'))}`;
    verify.innerHTML = `Verify Email : True`;   
      UID.innerHTML = `Unique ID : . .. ... .... .....`;   
      profile.innerHTML = `Anonymous : 👁`;
     
  }
})