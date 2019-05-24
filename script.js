$(document).ready( function() {
    $('.img-fluid').hover(
        function() {
            $(this).animate({ 'zoom': 1.5 }, 400);
        },
        function() {
            $(this).animate({ 'zoom': 1 }, 400);
        });
});
$("#monbouton").click(function () {
        alert("Merci Beaucoup!");
        $("#jugement").attr("src", "img/lelegendairechillywillykowalski.png");
        $("#pepi").html("Willy vous aimes beaucoup!!");
        $("#donataion").css("background-color", "Red");
});