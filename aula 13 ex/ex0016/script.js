function verificar() {
    
    var n1 = document.getElementById('ini')
    var n2 = document.getElementById('fin')
    var n3 = document.getElementById('pas')
    var res = document.getElementById('res')

    if (n1.value.length == 0 || n2.value.length == 0 || n3.value.length == 0) {
        window.alert('[ERRO] Faltam dados')
    } else {
        res.innerHTML= ('contando:')
        var i = Number(n1.value)
        var f = Number(n2.value)
        var p = Number(n3.value)
        if (p <=0) {
            window.alert('Passo invalido! Considerando PASSO 1')
            p = 1
        }
        if (i < f) {
            // contagem crescente
            for(var c = i; c <= f; c+=p) {
                res.innerHTML += `\u{1F449}${c} `
            }
        } else {
            // contagem regreciva
            for(var c = i; c >= f; c-=p ){
                res.innerHTML += `\u{1F449}${c} `
            }
        }
    }
        res.innerHTML += `\u{1F3C1}`

      

}