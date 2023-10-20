let input = document.getElementById('input');
let button = document.getElementById('button');

button.addEventListener("click", () => {
    let val = input.value;

    if(val == ''){
        alert("Input can't be empty")
        input.value = ''
    }
    else if(isNaN(val) == true){
        alert("Input should be integer")
        input.value = ''
    }
    else{
        if(val % 2 == 0){
            alert("Integer is even")
        }
        else{
            alert("Integer is odd")
        }
        input.value = ''
    }
})