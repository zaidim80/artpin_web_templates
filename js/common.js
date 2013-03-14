var last_fixed_line = -1;

function showHiddenForm(srcButton){
	srcButton.hide();
	$('.ap-hidden-form').slideOut();
}

function popupPage(page_code){
	e = $('<div class="ap-popup-page ap-popup-page-'+page_code+'">');
	e.html('<a class="ap-close-popup" href="#">&nbsp;</a>'+$('#ap-hidden-'+page_code).html());
	switch(page_code){
		case 'reg':
			e.lightbox_me({
				centered: true,
				zIndex: 100000,
				destroyOnClose: true,
				onLoad: function(){
					$('.ap-popup-page #agreement-link').click(function(){
						$('.ap-popup-page .ap-user-agreement').slideToggle();
					});
				},
				closeSelector: '.ap-close-popup'
			});
			break;
		default:
			e.lightbox_me({
				centered: true,
				zIndex: 100000,
				destroyOnClose: true,
				closeSelector: '.ap-close-popup'
			});
	}
}

$(document).ready(function() {
	$('ul.tabs').delegate('li:not(.current)', 'click', function(){
		$(this).addClass('current').siblings().removeClass('current').parents('div.ap-tabs-wrapper').find('div.box').eq($(this).index()).fadeIn(150).siblings('div.box').hide();
	});
	$('.ap-slides').slides({
		next: 'slides_next',
		prev: 'slides_prev',
		bigTarget: true,
		generatePagination: false
	});
	$('.ap-hidden-form').slideUp();
	$('#ap-add-comment-button').click(function(event){
		event.preventDefault();
		$('.ap-hidden-form').slideDown();
		$('#ap-add-comment-button').hide();
	});
	$('.ap-searchlink').click(function(event){
		event.preventDefault();
		$('.ap-searchbar').animate({'height':'100px'},500,function(){
			$('.ap-searchlink').hide();
			$('.ap-searching').fadeIn();
			$('#search_text').focus();
			$('#search_text').val('кино');
		});
	});
	$('.ap-searching a.ap-close').click(function(event){
		event.preventDefault();
		$('.ap-searching').fadeOut(200);
		$('.ap-searchbar').animate({'height':'60px'},500,function(){
			$('.ap-searchlink').fadeIn();
		});
	});
	$(document).scroll(function(){
		var dl = null;
		var dli = -1;
		$('div.box .ap-date-line-placer').each(function(index){
			if($(this).offset().top<$(window).scrollTop()){
				dl = $(this);
				dli = index;
				$(this).children('.ap-date-line').addClass('ap-fixed-date'); 
			}else{
				$(this).children('.ap-date-line').removeClass('ap-fixed-date'); 
			}
		});
	});
});
