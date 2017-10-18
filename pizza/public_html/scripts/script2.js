document.addEventListener("DOMContentLoaded", function(event) {
    

$(".pay").on("click", function () {
  
 $(".badge").text("1");  
 $('#myModal').modal('hide');
 $(".alert").removeClass("fade");
 $(".alert").addClass("show");
 });

console.log("DOM fully loaded and parsed");
  });