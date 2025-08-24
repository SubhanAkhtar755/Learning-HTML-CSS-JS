var carVariants = {
  /** toyota */
  toyota: {
    corolla: {
      type: {
        img: "https://i.ytimg.com/vi/Tv98Isw86I4/sddefault.jpg",
        name: "toyota corolla",
        model: "2023",
        color: ["black", "blue"],
        price: "pkr 3,00,000,0",
      },
    },
    Camry: {
      type: {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP22ZtvDMvzpn5NK07Gpc-br6_PiThVHfkVQ&s",
        name: "toyota camry",
        model: "2021",
        color: ["black", "red", "blue"],
        price: "pkr 2,80,000,0",
      },
    },
    four4Runner: {
      type: {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAXcS_MkY1TIID6UP0LujBpQmb_8Ld1f0ICw&s",
        name: "four4Runne",
        model: "2019",
        color: ["black", "red", "white"],
        price: "pkr 4,00,000,0",
      },
    },
  },
  /* honda */
  honda: {
    corolla: {
      type: {
        img: "",
        name: "toyota corolla",
        model: "2023",
        color: ["black", "red", "blue"],
        price: "pkr 3,00,000,0",
      },
    },
    Camry: {
      type: {
        img: "",
        name: "toyota camry",
        model: "2021",
        color: ["black", "red", "blue"],
        price: "pkr 2,80,000,0",
      },
    },
    four4Runner: {
      type: {
        img: "",
        name: "toyota four4Runner",
        model: "2019",
        color: ["black", "red", "blue"],
        price: "pkr 4,00,000,0",
      },
    },
  },
  /**suzuki */
  suzuki: {
    corolla: {
      type: {
        img: "",
        name: "toyota corolla",
        model: "2023",
        color: ["black", "red", "blue"],
        price: "pkr 3,00,000,0",
      },
    },
    Camry: {
      type: {
        img: "",
        name: "toyota camry",
        model: "2021",
        color: ["black", "red", "blue"],
        price: "pkr 2,80,000,0",
      },
    },
    four4Runner: {
      type: {
        img: "",
        name: "toyota four4Runner",
        model: "2019",
        color: ["black", "red", "blue"],
        price: "pkr 4,00,000,0",
      },
    },
  },
};

var company = document.getElementById("company");
var brand = document.getElementById("brand");
allcars = document.getElementById("allcars");

company.innerHTML = `<option> select company  </option>`;
brand.innerHTML = `<option> select brand  </option>`;
for (var key in carVariants) {
  company.innerHTML += `
    <option value="${key}">${key.toUpperCase()}</option>
    `;

  for (var key1 in carVariants[key]) {
    for (var key2 in carVariants[key][key1]) {
      /*   console.log(carVariants[key][key1][key2]) */

      var cardata = carVariants[key][key1][key2];
      var colordiv = "";
      for (var i = 0; i < cardata.color.length; i++) {
        colordiv += `<div  class="me-2 mb-2 mr-2" style="border:1px solid; width:20px; height:20px; border-radius:10px; background-color: ${cardata.color[i]}"></div>`;
        console.log(colordiv.color);
      }

      /*   allcars.innerHTML += ` <div class="col">
        <div class="card mb-2" style="width: 18rem">
          <div class="card-body">
            <h5 class="card-title">${carVariants[key][key1][key2].name}</h5>
            <h6 class="card-subtitle mb-2 text-muted">${carVariants[key][key1][key2].model}</h6>
           <h2> ${carVariants[key][key1][key2].price}</h2>
           <div  class="d-flex">${colordiv}</div>
          </div>
        </div>
      </div>`;        */
    }
  }
}

function onCompanyChange() {
  for (var key in carVariants[company.value]) {
    brand.innerHTML += `
        <option value="${key}">${key.toUpperCase()}</option>
        `;
  }
}

function filtercar() {
  console.log(carVariants[company.value][brand.value]);
  var cardata = carVariants[company.value][brand.value].type;
  allcars.innerHTML = ` <div class="col">
    <div class="card mb-2" style="width: 18rem">

      <div class="card-body">
       <img src="${cardata.img}" class="card-img-top" alt="...">
        <h5 class="card-title">${cardata.name}</h5>
        <h6 class="card-subtitle mb-2 text-muted">${cardata.model}</h6>
       <h2> ${cardata.price}</h2>
      </div>
       <div class="d-flex ">${colordiv}</div>
    </div>
  </div>`;
}
