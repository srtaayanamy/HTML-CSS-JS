function mostrarDados() {
    var data = new Date();
    var anoAtual = data.getFullYear();
    var datNasc = document.getElementById('datNasc').value;
    var anoNascimento = new Date(datNasc).getFullYear();
    var res = document.getElementById('res');
    if (datNasc == '' || anoNascimento > anoAtual) {
        window.alert('[ERRO] Verifique os dados.');
    }
    var idade = anoAtual - anoNascimento;
    var generoElems = document.getElementsByName('sexo');
    var genero = '';
    if (generoElems[0].checked) {
        genero = 'homem';
    } else if (generoElems[1].checked) {
        genero = 'mulher';
    }
    res.style.textAlign = 'center';
    document.getElementById('sexo').textContent = genero;
    document.getElementById('idade').textContent = idade;
}
