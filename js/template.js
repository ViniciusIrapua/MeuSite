function runApp() {
    $('#toggleMenu').click(controlaMenu)
}


function controlaMenu() {

    if ($('#wrap>nav').is(':visible')) {
        $('#wrap>nav').hide();
    } else {
        $('#wrap>nav').show();
    }

    return false;
}



$(document).ready(runApp);