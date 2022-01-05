function deleteMe(){
    document.querySelector('#result').value = '';
}

function calculator(newValue){
    document.querySelector('#result').value += newValue;
}

function result(){
    var a = document.querySelector('#result').value;
    var b = eval(a);
    document.querySelector('#result').value = b;
}
