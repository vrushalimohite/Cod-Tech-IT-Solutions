var questionBank= [
    {
        question : 'Where is Client-side JavaScript code is embedded within HTML documents?',
        option : ['A URL that uses the special javascript:code','A URL that uses the special javascript:protocol','A URL that uses the special javascript:encoding',' A URL that uses the special javascript:stack'],
        answer : 'A URL that uses the special javascript:protocol'
    },
    {
        question : 'Which of the following can be used to call a JavaScript Code Snippet?',
        option : [' Function/Method',' Preprocessor','Triggering Event',' RMI'],
        answer : ' Function/Method'
    },
    {
        question : 'Which of the following scoping type does JavaScript use?',
        option : [' Sequential','Segmental','Lexical',' Literal'],
        answer : 'Lexical'
    },
    {
        question : ' Which of the following is not a framework?',
        option : ['JavaScript .NET',' JavaScript','Cocoa JS','jQuery'],
        answer : ' JavaScript'
    },
    {
        question : 'Which of the following is not an error in JavaScript?',
        option : [' Missing of Bracket',' Division by zero','Syntax error',' Missing of semicolons'],
        answer : ' Division by zero'
    }
]

var question= document.getElementById('question');
var quizContainer= document.getElementById('quiz-container');
var scorecard= document.getElementById('scorecard');
var option0= document.getElementById('option0');
var option1= document.getElementById('option1');
var option2= document.getElementById('option2');
var option3= document.getElementById('option3');
var next= document.querySelector('.next');
var points= document.getElementById('score');
var span= document.querySelectorAll('span');
var i=0;
var score= 0;

//function to display questions
function displayQuestion(){
    for(var a=0;a<span.length;a++){
        span[a].style.background='none';
    }
    question.innerHTML= 'Q.'+(i+1)+' '+questionBank[i].question;
    option0.innerHTML= questionBank[i].option[0];
    option1.innerHTML= questionBank[i].option[1];
    option2.innerHTML= questionBank[i].option[2];
    option3.innerHTML= questionBank[i].option[3];
    stat.innerHTML= "Question"+' '+(i+1)+' '+'of'+' '+questionBank.length;
}

//function to calculate scores
function calcScore(e){
    if(e.innerHTML===questionBank[i].answer && score<questionBank.length)
    {
        score= score+1;
        document.getElementById(e.id).style.background= 'limegreen';
    }
    else{
        document.getElementById(e.id).style.background= 'tomato';
    }
    setTimeout(nextQuestion,300);
}

//function to display next question
function nextQuestion(){
    if(i<questionBank.length-1)
    {
        i=i+1;
        displayQuestion();
    }
    else{
        points.innerHTML= score+ '/'+ questionBank.length;
        quizContainer.style.display= 'none';
        scoreboard.style.display= 'block'
    }
}

//click events to next button
next.addEventListener('click',nextQuestion);

//Back to Quiz button event
function backToQuiz(){
    location.reload();
}

//function to check Answers
function checkAnswer(){
    var answerBank= document.getElementById('answerBank');
    var answers= document.getElementById('answers');
    answerBank.style.display= 'block';
    scoreboard.style.display= 'none';
    for(var a=0;a<questionBank.length;a++)
    {
        var list= document.createElement('li');
        list.innerHTML= questionBank[a].answer;
        answers.appendChild(list);
    }
}


displayQuestion();



