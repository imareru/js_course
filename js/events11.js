
var counter = 0;

function onClickButton(element){
    // alert("here!!!");
    counter++;
    element.innerHTML = "You clicked " + counter;
    // console.log(element.value);
    element.style.background = "green";
    element.style.color = "blue"

    //анулирует предыдущие свойства
    element.style.cssText = "border-radius: 5px; font-size: 20px; border-color: green";
}

function onInput(el){
    if(el.value == "Hello!")
    alert("you too")
    // console.log(el.value);
}