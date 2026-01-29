let btn = document.querySelector('#btn');



btn.addEventListener('click',()=>{

    let output1=Number(document.querySelector('#weight').value);

    let output2=Number(document.querySelector('#height').value);

    if (output1 <= 0 || output2 <= 0) {
    document.querySelector('#result').textContent = "Enter valid values";
    return;
    }
    
    let calculate=output1/(output2*output2);
    
    let res = document.querySelector('#result').textContent = calculate.toFixed(2);
    
    
    console.log(res);
})