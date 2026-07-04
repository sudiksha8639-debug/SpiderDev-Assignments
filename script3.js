
function calculate(){

    const marks=Number(document.getElementById("marks").value);

    const result=document.getElementById("result");

    let grade="";
    let status="";

    if(marks>=90 && marks<=100){
        grade="A";
    }
    else if(marks>=75){
        grade="B";
    }
    else if(marks>=60){
        grade="C";
    }
    else{
        grade="D";
    }

    if(marks>=60){
        status="Pass";
    }else{
        status="Fail";
    }

    result.textContent=`Grade : ${grade} | ${status}`;

}