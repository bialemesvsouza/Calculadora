function op(valor){
    document.getElementById('inputA').value += valor;
}

function limpar(){
    document.getElementById('inputA').value = " ";
}

function calcular(){
    let resultado = eval (document.getElementById('inputA').value);
    // eval() é uma função que calcula a expressão matemática
    document.getElementById('inputA').value = resultado;

}

