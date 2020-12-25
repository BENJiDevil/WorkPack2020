/* scroll to block */
$("body").on('click', '.go_to', function(e){
    var fixed_offset = 0;
    $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1000);
    e.preventDefault();
});
/* scroll top TOP
$("body").on('click', '.toTop', function(e){
    $('html,body').stop().animate({ scrollTop: 0 }, 1000);
    e.preventDefault();
});
 */