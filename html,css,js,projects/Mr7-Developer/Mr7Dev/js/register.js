import { auth,
   createUserWithEmailAndPassword ,
   onAuthStateChanged ,
   googleProvider ,
   GoogleAuthProvider,
   signInWithPopup, 
    facebookProvider,
    FacebookAuthProvider,
    doc, setDoc,db,getDoc 
  } from "./firebase.js";


const register = () =>  {
  const email = document.getElementById('email');
  const password = document.getElementById('password');



  console.log('test');
  createUserWithEmailAndPassword(auth, email.value, password.value)
.then((userCredential) => {
  // Signed up 
  const user = userCredential.user;
  addUserToFirestoreWithMail(user)
  console.log('test');
})
.catch((error) => {
  const errorCode = error.code;
  const errorMessage = error.message;
 console.log(errorMessage , errorCode);
 
});

}

let registerBtn = document.getElementById('registerBtn');
registerBtn.addEventListener('click', register)


onAuthStateChanged(auth , async (user) => {

  if (user) {
    Swal.fire({
      title: "Slow Fetch Speed?",
      text: "Please Wait Automatically fetch data from the server to enter the Home Page",
      icon: "question"
    });
    const docRef = doc(db, "UsersRegisterData", user.uid);
    const docSnap = await getDoc(docRef);
    console.log('login' , user , 'doc' , docSnap.data(user)); 

    console.log( 'doc' , docSnap.data());
    if (docSnap.data()) {
      if(location.pathname !== "/home.html"){
        window.location = "home.html";
      }
      console.log('login' , user , 'doc' , docSnap.data()); 
    }


   
  } 
  else {
    console.log('not login');
    // if(location.pathname !== "/index.html"){
    //   window.location = "index.html";
    // }

  }
});


let addUserToFirestoreWithMail = async (user) => {
  await setDoc(doc(db, "UsersRegisterData", user.uid), {
    name: user.email.slice(0, user.email.indexOf('@')),
    email: email.value,
  });
  console.log('res');
  
}


let addUserToFirestore = async (user) => {
 const res = await setDoc(doc(db, "UsersRegisterData", user.uid), {
    name: user.displayName,
    email: user.email,
    verify: user.emailVerified,
    photo: user.photoURL,
    uid: user.uid
  });
  console.log('res' , res , user);
  
}




let signInWithGooglefn = () => {
  signInWithPopup(auth, googleProvider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // IdP data available using getAdditionalUserInfo(result)
    // ...
    console.log(user);
    addUserToFirestore(user);
    window.location = "home.html";

  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
    console.log(errorMessage);
    
  });


}
let signInWithGoogle = document.getElementById('signInWithGoogle');
signInWithGoogle.addEventListener('click', signInWithGooglefn)




let signInWithFacebookfn = () => {

  signInWithPopup(auth, facebookProvider)
  .then((result) => {
    // The signed-in user info.
    const user = result.user;

    // This gives you a Facebook Access Token. You can use it to access the Facebook API.
    const credential = FacebookAuthProvider.credentialFromResult(result);
    const accessToken = credential.accessToken;

    // IdP data available using getAdditionalUserInfo(result)
    // ...
  })
  .catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = FacebookAuthProvider.credentialFromError(error);
 console.log(errorMessage);
 
    // ...
  });

}



let signInWithFacebook = document.getElementById('signInWithFacebook');
signInWithFacebook.addEventListener('click', signInWithFacebookfn)