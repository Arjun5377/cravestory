const items = document.querySelector(".items");
const last = document.querySelector(".last");
const rightpart = document.querySelector(".rightpart");
document.querySelector(".itemtest").onclick=function(){
    func()
};

/*document.querySelector(".item1").onclick=function(){
  funcitem1()
};*/



function func() {rightpart.classList.add("hover-items");
rightpart.classList.add("move-right")
} 
