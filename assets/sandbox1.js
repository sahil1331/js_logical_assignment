// let btn=document.getElementById('submit');
// btn.addEventListener('click',func);


function show(){
    let num=document.getElementById('que1').value;
    output(num);
}



function output(num){
    let html=document.querySelector('.output');
    let sum=0;
    console.log(html);
    for(i=1;i<=num;i++)
    {
       sum=sum+i; 
    }
    html.innerHTML = `<h1>Sum of numbers from 1 to ${num} :${sum}</h1>`
}