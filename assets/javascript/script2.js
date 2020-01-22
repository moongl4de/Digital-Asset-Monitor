var startButton = document.getElementById('startButton')
var buttonContainer = document.getElementById('buttonContainer')
var questionText = document.getElementById('questionText')
var button1 = document.getElementById('button1')
var button2 = document.getElementById('button2')
var button3 = document.getElementById('button3')
var button4 = document.getElementById('button4')
var printScore = document.getElementById('score')
var scoreForm = document.getElementById('scoreForm')
var restart = document.getElementById('restartButton')
var backToGithub = document.getElementById('backToGithub')


var highScoreList = document.getElementById("high-score");

var scoreInput = document.getElementById('formGroupExampleInput')
var timer = document.getElementById("timer")




// var storedScores = [username, score]

var scoreArr = ["Stephen Hawking : 199", "Carl Sagan : 184"]

var gameOverSwitch = 0;
var questionNumber = 0;
var score = 0;
var countdown = 60;
function setTime() {
  var timerInterval = setInterval(
    function() {
      countdown--;
      timer.innerText = countdown + " seconds left.";
      if (countdown === 0) {
        clearInterval(timerInterval)
        timer.textContent = ""
        gameOver();
        alert("Time has run out!")
      }
      if (gameOverSwitch === 1){
        clearInterval(timerInterval)
        timer.textContent = ""
      }
    }, 1000);
}

//These are the questions that my code will pull from. After everything is working the way I want, I will use Math.random to randomize the questions. Also, I plan to add many more questions so that the quiz becomes more about answering as many questions correctly as possible within the time limit.
var questions = [
    {
      title: "Cryptocurrencies like Bitcoin and Ethereum are built using which technology?",
      choices: ["Blockchain", "Machine Learning", "Quantum Computing", "Kyber Crystals"],
      answer: "Blockchain"
    },
    {
      title: "Which of these is NOT a cryptocurrency?",
      choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
      answer: "parentheses"
    },
    {
      title: "Which of the following is the correct syntax to display an alert box using JavaScript?",
      choices: ["alertbox()", "msg()", "msgbox()", "alert()"],
      answer: "alert()"
    },
    {
      title: "JavaScript can be used to build: ",
      choices: ["Sorting Algorithm Animations", "Browser-based Cryptocurrency Miners", "Multiple Choice Quizzes", "All of the above!"],
      answer: "All of the above!"
    },
    {
      title: "JavaScript, ________ and ________ are considered the three pillars of web development: ",
      choices: ["HTML/BASIC", "TypeScript/Ruby", "Python/C++", "HTML/CSS"],
      answer: "HTML/CSS"
    },
  ];


//Check for stored data
initialize();

//This is my start button click event. I've got it doing a few things here: hiding the button itself, revealing the button container and questionText, and calling the loadQuestion() and setTime() functions. loadQuestion() is going to get everything going and setTime() starts the timer.

$("#startButton").on('click', function(){
      startButton.setAttribute("style", "display: none")
      buttonContainer.classList.remove('hide')
      questionText.classList.remove('hide')
      loadQuestion();
      setTime();  
      printScore.innerText = "Score: " + score
  });
//This function checks to see if questionNumber is less than the amount of questions to be asked. If so, the questionNumber's respective question title and question choices are appended.
function loadQuestion(){
  gameOverSwitch = 0;
  if(questionNumber < questions.length){
  questionText.innerText = questions[questionNumber].title;
  button1.innerText = questions[questionNumber].choices[0];
  button2.innerText = questions[questionNumber].choices[1];
  button3.innerText = questions[questionNumber].choices[2];
  button4.innerText = questions[questionNumber].choices[3];

//There are most certainly better ways of doing this. That being said, I tried several different things like using a for loop, a while loop, etc and I couldn't get it to work properly. For the time being, I've given each button it's own click event. It checks to see if the text inside the button matches the answer in my questions object.

//FIRST OPTION CLICK EVENT
  $("#button1").on('click', function(){
    if(button1.innerText === questions[questionNumber].answer){
      console.log("questions number: " + questionNumber)
      console.log("Correct!")
      score += 20;
      printScore.innerText = "Score: " + score
    } else {
      console.log("Incorrect!")
      countdown -= 10
      printScore.innerText = "Score: " + score
  } loadNextQuestion();
  });
//SECOND OPTION CLICK EVENT
  $("#button2").on('click', function(){
    if(button2.innerText === questions[questionNumber].answer){
      score += 20;
      printScore.innerText = "Score: " + score
      console.log("Correct!")
    } else {
      console.log("Incorrect!")
      countdown -= 10
      printScore.innerText = "Score: " + score
  } loadNextQuestion();
  });
//THIRD OPTION CLICK EVENT
  $("#button3").on('click', function(){
    if(button3.innerText === questions[questionNumber].answer){
      score += 20;
      printScore.innerText = "Score: " + score
      console.log("Correct!")
    } else {
      console.log("Incorrect!")
      countdown -= 10
      printScore.innerText = "Score: " + score
  } loadNextQuestion();
  });
//FOURTH OPTION CLICK EVENT
  $("#button4").on('click', function(){
    if(button4.innerText === questions[questionNumber].answer){
      score += 20;
      console.log("Correct!")
      printScore.innerText = "Score: " + score
    } else {
      console.log("Incorrect!")
      countdown -= 10
      printScore.innerText = "Score: " + score
  } loadNextQuestion();
  });
} else {
}
}

function loadNextQuestion(){
questionNumber++;
console.log(questionNumber)
if(questionNumber < questions.length){
printScore.innerText = "Score: " + score
questionText.innerText = questions[questionNumber].title;
button1.innerText = questions[questionNumber].choices[0];
button2.innerText = questions[questionNumber].choices[1];
button3.innerText = questions[questionNumber].choices[2];
button4.innerText = questions[questionNumber].choices[3];
} else {
  console.log("GAME OVER")
  buttonContainer.classList.add('hide')
  questionText.classList.add('hide')
  gameOver();
}
}
//Game Over function. This loads the high score form for the user to input their initials and save their score to client side storage.
function gameOver(){
  timer.textContent = ""
  gameOverSwitch++;
  buttonContainer.classList.add('hide')
  backToGithub.classList.remove('hide')
  questionText.classList.remove('hide')
  questionText.innerText = "HIGH SCORES"
  scoreForm.removeAttribute("class", "hide")
  scoreForm.addEventListener('submit', function(event){
    event.preventDefault()
    

    renderScore()
    scoreInput.value="";
    restart.classList.remove('hide')
    restart.addEventListener('click', function(){
      location.reload();
    });
  });
}

function renderScore(){
  highScoreList.innerText = ""
  var highScoreName = scoreInput.value.trim()
  var highScoreData = (highScoreName + " : " + score)
  if(gameOverSwitch > 0){

  
  if(score > 0){
  scoreArr.push(highScoreData)
  } else {
    alert("Score must be higher than 0 to record high score.")
  }
  }
  // console.log(scoreArr)
  
  for(i = 0; i < scoreArr.length; i++){
    var scoreTest = scoreArr[i]
    var li = document.createElement("li")
    li.textContent = scoreTest
    highScoreList.append(li)
  }

  var dataStorage = JSON.stringify(scoreArr)
  localStorage.setItem("userData", dataStorage)
  console.log(dataStorage);
}

function initialize(){
  var storedString = localStorage.getItem("userData")
  var parseString = JSON.parse(storedString)
  if (parseString !== null){
    console.log(parseString)
    scoreArr = parseString;
    
  }
  renderScore()
  
}
