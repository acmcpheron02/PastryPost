$('.table_header').click(function(){
    $(this).nextUntil('tr.table_header').slideToggle(100);
});