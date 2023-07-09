$('form').on('submit', function(e) {
    e.preventDefault();

    const adicionarTarefa = $('#addTarefa').val();
    const novaTarefa = $(`<li style="display: none"></li>`);
    $(`<li> ${adicionarTarefa} </li>`).appendTo(novaTarefa);

    $(novaTarefa).appendTo('ul');
    novaTarefa.fadeIn(1000);

    $('#addTarefa').val('');

    $('ul').on('click', 'li', function() {
        $(this).toggleClass('line-through');
    })
})