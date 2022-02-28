 const start_btn = document.querySelector(".start_btn button");
 const info_box = document.querySelector(".info-box");
 const exit_btn = document.querySelector(".buttons .Quit");
 const continue_btn = document.querySelector(".buttons .restart");
 const quiz_box = document.querySelector(".quiz_box");

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
    showQuestion();
}

let que_count = 0;

// getting question and option from array
function showQuestion(){
    const que_text = document.querySelector(".que_text");
    let que_tag = '<span>'+ questions[4].question +'</span>';
    que_text.innerHTML = que_tag; //   When clicked continue button then it shows up
}