
const count=document.getElementById("count");

const inc=document.getElementById("inc");
const dec=document.getElementById("dec");
const reset=document.getElementById("reset");

let value=0;

inc.addEventListener("click",()=>{

    value++;
    count.textContent=value;

});

dec.addEventListener("click",()=>{

    if(value>0){
        value--;
    }

    count.textContent=value;

});

reset.addEventListener("click",()=>{

    value=0;
    count.textContent=value;

});