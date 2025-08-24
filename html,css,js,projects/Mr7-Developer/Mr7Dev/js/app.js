import { auth, onAuthStateChanged, signOut, doc, db, getDoc } from "./firebase.js";

onAuthStateChanged(auth, async (user) => {

  if (user) {
    console.log('login');
    const docRef = doc(db, "UsersRegisterData", user.uid);
    const docSnap = await getDoc(docRef);
    console.log( 'doc' , docSnap.data());
    if (docSnap.data()) {
      console.log('login');
    }}
  else {
    console.log('not login');
    logoutBtn &&  logoutBtn.style.display == 'none';
  }
});





let logout = () => {
  signOut(auth).then(() => {
    window.location = "index.html";
  }).catch((error) => {

  });
}
let logoutBtn = document.getElementById('logoutBtn');
logoutBtn && logoutBtn.addEventListener('click', logout)