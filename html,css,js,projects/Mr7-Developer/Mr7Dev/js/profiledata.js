import { auth, onAuthStateChanged, signOut , doc , db , getDoc } from "./firebase.js";

let email = document.getElementById('email');
let name1 = document.getElementById('name');
onAuthStateChanged(auth , async (user) => {
  const docRef = doc(db, "UsersRegisterData", user.uid);
  const docSnap = await getDoc(docRef);
  console.log( 'doc' , docSnap.data());

  if (user && user.displayName) {
      email.innerHTML = user.email;
      name1.innerHTML = user.displayName;   
     
  }
  else{
    email.innerHTML = user.email;
    name1.innerHTML = user.email.slice(0, user.email.indexOf('@'));
  }
});