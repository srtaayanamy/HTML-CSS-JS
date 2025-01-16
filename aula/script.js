function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('img')
    var data = new Date()
    var hora = data.getHours()

    msg.innerHTML = `Agora estamos funcionando, são: ${hora} horas`
    if (hora >= 0 && hora < 12){
        img.src = 'Imagens/dia.png'
        document.body.style.background = 'rgb(227, 198, 250)'
    }
    else if (hora >= 12 && hora <= 18) {
        img.src = 'Imagens/tarde.jpg'
        document.body.style.background = 'rgba(187, 115, 7, 0.5)'
    }
    else {
        img.src = 'Imagens/noite.jpg'
        document.body.style.background = 'rgba(90, 121, 243, 0.5)'
    }
}