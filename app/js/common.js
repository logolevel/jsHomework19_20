$(function() {

/*carousel*/
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:0,
    responsive:{
        0:{
            items:1
        }
    }
})

/*accordion*/
var $linkFirst = $('.accordion > dt:first-child');
var $allPanels = $('.accordion > dd').hide();
var $allLinks = $('.accordion > dt > a');

function openFirstPanel(){
  $('.accordion > dt:first-child').next().addClass('active-ac').slideDown();
}

openFirstPanel();
  
$allLinks.click(function() {
    $this = $(this);
    $target =  $this.parent().next();
    
  
    if($target.hasClass('active-ac')){
      $target.removeClass('active-ac').slideUp(); 
      $this.removeClass('active-ac-link'); 
    }else{
    	$linkFirst.removeClass('active-ac-link');
      $allPanels.removeClass('active-ac').slideUp();
      $allLinks.removeClass('active-ac-link');
      $target.addClass('active-ac').slideDown();
      $this.addClass('active-ac-link');
    }
    
  return false;
});




});
