$('.btn-user-register').click(function (){
    $('.user-register').show(200);
});
$('.btn-user-register').click(function (){
    $('.user-login').hide(200);
});
$('.btn-user-login').click(function (){
    $('.user-login').show(200);
});
$('.btn-user-login').click(function (){
    $('.user-register').hide(200);
});

function openNav() {
    document.getElementById("menu").style.width = "60%";
}
  
function closeNav() {
    document.getElementById("menu").style.width = "0%";
}