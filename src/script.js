const select = document.querySelectorAll(".select");
const list = document.querySelector(".list");
const list2 = document.querySelector(".list2");

const selectText = document.querySelector(".selectText");
const selectText2 = document.querySelector(".selectText2");

const options = document.querySelectorAll(".option");
const options2 = document.querySelectorAll(".option2");

const arrowDown = document.querySelector(".arrow-down");
const arrowDown2 = document.querySelector(".arrow-down2");

const checkBox = document.querySelectorAll("input[type='checkbox']");
const taskText = document.querySelectorAll(".task-text");

let isChecked = false;
for(let i = 0; i < checkBox.length; i++){
  checkBox[i].addEventListener("click", function(e){
    if(!e.target.checked){
      taskText[i].classList.remove("active");      
    }else{
      taskText[i].classList.add("active");
    }
  });
}


for(let i = 0; i < select.length; i++){
  select[i].addEventListener("click", function(e){
    if(i == 0){
      console.log(":cliked1")
     list.classList.toggle("selectBx-active");
      // arrowDown.style.display = "block";
     arrowDown.classList.toggle("activate");
    }else{
      console.log("cliked");
        list2.classList.toggle("selectBx-active2");
      // arrowDown.style.display = "block";
       arrowDown2.classList.toggle("activate2");
    }
     
  });
}


for(option of options){
  option.addEventListener("click", function(e){
    selectText.innerHTML = e.target.textContent;                         list.classList.toggle("selectBx-active");
  });
}

for(option2 of options2){
  option2.addEventListener("click", function(e){
    selectText2.innerHTML = e.target.textContent;     list2.classList.toggle("selectBx-active2");
  });
}
