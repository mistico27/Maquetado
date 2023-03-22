var textMezclar = $("#txtMezclar");
var textTexto =$("#txtText");

var mensajes=['Hola team bienvenidos a christian MATRIX','Estoy en el maquetado de kodemia'];
var actual =0;

textMezclar.text(mensajes[0]);


//textMezclar.shuffleLetters();

textTexto.on("keypress",function( e ){
	if(e.keyCode==13){		
		textMezclar.shuffleLetters({
			"text":textTexto.val()
		});
	}
});


setInterval(() => {
    actual++;
    if(actual>=mensajes.length){
        actual=0;
    }

    textMezclar.shuffleLetters({
        "text":mensajes[actual]
    });

}, 4000);

