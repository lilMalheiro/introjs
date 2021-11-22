function main(){
    let btnInserir = document.getElementById('btnInserir')

    btnInserir.addEventListener('click', function(){
        fillDiv();74
    })

    let btnClear = document.getElementById('btnClear')

    btnClear.addEventListener('click', function(){
        limpar();
    })

}

function fillDiv() {
    let texto = document.getElementById('txt_input').value

    if (texto == '') { /*document.getElementById('div1').innerHTML
    `<h1> Não há texto a apresentar </h1>`*/
    alert ('Não há texto a apresentar')
    }
else {
    const styleDiv1 = document.querySelector('.div1')
    const verde = document.getElementById('verde')
    const vermelho = document.getElementById('vermelho')
   
    if(verde.checked && !vermelho.checked){
        styleDiv1.style.color = 'green'

       
    }
    else if(!verde.checked && vermelho.checked)
    {
        styleDiv1.style.color ='red'
    }
    else if(verde.checked && vermelho.checked)
    {
        styleDiv1.style.color='blue'
    }
    else{
        styleDiv1.style.color='rgb(243, 9, 173)'
    }


    


    document.getElementById('div1').innerHTML =
    `<h1>${texto}</h1>`
}

}

function limpar (){
    document.getElementById("txt_input").value = ''
    document.getElementById('div1').innerHTML = ''
}
  