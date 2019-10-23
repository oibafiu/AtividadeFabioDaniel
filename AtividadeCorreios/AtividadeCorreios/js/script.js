$(document).ready(function () {
    $('input[name="consultar"]').click(function () {
        var codigo = $('input[name="codigo"]').val();
        var senha = $('input[name="senha"]').val();
        var servicos = $('input[name="servicos"]').val();
        var ceporigem = $('input[name="ceporigem"]').val();
        var cepdestino = $('input[name="cepdestino"]').val();
        var peso = $('input[name="peso"]').val();
        var comprimento = $('input[name="comprimento"]').val();
        var altura = $('input[name="altura"]').val();
        var largura = $('input[name="largura"]').val();
        var maopropria = $('input[name="maopropria"]').val();
        var valordeclarado = $('input[name="valordeclarado"]').val();
        var avisorecebimento = $('input[name="avisorecebimento"]').val();

        $.get("http://usysweb.com.br/api/correiosambev.php?" + codigo + senha + servicos + ceporigem +
            cepdestino + peso + comprimento + altura + largura + maopropria + valordeclarado + avisorecebimento, function (data) {

            }

            $('input')


        )
    });


});