var html = [
    {
        question: 'What does HTML stand for?',
        option1: 'Hyperlinks and Text Markup Language',
        option2: 'Hypertext Markup Language',
        option3: 'Home Tool Markup Language',
        correctOption: "Hypertext Markup Language"
    },
    {
        question: 'Who is making the Web standards?',
        option1: 'Google',
        option2: 'The World Wide Web Consortium',
        option3: 'Microsoft',
        correctOption: "The World Wide Web Consortium"
    },
    {
        question: 'Choose the correct HTML element for the largest heading:',
        option1: '<heading>',
        option2: '<h6>',
        option3: '<h1>',
        correctOption: "<h1>"
    },
    {
        question: 'What is the correct HTML element for inserting a line break?',
        option1: '<linebreak>',
        option2: '<br>',
        option3: '<break>',
        correctOption: "<br>"
    },
    {
        question: 'What is the correct HTML for adding a background color?',
        option1: '<body bg="yellow">',
        option2: '<background>yellow</background>',
        option3: '<body style="background-color:yellow;">',
        correctOption: '<body style="background-color:yellow;">'
    },
    {
        question: 'Choose the correct HTML element to define important text:',
        option1: '<strong>',
        option2: '<b>',
        option3: '<i>',
        correctOption: '<strong>'
    },
    {
        question: 'Choose the correct HTML element to define emphasized text:',
        option1: '<italic>',
        option2: '<i>',
        option3: '<em>',
        correctOption: "<em>"
    },
    {
        question: 'What is the correct HTML for creating a hyperlink?',
        option1: '<a>http://www.w3schools.com</a>',
        option2: '<a href="http://www.w3schools.com">W3Schools</a>',
        option3: '<a url="http://www.w3schools.com">W3Schools.com</a>',
        correctOption: '<a href="http://www.w3schools.com">W3Schools</a>'
    },
    {
        question: 'Which character is used to indicate an end tag?',
        option1: '*',
        option2: '/',
        option3: '<',
        correctOption: "/"
    },
    {
        question: 'How can you open a link in a new tab/browser window?',
        option1: '<a href="url" target="new">',
        option2: '<a href="url" new>',
        option3: '<a href="url" target="_blank">',
        correctOption: '<a href="url" target="_blank">'
    },
    {
        question: 'Which of these elements are all <table> elements?',
        option1: '<table> <tr> <td>',
        option2: '<table> <head> <tfoot>',
        option3: '<table> <tr> <tt>',
        correctOption: "<table> <tr> <td>"
    },
    {
        question: 'Inline elements are normally displayed without starting a new line.',
        option1: 'True',
        option2: 'False',
        correctOption: "True"
    },
    {
        question: "How can you make a numbered list?",
        option1: '<dl>',
        option2: '<ul>',
        option3: '<ol>',
        option4: '<list>',
        correctOption: "<ol>"
    },
    {
        question: 'How can you make a bulleted list?',
        option1: '<ol>',
        option2: '<list>',
        option3: '<ul>',
        option4: '<dl>',
        correctOption: "<ul>"
    },
    {
        question: 'What is the correct HTML for inserting an image?',
        option1: '<img alt="MyImage">image.gif</img>',
        option2: '<img href="image.gif" alt="MyImage">',
        option3: '<img src="image.gif" alt="MyImage">',
        option4: '<image src="image.gif" alt="MyImage">',
        correctOption: '<img src="image.gif" alt="MyImage">'
    },
    {
        question: 'What is the correct HTML for making a checkbox?',
        option1: '<iput type="check">',
        option2: '<check>',
        option3: '<checkbox>',
        option4: '<input type="checkbox">',
        correctOption: '<input type="checkbox">'
    },
    {
        question: "What is the correct HTML for making a text input field?",
        option1: '<input type="textfield">',
        option2: '<input type="text">',
        option3: '<textfield>',
        option4: '<textinput type="textfield">',
        correctOption: '<input type="text">'
    },
    {
        question: 'What is the correct HTML for making a drop-down list?',
        option1: '<input type="list">',
        option2: '<list>',
        option3: '<input type="dropdown">',
        option4: '<select>',
        correctOption: '<select>'
    },
    {
        question: 'What is the correct HTML for making a text area?',
        option1: '<input type="textbox">',
        option2: '<input type="textarea">',
        option3: '<textarea>',
        correctOption: '<textarea>'
    },
    {
        question: 'What is the correct HTML for inserting a background image?',
        option1: '<background img="background.gif">',
        option2: '<body bg="background.gif">',
        option3: '<body style="background-image:url(background.gif)">',
        correctOption: '<body style="background-image:url(background.gif)">'
    }
]

var css = [
    {
        question: 'What does CSS stand for?',
        option1: 'Colorful Style Sheet',
        option2: 'Computer Style Sheet',
        option3: 'Cascading Style Sheet',
        option4: 'Creative Style Sheet',
        correctOption: 'Cascading Style Sheet'
    },
    {
        question: 'What is the correct HTML for referring to an external style sheet?',
        option1: '<stylesheet>mystyle.css</stylesheet>',
        option2: '<style src="mystyle.css">',
        option3: '<link rel="stylesheet" type="text/css" href="mystyle.css">',
        correctOption: '<link rel="stylesheet" type="text/css" href="mystyle.css">'
    },
    {
        question: 'Where in an HTML document is the correct place to refer to an external style sheet?',
        option1: 'In the <body> section',
        option2: 'In the <head> section',
        option3: 'At the end of the document',
        correctOption: 'In the <head> section'
    },
    {
        question: 'Which HTML tag is used to define an internal style sheet?',
        option1: '<css>',
        option2: '<style>',
        option3: '<script>',
        correctOption: '<style>'
    },
    {
        question: 'Which HTML attribute is used to define inline styles?',
        option1: 'styles',
        option2: 'font',
        option3: 'style',
        option3: 'class',
        correctOption: 'style'
    },
    {
        question: 'Which is the correct CSS syntax?',
        option1: 'body{color: black;}',
        option2: '{body:color=black;}',
        option3: 'body:color=black;',
        option4: '{body;color:black;}',
        correctOption: 'body{color: black;}'
    },
    {
        question: 'How do you insert a comment in a CSS file?',
        option1: '/*this is a comment*/',
        option2: '//this is a comment',
        option3: '//this is a comment//',
        option3: "'this is a comment",
        correctOption: '/*this is a comment*/'
    },
    {
        question: 'Which property is used to change the background color?',
        option1: 'bgcolor',
        option2: 'color',
        option3: 'background-color',
        correctOption: 'background-color'
    },
    {
        question: 'How do you add a background color for all <h1> elements?',
        option1: 'h1 {background-color:#FFFFFF;}',
        option2: 'h1.all {background-color:#FFFFFF;}',
        option3: 'all.h1 {background-color:#FFFFFF;}',
        correctOption: 'h1 {background-color:#FFFFFF;}'
    },
    {
        question: 'Which CSS property is used to change the text color of an element?',
        option1: 'color',
        option2: 'text-color',
        option3: 'fgcolor',
        correctOption: 'color'
    },
    {
        question: 'Which CSS property controls the text size?',
        option1: 'font-size',
        option2: 'text-style',
        option3: 'text-size',
        option4: 'font-style',
        correctOption: 'font-size'
    },
    {
        question: 'What is the correct CSS syntax for making all the <p> elements bold?',
        option1: 'p {font-weight:bold;}',
        option2: '<p style="font-size:bold;">',
        option3: '<p style="text-size:bold;">',
        option4: 'p {text-size:bold;}',
        correctOption: 'p {font-weight:bold;}'
    },
    {
        question: 'How do you display hyperlinks without an underline?',
        option1: 'a {underline:none;}',
        option2: 'a {decoration:no-underline;}',
        option3: 'a {text-decoration:no-underline;}',
        option4: 'a {text-decoration:none;}',
        correctOption: 'a {text-decoration:none;}'
    },
    {
        question: 'How do you make each word in a text start with a capital letter?',
        option1: 'text-style:capitalize',
        option2: 'text-transform:capitalize',
        option3: 'You can not do that with CSS',
        option4: 'transform:capitalize',
        correctOption: 'text-style:capitalize'
    },
    {
        question: 'Which property is used to change the font of an element?',
        option1: 'font-style',
        option2: 'font-weight',
        option3: 'font-family',
        correctOption: 'font-family'
    },
    {
        question: 'How do you make the text bold?',
        option1: 'style:bold;',
        option2: 'font:bold;',
        option3: 'font-weight:bold;',
        correctOption: 'font-weight:bold;'
    },
    {
        question: 'Which property is used to change the left margin of an element?',
        option1: 'margin-left',
        option2: 'padding-left',
        option3: 'indent',
        correctOption: 'margin-left'
    },
    {
        question: 'When using the padding property; are you allowed to use negative values?',
        option1: 'Yes',
        option2: 'No',
        correctOption: 'No'
    },
    {
        question: 'How do you make a list that lists its items with squares?',
        option1: 'list: square;',
        option2: 'list-type: square;',
        option3: 'list-style-type: square;',
        correctOption: 'list-style-type: square;'
    },
    {
        question: 'How do you select an element with id "demo"?',
        option1: '#demo',
        option2: '.demo',
        option3: 'demo',
        option4: '*demo',
        correctOption: '#demo'
    }
]

var js = [
    {
        question: 'Inside which HTML element do we put the JavaScript?',
        option1: '<script>',
        option2: '<javascript>',
        option3: '<js>',
        option4: '<scripting>',
        correctOption: '<script>'
    },
    {
        question: 'Where is the correct place to insert a JavaScript?',
        option1: 'The <head> section',
        option2: 'The <body> section',
        option3: 'Both the <head> and "body" section are correct',
        correctOption: 'The <body> section'
    },
    {
        question: 'What is the correct syntax for referring to an external script called "xxx.js"?',
        option1: '<scripr href="xxx.js">',
        option2: '<scripr name="xxx.js">',
        option3: '<scripr src="xxx.js">',
        correctOption: '<scripr src="xxx.js">'
    },
    {
        question: 'The external JavaScript file must contain the <script> tag.',
        option1: 'False',
        option2: 'True',
        correctOption: 'False'
    },
    {
        question: 'How do you write "Hello World" in an alert box?',
        option1: 'msg("Hello World");',
        option2: 'alert("Hello World");',
        option3: 'alertBox("Hello World");',
        option4: 'msgBox("Hello World");',
        correctOption: 'alert("Hello World");'
    },
    {
        question: 'How do you create a function in JavaScript?',
        option1: 'function = myFunction()',
        option2: 'function myFunction()',
        option3: 'function:myFunction()',
        correctOption: 'function myFunction()'
    },
    {
        question: 'How do you call a function named "myFunction"?',
        option1: 'call function myFunction()',
        option2: 'myFunction()',
        option3: 'call myFunction()',
        correctOption: 'myFunction()'
    },
    {
        question: 'How to write an IF statement in JavaScript?',
        option1: 'if i = 5',
        option2: 'if(i == 5)',
        option3: 'if i == 5 then',
        option4: 'if i = 5 then',
        correctOption: 'if(i == 5)'
    },
    {
        question: 'How to write an IF statement for executing some code if "i" is NOT equal to 5?',
        option1: 'if =! 5 then',
        option2: 'if(i != 5)',
        option3: 'if i <> 5',
        option4: 'if(i <> 5)',
        correctOption: 'if(i != 5)'
    },
    {
        question: 'How does a WHILE loop start?',
        option1: 'while i = 1 to 10',
        option2: 'while (i <= 10; i++)',
        option3: 'while(i <= 10)',
        correctOption: 'while(i <= 10)'
    },
    {
        question: 'How does a FOR loop start?',
        option1: 'for (i = 0; i <= 5; i++)',
        option2: 'for (i <= 5; i++)',
        option3: 'for i = 1 to 5',
        option4: 'for (i = 0; i <= 5)',
        correctOption: 'for (i = 0; i <= 5; i++)'
    },
    {
        question: 'How can you add a comment in a JavaScript?',
        option1: '//This is a comment',
        option2: "'This is a comment",
        option3: '<!--This is a comment-->',
        correctOption: '//This is a comment'
    },
    {
        question: 'What is the correct way to write a JavaScript array?',
        option1: 'var colors = "red", "green", "blue"',
        option2: 'var colors = (1:"red", 2:"green", 3:"blue")',
        option3: 'var colors = 1 = ("red"), 2 = ("green"), 3 = ("blue")',
        option4: 'var colors = ["red", "green", "blue"]',
        correctOption: 'var colors = ["red", "green", "blue"]'
    },
    {
        question: 'How do you round the number 7.25, to the nearest integer?',
        option1: 'round(7.25)',
        option2: 'rnd(7.25)',
        option3: 'Math.rnd(7.25)',
        option4: 'Math.round(7.25)',
        correctOption: 'Math.round(7.25)'
    },
    {
        question: 'How do you find the number with the highest value of x and y?',
        option1: 'ceil(x, y)',
        option2: 'top(x, y)',
        option3: 'Math.ceil(x ,y)',
        option4: 'Math.max(x, y)',
        correctOption: 'Math.max(x, y)'
    },
    {
        question: 'What is the correct JavaScript syntax for opening a new window called "w2" ?',
        option1: 'w2 = window.open("http://www.w3schools.com");',
        option2: 'w2 = window.new("http://www.w3schools.com");',
        correctOption: 'w2 = window.open("http://www.w3schools.com");'
    },
    {
        question: 'JavaScript is the same as Java.',
        option1: 'True',
        option2: 'False',
        correctOption: "False"
    },
    {
        question: "How can you detect the client's browser name?",
        option1: 'client.navName',
        option2: 'browser.name',
        option3: 'navigator.appName',
        correctOption: 'navigator.appName'
    },
    {
        question: 'Which event occurs when the user clicks on an HTML element?',
        option1: 'onclick',
        option2: 'onmouseclick',
        option3: 'onchange',
        option4: 'onmouseover',
        correctOption: 'onclick'
    },
    {
        question: 'How do you declare a JavaScript variable?',
        option1: 'v carName;',
        option2: 'variable carName;',
        option3: 'var carName;',
        correctOption: 'var carName;'
    }
]

function signOutOfQuiz() {
    window.location.href = "index.html"
}

var nextBtn = document.getElementById("next-btn");

function selectedOption() {
    var answers = document.getElementsByName("answers");
    nextBtn.style.display = "block";
    for (var i = 0; i < answers.length; i++) {
        if (answers[i].checked) {
            answers[i].parentNode.classList.add('label-active');
        } else {
            answers[i].parentNode.classList.remove('label-active');
        }
    }
}

var quizSelectionArea = document.getElementById("quiz-selection-area")
var quizStartArea = document.getElementById("quiz-start-area")
var lang;
var fullScreenCheck;
function startQuiz(selected) {
    quizSelectionArea.style.display = "none";
    quizStartArea.style.display = "flex";

    if (selected === "html") {
        lang = html
    } else if (selected === "css") {
        lang = css
    } else {
        lang = js
    }
    fullScreen()
    nextQuestion()
    fullScreenCheck = setInterval(checkFullscreen, 1000);
    nextBtn.style.display = "none";
}

var index = 0;
var score = 0;
var timer;
function nextQuestion() {

    var answers = document.getElementsByName("answers");
    for (var i = 0; i < answers.length; i++) {
        if (answers[i].checked) {
            var userAnswer = lang[index - 1][`option${answers[i].value}`];
            var correctAnswer = lang[index - 1]["correctOption"];
            if (userAnswer == correctAnswer) {
                score++;
            }
        }
        answers[i].checked = false;
        answers[i].parentNode.classList.remove('label-active');
    }

    if (index > lang.length - 1) {
        // console.log("quiz finished", score)
        showResultScreen()
    } else {
        clearInterval(timer)
        startTimer();
        var quizQuestion = document.getElementById("quiz-question");
        var option_1 = document.getElementById("option-1");
        var option_2 = document.getElementById("option-2");
        var option_3 = document.getElementById("option-3");
        var option_4 = document.getElementById("option-4");

        nextBtn.style.display = "none";
        quizQuestion.innerText = `Q${index + 1}: ${lang[index].question}`
        option_1.innerText = lang[index].option1
        option_2.innerText = lang[index].option2
        option_3.innerText = lang[index].option3
        option_4.innerText = lang[index].option4

        for (var i = 0; i < answers.length; i++) {
            if (answers[i].nextSibling.nextSibling.innerText == "undefined") {
                // console.log(answers[i].nextSibling.nextSibling)
                answers[i].parentNode.style.display = "none";
            } else {
                answers[i].parentNode.style.display = "block";
            }
        }

        index += 1
    }
}

function showResultScreen() {

    clearInterval(timer)
    clearInterval(fullScreenCheck)
    exitfullscreen()
    quizSelectionArea.style.display = "flex";
    quizStartArea.style.display = "none";

    var resultModal = document.querySelector('.result-modal-bg');
    resultModal.style.display = "flex";

    var circleProgresss = document.querySelector('.circular-progress');
    var progresssValue = document.querySelector('.progress-value');

    var progressStrtValue = -1;
    var progressEndValue = (score / lang.length) * 100;

    var progress = setInterval(function () {
        progressStrtValue++;

        progresssValue.textContent = `${progressStrtValue}%`;
        circleProgresss.style.background = `conic-gradient(#8800ff ${progressStrtValue * 3.6}deg, rgba(255, 255, 255, 0.1) 0deg)`;
        if (progressStrtValue == progressEndValue) {
            clearInterval(progress);
        }
    }, 10);
}

function removeResultModal() {
    var resultModal = document.querySelector('.result-modal-bg');
    resultModal.style.display = "none";
    score = 0;
    index = 0;
}

function startTimer() {
    var min = 1;
    var sec = 0;
    var quizTimer = document.querySelector(".quiz-timer");
    quizTimer.innerText = `${min} : ${sec}`
    timer = setInterval(function () {
        quizTimer.innerText = `${min} : ${sec}`
        if (sec <= 0) {
            min--;
            sec = 59
        } else {
            sec--
        }
        if (min <= 0 && sec <= 0) {
            clearInterval(timer)
            nextQuestion()
        }
    }, 1000)
}

function checkFullscreen() {
    if (window.innerHeight !== screen.height) {
        console.log('The browser is NOT in fullscreen mode');
        showResultScreen();
    }
}

function fullScreen() {
    var doc = document.documentElement;
    if (doc.requestFullscreen) {
        doc.requestFullscreen();
    }
}

function exitfullscreen() {
    if (document.fullscreenElement || document.webkitFullscreenElement ||
        document.mozFullScreenElement || document.msFullscreenElement) {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
    }
}