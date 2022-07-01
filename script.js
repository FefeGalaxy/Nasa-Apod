window.addEventListener(`load`, obtenerDatos);

function obtenerDatos(){
    const nasa_api = `hiAHWMsbqbNTp32ozXUC5eJcvzGIffwUVzJOO9wC`; 
    const ruta = `https://api.nasa.gov/planetary/apod?api_key=${nasa_api}`;

    fetch(ruta)
    .then(respuesta => respuesta.json())
    .then(resultado => mostrarDatos(resultado))
}

function mostrarDatos({date, explanation, media_type, title, url}){

    const titulo = document.querySelector(`#titulo`);
    titulo.innerHTML = title;
    const fecha = document.querySelector(`#fecha`);
    fecha.innerHTML = date;
    const multimedia = document.querySelector(`#c_multimedia`);
    if(media_type == `video`){
        multimedia.innerHTML = `<video src="${url}" width="100%" height="400px" ></video>`
    }else{
        multimedia.innerHTML = `<img src="${url}" width="100%" height="400px">`
    }
    const descripcion = document.querySelector(`#descripcion`);
    descripcion.innerHTML = explanation;

}