function textToNumber(name){
    word = document.getElementById(name).value;
    numberValue = parseFloat(word);
    document.getElementById(name).value = '';
    if(isNaN(numberValue)){
        console.log('Enter a Number value only')
    }
    else{
        return numberValue
    }
}

function valueUpdate(id,value){
    document.getElementById(id).innerText = value;
}

document.getElementById('calculate').addEventListener('click',function(){
    income = textToNumber('income');
    food = textToNumber('food');
    rent = textToNumber('rent');
    cloths = textToNumber('cloths');
    expense = food + rent + cloths;
    valueUpdate('total-expense',expense);
    balance = income - expense;
    valueUpdate('net-balance',balance);
})