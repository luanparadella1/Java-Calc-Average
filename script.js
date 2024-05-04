let student = prompt("Digiete seu nome:")
let math = prompt("Digite sua nota em matemática:")
let port = prompt("Digite sua nota em português:")
let cien = prompt("Digite sua nota em Ciências:")

let noteMath = Number(math)
let notePort = Number(port)
let noteCien = Number(cien)

function calcAverange(noteMath, notePort, noteCien) {
  return ((noteMath + notePort + noteCien) / 3).toFixed(2)
}

let average = calcAverange(noteMath, notePort, noteCien)

if(average >= 7){
  alert(`Parabens, ${student}! sua media foi de: ${average}`)
} else if(average < 3) {
  alert(`Não foi dessa vez, ${student}! Tente novamente no proximo ano!`)
  } else{
    alert(`Estude para recuperação, ${student}! sua media foi de: ${average}`)
  }

  