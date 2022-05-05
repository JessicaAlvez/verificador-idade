function verificar() {
    let data = new Date ()
    let ano = data.getUTCFullYear()
    let fano = document.getElementById('txtano')
    let res = document.getElementById('resultado')

    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('ERRO: Verifique os dados, e tente novamente!')
    } else {
        let fsex = document.getElementsByName('radsex')
        let idade = ano - Number(fano.value)
        let genero = ''

        let img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
            genero = 'Sexo Masculino'
            if (idade >= 0 && idade < 14) {
                //criança
                img.setAttribute('src', 'imagens/menino.png')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'imagens/homem-adulto.png')
            } else if (idade < 60) {
                //adulto
                img.setAttribute('src', 'imagens/homem-adulto.png')
            } else {
                //idoso
                img.setAttribute('src', 'imagens/idoso.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Sexo Feminino'
            if (idade >= 0 && idade < 14) {
                //criança
                img.setAttribute('src', 'imagens/menina.png')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'imagens/mulher.png')
            } else if (idade < 60) {
                //adulto
                img.setAttribute('src', 'imagens/mulher.png')
            } else {
                //idoso
                img.setAttribute('src', 'imagens/idosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `${genero} com ${idade} anos!`
        res.appendChild(img)
    }

}