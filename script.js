
const btn=document.getElementById("themeBtn");

if(localStorage.getItem("theme")==="dark"){
    document.body.classList.add("dark");
    btn.textContent="Light Mode";
}

btn.addEventListener("click",()=>{

    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){
        btn.textContent="Light Mode";
        localStorage.setItem("theme","dark");
    }else{
        btn.textContent="Dark Mode";
        localStorage.setItem("theme","light");
    }

});