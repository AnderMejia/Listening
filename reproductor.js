const audio = document.querySelector('audio');
longitudCancion = document.getElementById('longitudCancion');
tiempoCancion = document.getElementById('tiempoCancion');

const calcularTiempo = (seg) =>{
    const minutos = Math.floor(seg / 60),
    segundos = Math.floor(seg % 60),
    retornarsegundos = segundos < 10 ? `0${segundos}` : `${segundos}`;
    return `${minutos}:${retornarsegundos}`;
}

const duracion = ()=>{
    longitudCancion.innerHTML = calcularTiempo(audio.duration);
}

if (audio.readyState > 0){
    duracion();
    tiempoCancion.innerHTML = calcularTiempo(audio.currentTime);
}else{
    audio.addEventListener('loadedmetadata', ()=>{
        duracion();
    })
}

audio.ontimeupdate = function(){
    tiempoCancion.innerHTML = calcularTiempo(audio.currentTime);
    setProgress();
}

function setProgress(){
    let porcentage = (audio.currentTime / audio.duration) * 100;
    document.querySelector('.progreso').style.width = porcentage + '%';
}

//controles del audio
const playPausa = document.getElementById('btnplay');
ret10 = document.getElementById('ret10');
adel10 = document.getElementById('adel10');

playPausa.addEventListener('click',()=>{
    if(audio.paused){
        playPausa.src = './img/imagepausa.png';
        audio.play();
    }else if(audio.played){
        playPausa.src='./img/play.png'
        audio.pause();
    }
})

adel10.addEventListener('click',()=>{
    audio.currentTime +=10;
})

ret10.addEventListener('click',()=>{
    audio.currentTime -=10;
})
