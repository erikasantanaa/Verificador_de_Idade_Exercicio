/*function verificar() {
    window.alert('FUNCIONOU!')
} (para fazer um teste*/

function verificar() {
    var data = new Date() //pegar a data atual.
    var ano = data.getFullYear() //pegar o ano em 4 digitos.
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
       var fsex = document.getElementsByName('radsex')
       var idade = ano - Number(fano.value)
       var gênero = ''
       var img = document.createElement('img')
       img.setAttribute('id', 'foto')
       if (fsex[0].checked) {
           gênero = 'Homem'
           if (idade >= 0 && idade < 10) {
            //criança
            img.setAttribute('src', 'foto-bebe-m.png')
           } else if (idade < 21) {
            //jovem
            img.setAttribute('src', 'foto-jovem-m.png')
           } else if (idade < 50) {
               //adulto
               img.setAttribute('src', 'foto-adulto-m.png')
           } else {
               //idoso
               img.setAttribute('src', 'foto-idoso-m.png')
           }
       } else if (fsex[1].checked) {
           gênero = 'Feminino'
           if (idade >= 0 && idade < 10) {
            //criança
            img.setAttribute('src', 'foto-bebe-f.png')
           } else if (idade < 21) {
            //jovem
            img.setAttribute('src', 'foto-jovem-f.png')
           } else if (idade < 50) {
               //adulto
               img.setAttribute('src', 'foto-adulto-f.png')
           } else {
               //idoso
               img.setAttribute('src', 'foto-idoso-f.png')
           }
           
       }
       res.style.textAlign = 'center'
       res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
       res.appendChild(img)
    }


}