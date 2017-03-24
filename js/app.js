$(function() {
  $( "#addComment" ).click(function() {
    $( "#addComment" ).fadeOut( 100, function() {
  	  $( "#addCommentInput" ).fadeIn( 600, function() {
  	  });
    });
  });
});
$(function() {
  $( "#addComment2" ).click(function() {
    $( "#addComment2" ).fadeOut( 100, function() {
      $( "#addCommentInput2" ).fadeIn( 600, function() {
      });
    });
  });
});

$(function() {
  $( "#slider" ).slider({
    animate: true,
    value:0,
    range: "min",
    min: 0,
    max: 100,
    step: 1,
    slide: function( event, ui ) {
      var curValue = ui.value;
      var tooltip = '<div class="tooltip"><div class="tooltip-inner">' + curValue + '</div><div class="tooltip-arrow"></div></div>';
         $('.ui-slider-handle').html(tooltip);
    },
  });
  // $('#min').text($('#slider').slider('option', 'min'));
  // $('#max').text($('#slider').slider('option', 'max'));
});

$(function(){
  $('.eigenvalue').each(function(){
    $( this).find('#s1').empty().slider({
      animate: true,
      range: "min",
      value:0,
      min: 0,
      max: 100,
      step: 1,
      slide: function( event, ui ) {
        // $( this ).find('#r1').html( ui.value );
        var curValue = this(ui.value);
        var tooltip = '<div class="tooltip"><div class="tooltip-inner">' + curValue + '</div><div class="tooltip-arrow"></div></div>';
         $('.ui-slider-handle').html(tooltip);
      },
      change: function(event, ui) {
      }
    });
  });
});
// DRAG AND DROP BEGINS
  // This is the text drag and drop
  $(function() {
    $( "#sortable" ).sortable({
    	placeholder: "dd-drop-area-text"
    });
    $( "#sortable" ).disableSelection();
  });
  // This is the image drag and drop
  $(function() {
    $("#sortableImage").sortable({
      placeholder: "dd-drop-area-image"
    });
  });
// DRAG AND DROP ENDS
// PROGRESS BAR
  $(function() {
    $( "#progressbar" ).progressbar({
      value: 76
    });
  });
// PROGRESS BAR
  $(function() {
    $( "#progressbar2" ).progressbar({
      value: 50
    });
  });

equalheight = function(container){

var currentTallest = 0,
     currentRowStart = 0,
     rowDivs = new Array(),
     $el,
     topPosition = 0;
 $(container).each(function() {

   $el = $(this);
   $($el).height('auto')
   topPostion = $el.position().top;

   if (currentRowStart != topPostion) {
     for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
       rowDivs[currentDiv].height(currentTallest);
     }
     rowDivs.length = 0; // empty the array
     currentRowStart = topPostion;
     currentTallest = $el.height();
     rowDivs.push($el);
   } else {
     rowDivs.push($el);
     currentTallest = (currentTallest < $el.height()) ? ($el.height()) : (currentTallest);
  }
   for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
     rowDivs[currentDiv].height(currentTallest);
   }
 });
}
