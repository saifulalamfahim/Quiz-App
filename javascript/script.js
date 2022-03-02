 const start_btn = document.querySelector(".start_btn button");
 const info_box = document.querySelector(".info-box");
 const exit_btn = document.querySelector(".buttons .Quit");
 const continue_btn = document.querySelector(".buttons .restart");
 const quiz_box = document.querySelector(".quiz_box");

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
}

let que_count = 0;
let que_numb = 1;

const next_btn = quiz_box.querySelector(".next_btn");

// if next button clicked
next_btn.onclick = ()=> {
  if (que_count < questions.length - 1) {
    que_count++;
    que_numb++;
    showQuestion(que_count);
    queCounter(que_numb);
  }else{
      console.log("completed");
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

function optionSelected(answer){
    let userAns = answer.textContent;
    let correctAns = questions[que_count].answer;
    let allOptions = option_list.children.length;
    if (userAns == correctAns){
        answer.classList.add("correct");
        console.log("right");
    }else{
        answer.classList.add("incorrect");
        console.log("wromg");
        
        // if answert is incorrect then autometically selected the correct answer
        for (let i = 0; i < allOptions; i++) {
           if(option_list.children[i].textContent == correctAns){
            option_list.children[i].setAttribute("class", "option correct");
           }
            
        }
    }
    // if user clicked one option then disabled all other options
    for (let i = 0; i < allOptions; i++) {
        option_list.children[i].classList.add("disabled");
    }
}



// For question total and corent number
function queCounter(index){
    const bottom_ques_counter = quiz_box.querySelector(".total_que");
    let totalQuesCountTag = '<span><p>'+ index +'</p>of<p>' + questions.length +'</p>Question</span>';
    bottom_ques_counter.innerHTML = totalQuesCountTag;

}