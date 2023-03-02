function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
    }if (fsex[0].checked) {
            genero = 'Homem'
            if(idade >=0 && idade <10){
                    //Criança
                    img.setAttribute('src', 'hbebe.png')
            }else if (idade < 21) {
                //Joven
                    img.setAttribute('src', 'hjovem.png')
            }else if (idade < 50){
                //Adilto
                img.setAttribute('src', 'hadulto.jpg')
            }else {
                //idoso
                img.setAttribute('src', 'hvelho.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if(idade >=0 && idade <10){
                    //Criança
                    img.setAttribute('src', 'mbebe.png')
            }else if (idade < 21) {
                //Joven
                img.setAttribute('src', 'mjovem.jpg')
            }else if (idade < 50){
                //Adilto
                img.setAttribute('src', 'madulto.jpg')
            }else {
                //idoso
                img.setAttribute('src', 'mvelho.jpg')
            }
        }
        res.style.textAlign ='center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }