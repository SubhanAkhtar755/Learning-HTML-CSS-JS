import { auth,
   signInWithEmailAndPassword ,
   onAuthStateChanged ,
    signInWithPopup ,
    setDoc,
    db ,
    doc,
    getDoc

    } from "./firebase.js";


const login = () =>  {
    const email = document.getElementById('email');
    const password = document.getElementById('password');


  
    console.log('test');
signInWithEmailAndPassword(auth, email.value, password.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    window.location = "home.html";

    console.log('test');

  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
   console.log(errorMessage , errorCode);
   
  });

}

let loginBtn = document.getElementById('loginBtn');
 loginBtn.addEventListener('click', login)

//  onAuthStateChanged(auth , (user) => {

//   if (user) {
//     if(location.pathname !== "/home.html"){
//       window.location = "home.html";
//     }
//     console.log('login'); 
//   } 
//   else {
//     console.log('not login');
//     // if(location.pathname !== "/index.html"){
//     //   window.location = "index.html";
//     // }

//   }
// });

onAuthStateChanged(auth , async (user) => {
 
  if (user) {
    Swal.fire({
      title: "Slow Fetch Speed?",
      text: "Please Wait Automatically fetch data from the server to enter the Home Page",
      icon: "question"
    });
    const docRef = doc(db, "UsersRegisterData", user.uid);
    const docSnap = await getDoc(docRef);
    console.log( 'doc' , docSnap.data());
    if (docSnap.data()) {
      if(location.pathname !== "/home.html"){
        window.location = "home.html";
      }
      console.log('login'); 
    } } 
  else {
    console.log('not login');
    // if(location.pathname !== "/index.html"){
    //   window.location = "index.html";
    // }
    }
});









