var pontuacao = [0, 0];
var pontuacaoRodada = 0;
var jogadorAtual = 0;

var botaoLancarDado = document.querySelector("#botao-lancar-dado");
var pontuacaoRodada0 = document.querySelector("#pontuacao-rodada-0");
var pontuacaoRodada1 = document.querySelector("#pontuacao-rodada-1");
var pontuacaoGlobal0 = document.querySelector("#pontuacao-global-0");
var pontuacaoGlobal1 = document.querySelector("#pontuacao-global-1");

var pontuacoesRodadas = [pontuacaoRodada0, pontuacaoRodada1];
var pontuacoesGlobais = [pontuacaoGlobal0, pontuacaoGlobal1];

botaoLancarDado.addEventListener("click", function () {
    var dado = Math.floor(Math.random() * 6) + 1;
    if (dado == 1) {
        pontuacao[jogadorAtual] = 0;
        pontuacoesRodadas[jogadorAtual].textContent = pontuacao[jogadorAtual];
        pontuacoesGlobais[jogadorAtual].textContent = pontuacao[jogadorAtual];
        jogadorAtual = 1 - jogadorAtual;
    }
    else {
        pontuacao[jogadorAtual] += dado;
        pontuacoesGlobais[jogadorAtual].textContent = pontuacao[jogadorAtual];
        pontuacoesRodadas[jogadorAtual].textContent = dado;
    }
});

