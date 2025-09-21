var alldata = [
  {
    question: "Who is the Current Chairman of NEPRA ?",
    option1: "Waseem Mukhtar",
    option2: "Tauseef H Farooqi",
    option3: "Syed Masood ul Hassan Naqvi",
    option4: "Brig (R) Tariq Saddozai",
    answer: "Waseem Mukhtar",
  },
  {
    question: "Who is the Current Federal Minister for Aviation?",
    option1: "Fawad chaudhry",
    option2: "Ghulam Sarwar",
    option3: "Kawaja Muhammad Asif",
    option4: "None of these",
    answer: "Kawaja Muhammad Asif",
  },
  {
    question:
      "How much annual revenue did PIA lose due to the ban on flights to Europe?",
    option1: "Rs20 billion",
    option2: "Rs30 billion",
    option3: "Rs40 billion",
    option4: "Rs50 billion",
    answer: "Rs40 billion",
  },
  {
    question:
      "Renowned journalist Khaled Ahmed passed away on ______, November 2024?",
    option1: "September 17",
    option2: "October 17",
    option3: "November 17",
    option4: "December 17",
    answer: "November 17",
  },
  {
    question:"Who is the Current Secretary General of (ECO) Economic Cooperation Organization?",
    option1: "Mr. Khusrav Noziri",
    option2: "Dr. Hadi Soleimanpour",
    option3: "Asad Majeed Khan",
    option4: "Dr. Ahmad Aboul Gheit",
    answer: "Asad Majeed Khan",
  },
  {
    question:
      "T20 Blind Cricket World Cup 2024 is scheduled to be held in Pakistan from: __________?",
    option1: "November 23 to December 3",
    option2: "November 20 to November 30",
    option3: "December 1 to December 10",
    option4: "None of Above",
    answer: "November 23 to December 3",
  },
  {
    question:
      "Who is the Chairman of the Judicial Commission of Pakistan ( JCP ) ?",
    option1: "Army Chief",
    option2: "President",
    option3: "Prime Minister",
    option4: "Chief Justice",
    answer: "Chief Justice",
  },
  {
    question:
      "T20 Blind Cricket World Cup 2024 is scheduled to be held in: ____________?",
    option1: " India",
    option2: "Pakistan",
    option3: "South Africa",
    option4: "Sri Lanka",
    answer: "Pakistan",
  },
  {
    question:
      "The last visit to Pakistan by Indian foreign minister was in: _____________?",
    option1: "2015",
    option2: "2012",
    option3: "2010",
    option4: "2018",
    answer: "2015",
  },
  {
    question:
      "Sindh Rawadari March was demonstrated in Karachi ,Pakistani on ___________?",
    option1: "10 October,2024",
    option2: "11 October ,2024",
    option3: "12 October ,2024",
    option4: "13 October ,2024",
    answer: "13 October ,2024",
  },
  {
    question:
      "The Council of Heads of Government is the _________ decision-making body in the SCO?",
    option1: "First-highest",
    option2: "Second-highest",
    option3: "Third-highest",
    option4: "Supreme",
    answer: "Supreme",
  },
  {
    question:
      "Which Pakistani leader addressed the international forum in Ashgabat, Turkmenistan?",
    option1: "Khawaja Asif",
    option2: "Shehbaz Sharif",
    option3: "Bilawal Bhutto",
    option4: "Asif Ali Zardari",
    answer: "Asif Ali Zardari",
  },
  {
    question:
      "World’s 4th largest oil & gas reserves found in ___________?",
    option1: "Africa",
    option2: "Russia",
    option3: "Pakistan",
    option4: "Afghanistan",
    answer: "Pakistan",
  },
  {
    question:
      "What is the Rank of Pakistan in Asian Power Index ( API ) 2024 ?",
    option1: "5th",
    option2: "7th",
    option3: "9th",
    option4: "27th",
    answer: "5th",
  },
  {
    question:
      "Who is the Current Chairman of Federal Board of Revenue (FBR)?",
    option1: "Rashid Mahmood Langrial",
    option2: "Malik Amjad Zubair Tiwana",
    option3: "Asim Ahmad",
    option4: "Dr Ashfaq Ahmed",
    answer: "Rashid Mahmood Langrial",
  },
  {
  question:"Finish",
  },
];

var index1 = 0;
var score1 = 0;
function renderquestion(){

  var question = document.getElementById("question");
  var options = document.getElementsByName("mcqs");
  var score = document.getElementById("score")
  for (var i = 0; i < options.length; i++) {
   
    if (options[i].checked) {
      if (options[i].value === alldata[index1 - 1].answer) {
        score1++;
          score.innerHTML = `  <h2>${score1}/15</h2>`

    }
  }
}

  if (!alldata[index1]) {
    if(score1 >= 15){
        score.innerHTML = `  <h2>${score1}/15</h2>
        <h3>Osm , I Appreciate You</h3>`
  }
  else if(score1 >= 10){
     score.innerHTML = `  <h2>${score1}/15</h2>
        <h3>Excellent</h3>`
  }
  else if(score1 >= 7){
    score.innerHTML = `  <h2>${score1}/15</h2>
       <h3>Good , But Improve it</h3>`
 }
 else if(score1 >= 4){
    score.innerHTML = `  <h2>${score1}/15</h2>
       <h3>poor , Try Again</h3>`
 }
 else if(score1 >= 0){
    score.innerHTML = `  <h2>${score1}/15</h2>
       <h3>Fail , Try Again</h3>`
 }else("oh , no very bad")
    // console.log("result:", score1);
    return;
  }
  question.innerHTML = `

                <p>${alldata[index1].question}</p>
                <label
                  ><input type="radio" name="mcqs" value="${alldata[index1].option1}" />${alldata[index1].option1}</label
                >
                <label
                  ><input type="radio" name="mcqs" value="${alldata[index1].option2}" />${alldata[index1].option2}</label
                >
                <label
                  ><input type="radio" name="mcqs" value="${alldata[index1].option3}" />${alldata[index1].option3}</label
                >
                <label
                  ><input type="radio" name="mcqs" value="${alldata[index1].option4}" />${alldata[index1].option4}</label>`
  index1++;

}
renderquestion();