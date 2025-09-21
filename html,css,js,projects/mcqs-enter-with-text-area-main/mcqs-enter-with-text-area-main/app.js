function mcqs() {
  var allmcqs = document.getElementById("allmcqs");
  var mcqs = {};
  var multimcqs = [];
  var value = allmcqs.value.split("\n");
  var count = 1;

  for (var i = 0; i < value.length; i++) {
    if (value[i] === "") {
      multimcqs.push(mcqs);
      mcqs = {};
      count = 1;
    } else {
      if (value[i].lastIndexOf("?") !== -1) {
        mcqs.question = value[i];
      } else {
        if (value[i].lastIndexOf("*") !== -1) {
          mcqs.answer = value[i].slice(0, -1);
          mcqs["option" + count] = value[i].slice(0, -1);
        } else {
          mcqs["option" + count] = value[i];
        }

        count++;
      }
      var text = document.getElementById('text')
      text.innerHTML = `* Successfully Submit The Mcq,s `
      text.style.color = 'green'
      setTimeout(()=>{
text.innerHTML = `* Again Submit Please Re-enter Data `
      text.style.color = 'red'
      text.style.wordSpacing = '10px'

      },1000)
    }

  }

  var nmbr = 1;

  var crt = 1;
  for (var i = 0; i < multimcqs.length; i++) {
    if (allmcqs.value === "") {
      alert("please enter data");
    } else {
      var render = document.getElementById("render");
      var totalMcqs = document.getElementById("totalMcqs");
     
    
     
      totalMcqs.innerHTML = nmbr;
     
      render.innerHTML += `<ul>
        <p>(${nmbr})${multimcqs[i].question} </p>
        <li>(A)${multimcqs[i].option1}</li>
       <li>(B)${multimcqs[i].option2}</li>
        <li>(C)${multimcqs[i].option3}</li>
       <li>(D)${multimcqs[i].option4}</li>
       <li>(Right option):${multimcqs[i].answer}</li>
        </ul>`;
      nmbr++;
    }
  }
 

}

function nextpage() {
  setTimeout(() => {
    window.location.href = "./index1.html";
  }, 10);
}
