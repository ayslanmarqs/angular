var minhaVar = 'minha variável';
function minhaFuncao(x, y) {
    return x + y;
}
//ES 6
var num = 2;
var PI = 3.14;
var numeros = [1, 2, 3];
numeros.map(function (valor) {
    return valor * 2;
});
numeros.map(function (valor) { return valor * 2; });
var Matematica = (function () {
    function Matematica() {
    }
    Matematica.prototype.soma = function (x, y) {
        return x + y;
    };
    return Matematica;
}());
var n1 = 'sdfsdf';
n1 = 4;
var n2 = 'sdfsdf';
