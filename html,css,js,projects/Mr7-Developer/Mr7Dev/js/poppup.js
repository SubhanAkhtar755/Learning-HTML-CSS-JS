let poppup = document.querySelector("#poppup");
let poppup1 = document.querySelector("#poppup1");
let poppup2 = document.querySelector("#poppup2");
let poppup3 = document.querySelector("#poppup3");
let poppup4 = document.querySelector("#poppup4");

// Function to display popup

function openpoppup() {
    poppup.classList.add("open-poppup")
    console.log('sub');
    poppup.classList.remove("close-poppup")

}
function openpoppup1() {
    poppup1.classList.add("open-poppup")
    console.log('sub1');
    poppup.classList.remove("close-poppup")

} function openpoppup2() {
    poppup2.classList.add("open-poppup")
    console.log('sub2');
    poppup.classList.remove("close-poppup")

} function openpoppup3() {
    poppup3.classList.add("open-poppup")
    console.log('sub3');
    poppup.classList.remove("close-poppup")

} function openpoppup4() {
    poppup4.classList.add("open-poppup")
    console.log('sub4');
    poppup.classList.remove("close-poppup")

} function closepoppup1() {
    poppup1.classList.remove("open-poppup")
    poppup.classList.add("close-poppup")

  }function closepoppup2() {
    poppup2.classList.remove("open-poppup")
    poppup.classList.add("close-poppup")

  }function closepoppup3() {
    poppup3.classList.remove("open-poppup")
    poppup.classList.add("close-poppup")

  }function closepoppup4() {
    poppup4.classList.remove("open-poppup")
    console.log('sub4');
    poppup.classList.add("close-poppup")

  }
function closepoppup() {
    poppup.classList.remove("open-poppup")
    poppup.classList.add("close-poppup")
}
