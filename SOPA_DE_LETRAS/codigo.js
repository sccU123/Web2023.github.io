$(document).ready(function(){
    $(".lorem").hover(function(){
        $(".lorem").addClass('resaltar');
    });

    $(".lorem").mouseleave(function(){
        $(".lorem").removeClass('resaltar');
    });

    $(".estilo").hover(function(){
        $(".estilo").addClass('resaltar');
    });

    $(".estilo").mouseleave(function(){
        $(".estilo ").removeClass('resaltar');
    });
});