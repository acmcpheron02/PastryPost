// Simple code that uses Jquery to target the table header div and give it slideToggle functionality. Had to find nextUntil function with google search, not sure if a better solution exists.
$('.table_header').click(function(){
    $(this).nextUntil('tr.table_header').slideToggle();
});

// Display an alert when a user presses those buttons that do nothing. For fun, it uses the text value stored in the button.
$('.inactive').click(function(){
    alert("Sorry! I know you wanted to " + this.text + ", but this button doesn't do anything right now. Maybe try again later?")
});