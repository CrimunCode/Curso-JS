// Tres formas de usar delegación de servivios y asi evitar la propagación de eventos sin usar el método stopPropagation()


// const container = document.querySelector(".container")

// en ves de escuchar los eventos del container, tambien se puede escuchar todo el DOM
// container.addEventListener("click", (e) => {
document.addEventListener("click", (e) => {
    // console.log(e.target.id)

    if (e.target.id === "padre") {
        console.log("Diste click al Padre")
    }

    // console.log(e.target.matches(".border-secondary"))

    if (e.target.matches(".border-secondary")){
        console.log("Diste click al Hijo")
    }

    // console.log(e.target.dataset.div)

    if(e.target.dataset.div === "divNieto"){
        console.log("Diste click al Nieto")
    }
    
})