const show=function(){
    num=document.getElementById('que4').value;
    output=document.querySelector('.output');
    console.log(num);
    leapyears(num);
}


const leapyears=function(num){
    let currentyear=2024;

    for(i=1;i<=num;){
        if(currentyear%400==0 || currentyear%4==0 && currentyear%100 !=0){
            console.log(currentyear +  'year is leap year');
            output.innerHTML += `<h1>${currentyear} is leap year </h1>`
            currentyear = currentyear +1;
            i++
        }
        else{
            console.log(currentyear + ' year is not leap year');
            // output.innerHTML = `<h1>${currentyear} is not leap year </h1>`
            currentyear = currentyear +1;
        }
    }

}