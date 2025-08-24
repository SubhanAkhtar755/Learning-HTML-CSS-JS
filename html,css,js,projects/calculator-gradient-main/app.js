
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
      swReg.showNotification('MY Calculator' , options)
    })
  }
  