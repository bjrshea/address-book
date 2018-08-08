$(document).ready (function() {
  $("#formOne").submit (function(event) {
    var nameInput = $("input#name").val();
    var addressInput = $("input#address").val();
    var cityInput = $("input#city").val();
    var stateInput = $("input#state").val();
    var zipInput = $("input#zip").val();
    var phoneInput= $("input#phone").val();
    var emailInput = $("input#email").val();

    $(".name").text (nameInput);
    $(".address").text (addressInput);
    $(".city").text (cityInput);
    $(".state").text (stateInput);
    $(".zip").text (zipInput);
    $(".phone").text (phoneInput);
    $(".email").text (emailInput);

    $("#bio").show();
    event.preventDefault();
  });


});
