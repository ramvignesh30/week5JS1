

function showdate(){
    const day= ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    let days =document.getElementById("numberOfDays").value;
    let today= new Date();
    let newDate = new Date(Date.now()+days*24*60*60*1000);
    let output="";
    output=`
    <p>Today is:  <span>${day[today.getDay()]}</span></p>
    <p>How many days to meet : <span>${days}</span> </p>
    <p>We are meeting on : <span> ${day[newDate.getDay()]} </span> </p>
    `

    document.getElementById("output").innerHTML=output;
}

let star="";
for(let i=0;i<6;i++){
    for(let j=0;j<i;j++){
        star +="*";
    }

    star += `<br>`;
}

document.getElementById("star").innerHTML=star;

let output2_2=""; 
for(let i=1; i<=1000; i++){
    if(i%5===0 && i%3===0){
        output2_2 += `<p>FizzBuzz</p>`;
    }else if(i%5===0){
        output2_2 += `<p>Fizz</p>`;
    }else if(i%3==0){
        output2_2 += `<p>Buzz </p>`;
    } else {
        output2_2 += `<p>${i}</p>`;
    }
}
document.getElementById("number").innerHTML=output2_2;