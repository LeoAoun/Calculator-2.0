var buttonNumber = document.getElementsByClassName("number")
var buttonAction = document.getElementsByClassName("action")

buttonNumber[0].onclick = numberClick
buttonNumber[1].onclick = numberClick
buttonNumber[2].onclick = numberClick
buttonNumber[3].onclick = numberClick
buttonNumber[4].onclick = numberClick
buttonNumber[5].onclick = numberClick
buttonNumber[6].onclick = numberClick
buttonNumber[7].onclick = numberClick
buttonNumber[8].onclick = numberClick
buttonNumber[9].onclick = numberClick
buttonNumber[10].onclick = numberClick

buttonAction[0].onclick = actionClick
buttonAction[1].onclick = actionClick
buttonAction[2].onclick = actionClick
buttonAction[3].onclick = actionClick
buttonAction[4].onclick = actionClick
buttonAction[5].onclick = actionClick
buttonAction[6].onclick = actionClick
buttonAction[7].onclick = actionClick

var screenValue = ""
var oldValue = ""
var chosenAction = ""

function numberClick(event){
    var number = event.target.value
    update(`${screenValue}${number}`) 
}

function update(value){
    var screen = document.getElementById("screen")
    screenValue = value
    screen.innerHTML = screenValue
}

function actionClick(event){
    var action = event.target.value
    doAction(action)
}

function doAction(action){
    if (action === "="){
        var result

        if(chosenAction === "+"){
        result = parseFloat(oldValue) + parseFloat(screenValue)
        }
        if(chosenAction === "-"){
            result = parseFloat(oldValue) - parseFloat(screenValue)
            }
        if(chosenAction === "*"){
            result = parseFloat(oldValue) * parseFloat(screenValue)
            }
        if(chosenAction === "/"){
            result = parseFloat(oldValue) / parseFloat(screenValue)
            }
        if(chosenAction === "^"){
            result = parseFloat(oldValue) ** parseFloat(screenValue)
            }
        if(chosenAction === "√"){
            result = parseFloat(screenValue) ** (1/parseFloat(oldValue))
            }
            
        update(result)

    }else{
    oldValue = screenValue
    chosenAction = action
    update("")
    }
}