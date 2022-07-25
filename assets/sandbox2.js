const show=function(){
    num=document.getElementById('que2').value;
    result=document.querySelector('.output');
    // console.log(num, typeof num);
    input=Number(num);
    // console.log(input,typeof input);
    if(input>0){
        calculatesum(input);
    }
    else{
        result.innerHTML = `<h1>Enter valid no</h1>`;
        // console.log('enter valid no');
    }
}

const calculatesum=function(input){

    let sum=0;
    for(i=1;i<=input;i++){
        if(i%3==0)
        {
            sum=sum+i;
        }
        else if(i%5==0){
            sum=sum+i;
        }
        else
            continue;
    
    }
    
    console.log(sum);
    result.innerHTML = `<h1>${sum}</h1>`;
    // console.log(result);
}