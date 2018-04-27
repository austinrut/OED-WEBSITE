// JavaScript Document// JavaScript Document
 
//google custom search
(function() {
  var cx = '015038329102107288713:s-ut1uxb_le';
  var gcse = document.createElement('script');
  gcse.type = 'text/javascript';
  gcse.async = true;
  gcse.src = (document.location.protocol == 'https:' ? 'https:' : 'http:') +
      '//www.google.com/cse/cse.js?cx=' + cx;
  var s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(gcse, s); 
})();


//run on document ready

jQuery.noConflict();
(function($){
$(document).ready(function() {
 //set up off canvas 
  $('[data-toggle=offcanvas]').click(function() {
    $('.row-offcanvas').toggleClass('active');
    $('.showhide').toggle();
  });
	
});
})(jQuery);

//resize tabs in tabpanel to fill width

(function($){
  $(document).ready(function() {
    if($('.tab-panel').length){
      var numTabs = $('.tab-panel .nav-tabs').children('li').length;
	  var tabWidth =  (100 / numTabs) + '%';
	  $('.tab-panel .nav-tabs').children('li').css('width',tabWidth);
	}
  });
})(jQuery);

//expand all function for simple collapse element
(function($){
	$('.collapse-list-toggle').click(function(event) { 
	  var target = $(this).attr('href');
	  var toggle = event.target.id;
	  expandCollapseList(toggle,target);
	  return false; 
	});
	
	function expandCollapseList(toggle,target){
		toggle = '#' + toggle;
		$(target + ' .panel-collapse').collapse('toggle');
		if($(toggle).hasClass('collapsed')){
			$(toggle).removeClass('collapsed');
			$(toggle).addClass('expanded');
			$(toggle).html('[–] Collapse All');
		} else{
		  $(toggle).removeClass('expanded');
		  $(toggle).addClass('collapsed');
		  $(toggle).html('[+] Expand All');
		}
	}
})(jQuery);


//include facebook script if needed
(function($){
	$(document).ready(function(){
		if ($('.fb-page').length){
			(function(d, s, id) {
				var js, fjs = d.getElementsByTagName(s)[0];
				if (d.getElementById(id)) return;
				js = d.createElement(s); js.id = id;
				js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.6&appId=1390635147893160";
				fjs.parentNode.insertBefore(js, fjs);
			}(document, 'script', 'facebook-jssdk'));
		}
	});
})(jQuery);
