let contador = 0
let resultado = document.querySelector ('section#resultado')
function contar() {
        contador ++
        resultado.innerHTML = `<p>O contador esta com  <mark>${contador}</mark> CLIQUES.</p>`
} 
function zerar() {
    contador = 0
    resultado.innerHTML = `<p>O contador esta com  <mark>${contador}</mark> CLIQUES.</p>`
}
    