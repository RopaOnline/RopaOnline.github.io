const x = document.querySelectorAll('.ig')
const y = document.querySelector('.agi');
const a = document.querySelector('.iml')

x.forEach(imagen => {
    imagen.addEventListener('click',()=>{
        aparecerImagen(imagen.getAttribute('src'));
    })
});
a.addEventListener('click',(e)=>{
    if(e.target !== y){
        a.classList.toggle('apa')
        y.classList.toggle('si')
    }
})
const aparecerImagen = (imagen)=>{
    y.src = imagen;
    a.classList.toggle('apa')
    y.classList.toggle('si')
}
