
$(document).ready(function(){
// form-control-success
   $('.btn-success').click(function(event){
       $(event.target).parent().find('.form-control').prop('type', 'text');
   });
   $('#inputSuccess').blur(function(event){
       $(event.target).siblings().last().text('Dodano pomyślnie');
       $(event.target).parent().addClass('has-success');
       $(event.target).addClass('form-control-success');
       $(event.target).addClass('form-control-success');
       $(event.target).parent().siblings().last().addClass('alert-success');
       $(event.target).parent().siblings().last().text('Pomyślnie udało się');
   });
});

