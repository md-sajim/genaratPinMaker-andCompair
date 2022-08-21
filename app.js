function genaratPin() {
    const rendomNum = Math.round(Math.random() * 10000);
    return rendomNum;
}
function getPin() {
    const pin = genaratPin()
    const pinString = pin + ""
    if (pinString.length === 4) {
        return pin;
    }
    else {
        return getPin()
    }

}


document.getElementById('genarate-btn').addEventListener('click', function () {

    const getPinDigtes = getPin()
    const displayFile = document.getElementById("input-display");
    displayFile.value = getPinDigtes;
})
document.getElementById('calc-body').addEventListener('click', function (event) {
    const number = event.target.innerText;
    const displayFileCal = document.getElementById('displayFild-chack')
    const prevaseValue = displayFileCal.value
    if (isNaN(number)) {
        if (number === 'C') {
            displayFileCal.value = "";
        }
        else if (number === '<') {
            const digits = prevaseValue.split('');
            digits.pop()
            const reminingDigits = digits.join('')
            displayFileCal.value = reminingDigits;
        }
    }
    else {
        const prevaseNumAdd = prevaseValue + number
        displayFileCal.value = prevaseNumAdd;
    }

})
document.getElementById('submit-btn').addEventListener('click',function(){
    const genaratePinId = document.getElementById("input-display")
const genaratInnerValue = genaratePinId.value;
const typeNumber = document.getElementById('displayFild-chack');
const chackFild = typeNumber.value;
const successMassige = document.getElementById('success');
const failYourMassige = document.getElementById('failYour')
if(genaratInnerValue === chackFild){
    successMassige.style.display = "block";
    failYourMassige.style.display = "none";
}
else{
    failYourMassige.style.display = "block";
    successMassige.style.display = "none"
}
})