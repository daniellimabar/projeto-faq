function acao1(){
    let duvida1 = window.document.getElementById('quest1')
    let resp = window.document.getElementsByClassName('resp')[0]
    let icon = window.document.getElementsByClassName('icon')[0]
    
    if(resp.style.display == 'none'){
        icon.src = 'assets/images/icon-minus.svg'
        resp.style.display = 'block'
    } else{
        icon.src = 'assets/images/icon-plus.svg'
        resp.style.display = 'none'
    }  
} 

function acao2(){
    let duvida2 = window.document.getElementById('quest2')
    let resp = window.document.getElementsByClassName('resp')[1]
    let icon = window.document.getElementsByClassName('icon')[1]

    if(resp.style.display == 'none'){
        icon.src = 'assets/images/icon-minus.svg'
        resp.style.display = 'block'
    } else{
        icon.src = 'assets/images/icon-plus.svg'
        resp.style.display = 'none'
    }
}

function acao3(){
    let duvida3 = window.document.getElementById('quest3')
    let resp = window.document.getElementsByClassName('resp')[2]
    let icon = window.document.getElementsByClassName('icon')[2]

    if(resp.style.display == 'none'){
        icon.src = 'assets/images/icon-minus.svg'
        resp.style.display = 'block'
    } else{
        icon.src = 'assets/images/icon-plus.svg'
        resp.style.display = 'none'
    }
}

function acao4(){
    let duvida4 = window.document.getElementById('quest4')
    let resp = window.document.getElementsByClassName('resp')[3]
    let icon = window.document.getElementsByClassName('icon')[3]

    if(resp.style.display == 'none'){
        icon.src = 'assets/images/icon-minus.svg'
        resp.style.display = 'block'
    } else{
        icon.src = 'assets/images/icon-plus.svg'
        resp.style.display = 'none'
    }
}