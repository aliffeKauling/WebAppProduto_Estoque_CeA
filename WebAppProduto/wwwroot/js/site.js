// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

function getComboA(selectObject) {
    var value = selectObject.value;
    window.location.replace("https://localhost:44310/Produtos/Movimentacao?id=" + value);
}

function urli() {


    var urli = "https://localhost:44310/Produtos/Edit?id=" + value;
    return urli;
}

    $(function () {
        $(".details").click(function () {
            var id = $(this).attr("data-id");
            $("#modal").load("Produtos/Detail?id=" + id, function () {
                $("#modal").modal();
            })
        });
    })

$(function () {
    $(".movimentar").click(function () {
        $("#modal-movimentar").load("Produtos/Movimentar", function () {
            $("#modal-movimentar").modal();
        })
    });
})

function getComboB(selectObject) {
    var value = selectObject.value;
}

function calcula() {
    var tipoMovimentacao = document.getElementById("comboB");

    if (tipoMovimentacao.value == 1) {

        MovimentarEntrada()
    } else {
        MovimentarSaida()
    }

}

function MovimentarEntrada() {
    var novaquantidade = document.getElementById("novaquantidade");
    document.getElementById('resultado').value = parseInt(resultado.value) + parseInt(novaquantidade.value);
}

function MovimentarSaida() {
    var novaquantidade = document.getElementById("novaquantidade");
    document.getElementById('resultado').value = parseInt(resultado.value) - parseInt(novaquantidade.value);
}

