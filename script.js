function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()
    msg.innerHTML = `Agora são ${hora} horas e ${minutos} minutos`
    if (hora >= 0 && hora < 12) {
        img.src = 'manha.jpg'
        document.body.style.background = '#AFDCC5'
    }else if (hora >=12 && hora < 18) {
        img.src = 'tarde.jpg'
        document.body.style.background = '#F6923C'
    }else {
        img.src = 'noite.jpg'
        document.body.style.backgroundColor = '#547C84'
    }

}