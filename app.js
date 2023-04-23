
let tg = window.Telegram.WebApp;

tg.expand();
tg.MainButton.text = "Send"; //изменяем текст кнопки
tg.MainButton.setText("Send1"); //изменяем текст кнопки иначе
tg.MainButton.textColor = "#F55353"; //изменяем цвет текста кнопки
tg.MainButton.color = "#143F6B"; //изменяем цвет бэкграунда кнопки
tg.MainButton.setParams({"color": "#143F6B"}); //так изменяются все параметры

let submitBtn = document.getElementById("submitBtn");
let text =  document.getElementById("textDesc");

submitBtn.addEventListener('click', function(){ //вешаем событие на нажатие html-кнопки
    if (tg.MainButton.isVisible){ //если кнопка показана
        tg.MainButton.hide() //скрываем кнопку
    }
    else{ //иначе
        tg.MainButton.show() //показываем
    }
});

tg.WebApp.onEvent('mainButtonClicked', function(){
    
    tg.sendData(text.value);
    //при клике на основную кнопку отправляем данные в строковом виде
});
