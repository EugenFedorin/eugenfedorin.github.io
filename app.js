let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.textColor = "#FFFFFF";
tg.MainButton.color = "2cab37";

let item = "";
let textareaElement = document.getElementsByName('textdesc')[0];
let form = document.getElementById("form");

let submitBtn = document.getElementById("submitBtn");


submitBtn.addEventListener("click", function (){
    item = textareaElement.value;
    tg.MainButton.setText("Відправити...")
    tg.MainButton.show();
})


form.addEventListener("click", function (){

    item = textareaElement.value;

});

Telegram.WebApp.onEvent("mainButtonClicked", function (){
    tg.sendData(item);
});

// textareaElement = `${tg.initDataUnsafe.text}`
