declare var $ : any;

function ShowLoginBlock(){

    $('.login-block').css('display', 'block');
    $('.join-block').css('display', 'none');

}
function ShowJoinBlock(){

    $('.login-block').css('display', 'none');
    $('.join-block').css('display', 'block');
    
}

$(function(){
    
    $('.toLogin').click(function(event){
       ShowLoginBlock();
    });
    $('.toJoin').click(function(event){
        ShowJoinBlock();
    });
    $('.ui.rating').rating();
 $( "#datepicker" ).datepicker();

});