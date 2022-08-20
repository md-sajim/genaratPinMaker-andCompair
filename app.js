function genaratPin(){
    const rendomNum = Math.round(Math.random()*10000);
    return rendomNum;
}
function getPin(){
    const pin = genaratPin()
    const pinString = pin+""
    if(pinString.length === 4){
        return pin;
    }
    else{
       return getPin()
    }
     
}


document.getElementById('genarate-btn').addEventListener('click',function(){
    
   const getPinDigtes = getPin()
const displayFile = document.getElementById("input-display");
displayFile.value = getPinDigtes;
})
