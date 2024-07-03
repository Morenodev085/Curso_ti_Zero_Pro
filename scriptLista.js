$(document).ready(function(){
    $('#form-tarefa').submit(function(event){
        event.preventDefault();
        
        var novaTarefa = $('#input-tarefa').val().trim();
        
        if (novaTarefa !== '') {
            $('#lista-tarefas').append('<li>' + novaTarefa + '</li>');
            $('#input-tarefa').val('');
        } else {
            alert('Por favor, digite uma tarefa válida.');
        }
    });

    $('#lista-tarefas').on('click', 'li', function(){
        $(this).toggleClass('riscado');
    });
});
