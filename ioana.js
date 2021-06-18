$('.container1').on('click', function(event){
    $(document.body).css({ overflow: "hidden" });
    // $('.popup').css({visibility: 'visible', opacity: '1'})
});

$('.popup_close').on('click', function(event){
    $('.popup').css({visibility: 'hidden', opacity: '0'})
    // $(document.body).css({ overflow: "scroll" })
});

function test() {
    console.log('ioooooo');
}

test();


