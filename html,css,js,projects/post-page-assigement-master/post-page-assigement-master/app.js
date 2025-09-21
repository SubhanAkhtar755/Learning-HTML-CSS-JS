var bgimg = "";
function submit() {
  var title = document.getElementById("title");
  var description = document.getElementById("description");
  var post = document.getElementById("post");
  if (title.value.trim() && description.value.trim) {
    post.innerHTML += `  <div style="background-image:url(${bgimg})" class="card mb-3 wid" style="max-width: 540px;">
      <div class="row g-0">
        <div class="col-md-4">
          <img src="images/WhatsApp Image 2024-11-11 at 1.01.06 AM.jpeg" class="img-fluid rounded-start imgw1" alt="...">
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">${title.value}</h5>
            <p class="card-text"> ${description.value}</p>
            <p class="card-text"><small class="text-muted">Last updated recently</small></p>
          </div>
        </div>
      </div> `;
    title.value = "";
    description.value = "";
  } else {
    Swal.fire({
      icon: "",
      title: "Oops...",
      text: "Please enter title & description!",
    });
  }
}

function selecting(src) {
    bgimg = src ;

  var imgbdr = document.getElementsByClassName("img-bdr");
  for(var i = 0; i < imgbdr.length; i++){
    imgbdr[i].className = "img-bdr";
  }
  event.target.className += " image1-select";
}
