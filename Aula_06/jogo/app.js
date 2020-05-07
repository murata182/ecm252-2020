var pontuacao = [0, 0];
var pontuacaoRodada = 0;
var jogadorAtual = 0;

var botaoLancarDado = document.querySelector("#botao-lancar-dado");
var botaoPassarVez = document.querySelector("#botao-passar-vez");
var botaoNovoJogo = document.querySelector("#botao-novo-jogo");
var pontuacaoRodada0 = document.querySelector("#pontuacao-rodada-0");
var pontuacaoRodada1 = document.querySelector("#pontuacao-rodada-1");
var pontuacaoGlobal0 = document.querySelector("#pontuacao-global-0");
var pontuacaoGlobal1 = document.querySelector("#pontuacao-global-1");

var pontuacoesRodadas = [pontuacaoRodada0, pontuacaoRodada1];
var pontuacoesGlobais = [pontuacaoGlobal0, pontuacaoGlobal1];

function novoJogo() {
    pontuacao = [0, 0];
    pontuacoesRodadas[0].textContent = 0;
    pontuacoesRodadas[1].textContent = 0;
    pontuacoesGlobais[0].textContent = 0;
    pontuacoesGlobais[1].textContent = 0;

    var novoJogador = Math.round(Math.random());
    jogadorAtual = novoJogador;
}

function mostrarVencedor() {
    var vencedor = ""
    $("#myModal").on("show.bs.modal", function (event) {
        vencedor = "O jogador " + (jogadorAtual + 1) + " venceu!";
        $(this).find(".modal-title").text(vencedor);
    })
    $("#myModal").modal('show');
}

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
        if (pontuacao[jogadorAtual] >= 100) {
            mostrarVencedor();
            novoJogo();
        }
    }
});

botaoPassarVez.addEventListener("click", function () {
    jogadorAtual = 1 - jogadorAtual;
});

botaoNovoJogo.addEventListener("click", function () {
    novoJogo();
});