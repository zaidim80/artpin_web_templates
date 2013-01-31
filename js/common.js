function showHiddenForm(srcButton){
	srcButton.hide();
	$('.ap-hidden-form').slideOut();
}

$(document).ready(function() {
	$('ul.tabs').delegate('li:not(.current)', 'click', function() {
		$(this).addClass('current').siblings().removeClass('current').parents('div.ap-tabs-wrapper').find('div.box').eq($(this).index()).fadeIn(150).siblings('div.box').hide();
	});
	$('.ap-slides').slides({
		next: 'slides_next',
		prev: 'slides_prev',
		bigTarget: true,
		generatePagination: false
	});
	$('.ap-hidden-form').slideUp();
	$('#ap-add-comment-button').click(function(event) {
		event.preventDefault();
		$('.ap-hidden-form').slideDown();
		$('#ap-add-comment-button').hide();
	});
});
