let num = [5, 8, 4, 6]
num.push(1)
num.sort()
console.log(num)
console.log(`Nosso vetor tem ${num.length} posicoes`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
/*
for(let pos=0; pos < num.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}*/

for (let pos in num) {  // Para  cada posição na variavel compasta
    console.log(`A pocição ${pos} tem valor ${num[pos]}`)
}