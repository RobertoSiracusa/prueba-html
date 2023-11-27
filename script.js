let contenedor = document.querySelector('#tracklist')
axios.get('https://leonardoapi.onrender.com/music')
.then(
    //callback
    (response)=>{
        let canciones= response.data
        canciones.map((cancion)=> {
            let component=document.createElement('div')
            component.classList.add('menuLateralCancion')
            component.innerHTML= `
            <img class="imagenCancionLateral"src="${cancion.path.front}">
                        <div class="infoCancion1">
                            <p class="nombreInfoCancion">${cancion.title}</p>
                            <p class="autorInfoCancion">${cancion.author}</p>
                        </div>
            
            `
            component.addEventListener('click',()=>{
                console.log(`Se hizo click en ${cancion.title}`)
                document.querySelector('#controlPlayer').setAttribute("src",cancion.path.audio)
            })
            contenedor.appendChild(component)
        })










    }
)


                        