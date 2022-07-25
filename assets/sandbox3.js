const show=function(){
    num=document.getElementById('que3').value;
    output=document.querySelector('.output');
    input=Number(num);
    console.log(input,typeof input);
    parity(input);
}


const parity=function(){
    let result='';
    if(input%2==0){
        output.innerHTML = `<h1>no is even</h1>`
    }
    else{
        output.innerHTML = `<h1>no is odd</h1>`
    }
}