let btn=document.querySelector("#btn");
let Ng=document.querySelector(".green-bg");
let Nb=document.querySelector(".banner");
let nf=document.querySelector(".form");
let btn2=document.querySelector("#btn2");
let inp=document.querySelector("#username");

btn.addEventListener("click",()=>{
    Ng.classList.add("new-width");
    Nb.classList.add("new-banner");
    nf.classList.add("newform");
})

btn2.addEventListener("click",()=>{
    let a= inp.value;
    alert(`Your account has been created with username : ${a}`);
})