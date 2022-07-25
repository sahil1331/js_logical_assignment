const output = document.querySelector('.output');


const getInput=function(){
    num=document.getElementById('que5').value;
    // console.log(num,typeof num);
    input=Number(num);
    return input;
}


const toRupee=function(){
   const dolvalue = 79.80;
   const dol=getInput();
   //console.log(dol,typeof dol);
   const rupee = dol * dolvalue;
   console.log(rupee);
   output.innerHTML = `<h1>${dol} Dollar  is ${rupee} Rupees</h1>`;
}


const toYen=function(){
    const dolvalue = 136.63;
    const dol=getInput();
    //console.log(dol,typeof dol);
    const yen = dol * dolvalue;
    console.log(yen);
    output.innerHTML = `<h1>${dol} Dollar  is ${yen} Japanese Yen</h1>`;
 }


 const toEuro=function(){
    const dolvalue = 0.98;
    const dol=getInput();
    //console.log(dol,typeof dol);
    const euro = dol * dolvalue;
    console.log(euro);
    output.innerHTML = `<h1>${dol} Dollar  is ${euro} Euros</h1>`;
 }


 const toPound=function(){
    const dolvalue = 0.83;
    const dol=getInput();
    //console.log(dol,typeof dol);
    const pound = dol * dolvalue;
    console.log(pound);
    output.innerHTML = `<h1>${dol} Dollar  is ${pound} Pound Sterling</h1>`;
 }