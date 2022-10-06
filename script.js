$('#square').append ('<div class = box></div>');
$('#square').append ('<div class = box></div>');
$('#square').append ('<div class = box></div>');
$('#square').append ('<div class = box></div>');
$('#square').append ('<div class = box></div>');
$('#square').append ('<div class = box></div>');
$('#square').append ('<div class = box></div>');
$('#square').append ('<div class = box></div>');
$('#square').append ('<div class = box></div>');
$('#square').append ('<div class = box></div>');
$('#square').append ('<div class = box></div>');
$('#square').append ('<div class = box></div>');
$('#square').append ('<div class = box></div>');
$('#square').append ('<div class = box></div>');
$('#square').append ('<div class = box></div>');
$('#square').append ('<div class = box></div>');

$('.box').on('click', function(){
    $(this).toggleClass("clicked")
});
$('.box').hover(function() {
    $(this).css('cursor', 'pointer')
})