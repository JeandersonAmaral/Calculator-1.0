function atualizarDisplay(btn){
    const display = document.getElementById('display')
    if(display.value.length === 9) return
    if(display.value === '0') display.value = btn.value
    else display.value += btn.value
}

function limparDisplay(){
    document.getElementById('display').value ='0'
}

var operador = '';
var valor1 = 0;
function atualizarOperacao(btn){
    const display = document.getElementById('display');
    operador = btn.value;
    valor1 = parseFloat(display.value); /* Troquei para Float para reconhecer o ponto "." */
    display.value = '0'
}

function calcularOperacao(){
    const display = document.getElementById('display');
    const valor2 = parseFloat(display.value); /* Troquei para Float para reconhecer o ponto "." */
    valor1 =  eval(valor1+operador+valor2);
    display.value = valor1;
    operador = '';
}


function deleteOperacao(){
    var resultado = document.getElementById('display').value;
    document.getElementById('display').value = resultado.slice(0, -1);
}


function manipulaTeclado(){
    if(/[0-9]/.test(event.key))
        atualizarDisplay({value:event.key});
}