let num = [5, 8, 4, 6]
num.push(1)
num.sort()
console.log(num)
console.log(`Nosso vetor tem ${num.length} posicoes`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
let pos = num.indexOf(2)
if (pos == -01) {
    console.log('O valor não foi encontrado')
}else {
    console.log(`O valor está na pocição ${pos}`)
}