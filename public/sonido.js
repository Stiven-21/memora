function cargar(){
    const sonidos = document.getElementById("sonidos");
    document.addEventListener('load', function(evento){
        if(evento.keyCode == 32)
        {
            sonidos.innerHTML = '<audio src="fondo.mp3" controls></audio>'
        }
    })
}