let form=document.querySelector('form');
form.addEventListener('submit',function(e) {
    e.preventDefault();
    let height=parseInt(document.querySelector('#height').value);
    let weight=parseInt(document.querySelector('#weight').value);
    let result=document.querySelector('#result')
    if((height===' ')||(height<0)||isNaN(height)){
        result.innerHTML="please enter correct height";
    }
    else if((weight===' ')||(weight<0)||isNaN(weight)){
        result.innerHTML="please enter correct weight";
    }
    else {
         let bmi=(weight/((height*height)/10000));
       
       if(bmi<18){
        result.innerHTML=`<p>${Math.round(bmi)},under</p>`;
       result.style.backgroundColor = 'yellow';
     
      
       }
      else if(bmi<25){
        result.innerHTML=`<p>${Math.round(bmi)},normal</p>`;
        result.style.backgroundColor = 'green';
       }
       else {
        result.innerHTML=`<p>${Math.round(bmi)},over</p>`;
        result.style.backgroundColor = 'red';
       
       }
    }
})