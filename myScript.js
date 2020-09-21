


document.getElementById("submit").addEventListener("click", 
function(){
    const num = document.getElementById("user-num").value;
    let b = 1;
    let myArray = [1];
    for (i=0; i < num-1;i++){
            let a = myArray[i] + b;
            myArray.push(a);
            b = myArray[i];
    }
    document.getElementById("displayed").innerHTML =`$ The ${num}th Fibonacci number is ${myArray[num-1]}`
    
})