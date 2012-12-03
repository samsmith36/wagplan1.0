$(function () { // wait for document to load
	function loadRatingsRecommend() {
		alert('loadRatingsRecommend');
		$('.ratings-recommend input.rating').rating({
			focus: function (value, link) {
				var tip = $('#ratings-recommend-info');
				tip[0].data = tip[0].data || tip.html();
				tip.html(link.title || 'value: ' + value);
			},
			blur: function (value, link) {
				var tip = $('#ratings-recommend-info');
				$('#ratings-info').html(link.title || '');
			},
			callback: function (value, link) {
				var tip = $('#ratings-recommend-info');
				tip[0].data = tip[0].data || tip.html();
				tip.html(link.title || 'value: ' + value);
			}
		});
	}


});