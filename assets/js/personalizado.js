$(document).ready(function () {
    $("input[name='equipamento']").blur(function () {
        var $morada = $("input[name='morada']");
        var equipamento = $(this).val();
        
        $.getJSON('proc_pesq.php', {equipamento},
            function(retorno){
                $morada.val(retorno.morada);
            }
        );        
    });
});