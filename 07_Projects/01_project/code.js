let btn=document.getElementById("btn");

btn.addEventListener("submit",function(e){
    let height = document.getElementById("height").value;
    let weight = document.getElementById("weight").value;
    let result = document.getElementById("id");
    
    let bmi = (weight / ((height * height) / 10000)).toFixed(2);

    result.innerHTML = bmi;
})