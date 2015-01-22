 $(document).ready(function() {

 	$(".navbar a[href^='#']").on('click', function(e) {
	   // prevent default anchor click behavior
	   e.preventDefault();

	   // store hash
	   var hash = this.hash;

	   // animate
	   $('html, body').animate({
	       scrollTop: $(this.hash).offset().top - 89
	     }, 300, function(){

	       // when done, add hash to url
	       // (default click behaviour)
	       window.location.hash = hash;
	   });
	});

	$(".videowrapper").fitVids();
});