 const start_btn = document.querySelector(".start_btn button");
 const info_box = document.querySelector(".info-box");
 const exit_btn = document.querySelector(".buttons .Quit");
 const continue_btn = document.querySelector(".buttons .restart");
 const quiz_box = document.querySelector(".quiz_box");
 const timeCount = quiz_box.querySelector(".timer .timer_sec");
 const timeLine = quiz_box.querySelector("header .time_line");


 const option_list = document.querySelector(".option_list");

// if start quiz button clicked
start_btn.onclick = ()=> {
    info_box.classList.add("activeInfo");  // show the info box  
}
// if exit button clicked
exit_btn.onclick = ()=> {
    info_box.classList.remove("activeInfo"); //   hide the info box
}

// if continue button clicked
continue_btn.onclick = ()=> {
    info_box.classList.remove("activeInfo"); //   hide the info box
    quiz_box.classList.add("activeQuiz"); //   show the quiz box
    showQuestion(0);
    queCounter(1);
    startTimer(15);
    stratTimerLine(0);
}


let que_count = 0;
let que_numb = 1;
let counter;
let timeValue = 15;
let widthValue = 0;

const next_btn = quiz_box.querySelector(".next_btn");
const result_box = document.querySelector(".result_box");
const restart_quiz = result_box.querySelector(".buttons .restart");
const quit_quiz = result_box.querySelector(".buttons .Quit");

// if next button clicked
next_btn.onclick = ()=> {
  if (que_count < questions.length - 1) {
    que_count++;
    que_numb++;
    showQuestion(que_count);
    queCounter(que_numb);
    clearInterval(counter);
    startTimer(timeValue);
    clearInterval(counterLine);
    stratTimerLine(widthValue);
    next_btn.style.display = "none";
  }else{
      console.log("completed");
      showResultBox();
  }
}

// getting question and option from array
function showQuestion(index){
    const que_text = document.querySelector(".que_text");
    const option_list = document.querySelector(".option_list");
    let que_tag = '<span>'+ questions[index].numb + ". "+ questions[index].question +'</span>';
    let option_tag =  '<div class="option">'+ questions[index].options[0] +'<span></span></div>'
    + '<div class="option">'+ questions[index].options[1] +'<span></span></div>'
    + '<div class="option">'+ questions[index].options[2] +'<span></span></div>'
    + '<div class="option">'+ questions[index].options[3] +'<span></span></div>'
    +'<div class="option">'+ questions[index].options[4] +'<span></span></div>';
    que_text.innerHTML = que_tag; //   When clicked continue button then it shows up
    option_list.innerHTML = option_tag; //   When clicked continue button then it also shows up
    const option = option_list.querySelectorAll(".option");
    for(let i = 0; i < option.length; i++) {
        option[i].setAttribute("onclick", "optionSelected(this)");
    }
}

let tickIcon = '<div class="icon tick"><i class="material-icons">check</i>';
let crossIcon = '<div class="icon cross"><i class="material-icons">clear</i>';

function optionSelected(answer){
    clearInterval(counter);
    clearInterval(counterLine);
    let userAns = answer.textContent;
    let correctAns = questions[que_count].answer;
    let allOptions = option_list.children.length;
    if (userAns == correctAns){
        answer.classList.add("correct");
        console.log("right");
        answer.insertAdjacentHTML ("beforeend", tickIcon);
    }else{
        answer.classList.add("incorrect");
        console.log("wromg");
        answer.insertAdjacentHTML ("beforeend", crossIcon);
        
        // if answert is incorrect then autometically selected the correct answer
        for (let i = 0; i < allOptions; i++) {
           if(option_list.children[i].textContent == correctAns){
            option_list.children[i].setAttribute("class", "option correct");
            option_list.children[i].insertAdjacentHTML ("beforeend", tickIcon);
           }
            
        }
    }
    // if user clicked one option then disabled all other options
    for (let i = 0; i < allOptions; i++) {
        option_list.children[i].classList.add("disabled");
    }
    next_btn.style.display = "block";
}

function showResultBox(){
    info_box.classList.remove("activeInfo"); //   hide the info box
    quiz_box.classList.remove("activeQuiz"); //   hide the quiz box
    result_box.classList.add("activeResult"); //   show the result box
}

function startTimer(time) {
    counter = setInterval(timer, 1000);
    function timer(){
        timeCount.textContent = time;
        time--;
        if(time < 9) {
            let addZero = timeCount.textContent;
            timeCount.textContent = "0" + addZero;
        }
        if (time < 0){
            clearInterval(counter);
            timeCount.textContent = "00";
        }
    }
}

function stratTimerLine(time) {
    counterLine = setInterval(timer, 29);
    function timer(){
        time += 1;
        timeLine.style.width = time + "px";
        if(time > 549){
            clearInterval(counterLine);
        }
    }
}



// For question total and corent number
function queCounter(index){
    const bottom_ques_counter = quiz_box.querySelector(".total_que");
    let totalQuesCountTag = '<span><p>'+ index +'</p>of<p>' + questions.length +'</p>Question</span>';
    bottom_ques_counter.innerHTML = totalQuesCountTag;
 
}