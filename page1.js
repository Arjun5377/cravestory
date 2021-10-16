const left = document.querySelector(".left");
const right = document.querySelector(".right");
const container = document.querySelector(".container");
const last = document.querySelector(".last");
const rightpart = document.querySelector(".rightpart");
const close = document.querySelector(".close");
document.querySelector(".menubutton").onclick=function(){
    func()
};
document.querySelector(".button").onclick=function(){
  funcitem1()
};
document.querySelector(".button1").onclick=function(){
  funcitem2()
};
document.querySelector(".button2").onclick=function(){
  funcitem3()
};

document.querySelector(".button3").onclick=function(){
  funcitem3()
};
document.querySelector(".item1").onclick=function(){
funcitem1()
};
function func() {container.classList.add("hover-left");
container.classList.add("move-right")
} 
function funcclose() {close.classList.add("hover-right");
container.classList.add("move-right")
} 

function funcitem1() {rightpart.classList.add("hover-items");}
function funcitem2() {rightpart.classList.add("hover-items");}
function funcitem3() {rightpart.classList.add("hover-items");}






right.addEventListener("click", () => {
  close.classList.remove("hover-left");
});

/*right.addEventListener("mouseenter", () => {
  container.classList.add("hover-right");
});

right.addEventListener("mouseleave", () => {
  container.classList.remove("hover-right");
});*/