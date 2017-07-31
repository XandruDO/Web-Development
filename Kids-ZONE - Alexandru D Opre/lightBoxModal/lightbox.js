window.onload = function () {

    $('li a').click(function (e) {
        $('#myModal img').attr('src', $(this).attr('data-img-url'));
    }); //Whenever one of the links from the ul list is clicked, it activates the modal (#myModal) and displays whatever is in data-img-url
    
}