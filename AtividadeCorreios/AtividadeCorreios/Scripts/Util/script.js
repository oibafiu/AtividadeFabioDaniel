$(document).ready(function () {
    //PEGAR A INFORMAÇÃO DO BOTÃO E ENVIAR OS DADOS PARA A URL
    $('input[name="consultar"]').click(function () {
        //VARIAVEIS QUE VAMOS PEGAR DO INDEX

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

        var url2 = "http://usysweb.com.br/api/correiosambev.php?" + "nCdEmpresa=" + codigo + "&sDsSenha=" + senha + "&sCepOrigem=" + ceporigem + "&sCepDestino=" + cepdestino + "&nVlPeso=" + peso + "&nCdFormato=0" + "&nVlComprimento=" + comprimento + "&nVlAltura=" + altura + "&nVlLargura=" + largura + "&sCdMaoPropria=" + maopropria + "&nVlValorDeclarado=0" + valordeclarado + "&sCdAvisoRecebimento=" + avisorecebimento + "&nCdServico=04510" + "&nVlDiametro=0&" + "StrRetorno=xml&nIndicaCalculo="
        $.getJSON(url2, function (data) {
            //alert("Valor: " + JSON.parse(data).cServico.Valor);
            $('input[name="resultado"]').val(data.cServico.Valor);

        });
    });
});