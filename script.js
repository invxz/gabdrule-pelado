let listaPalavra = [
    "RODRIGO FARO", 
    "PENE MOLI",
    "ratatouille BLACK",
    "FUCK DABABY",
    "mario majestoso",
    "Chinês",
    "caca raibero is foda",
    "gabdrule pelado",
    "coc",
    "gabdrulers"
]

const btn = document.querySelector('#show');
const body = document.querySelector('body');

btn.addEventListener('click', () => {
    let numeroAlexandre = Math.floor(Math.random() * listaPalavra.length)
    let h1 = document.querySelector('h1')
    h1.innerHTML = listaPalavra[numeroAlexandre]
    btn.classList.toggle("some")
    h1.classList.toggle("some")
    
    setTimeout(()=>{
        h1.classList.toggle("animacao")
        // numeroAlexandre = Math.floor(Math.random() * listaPalavra.length)
        // h1.innerHTML = listaPalavra[numeroAlexandre]
        h1.classList.toggle("some")
        btn.classList.toggle("some")
    },5000)
})

